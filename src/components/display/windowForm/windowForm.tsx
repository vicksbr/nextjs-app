import React, { useEffect, useState } from "react";

import { FullWindowData, TagData, CategoryData, LayoutData } from "types";
import ThumbnailPicker from "components/thumbnailPicker";

import { FormTitle, FieldLabel } from "../styles";
import {
  GridContainer,
  WindowSearchField,
  SnapshotField,
  ThumbnailField,
  DescriptionFormControl,
  TagsFormControl,
  CategoriesFormControl,
  OnboardingFormControl,
  StatusFormControl,
} from "./styles";
import {
  Description,
  Tags,
  Categories,
  Onboarding,
  SelectedOnboardings,
  Status,
} from "./sections";
import WindowSearch from "./windowSearch";
import Snapshot from "./snapshot";

type WindowFormProps = {
  availableTags: Array<TagData>;
  availableCategories: Array<CategoryData>;
  availableLayouts: Array<LayoutData>;
  initialValues?: FullWindowData;
};

const WindowForm: React.FC<WindowFormProps> = ({
  availableTags,
  availableCategories,
  availableLayouts,
  initialValues,
}) => {
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<FullWindowData["tags"]>([]);
  const [category, setCategory] = useState<FullWindowData["category"] | null>(
    null
  );
  const [onboardings, setOnboardings] = useState<FullWindowData["layouts"]>([]);
  const [status, setStatus] = useState({ active: false, featured: false });

  const handleDescriptionChange = (value: string) => {
    setDescription(value.length > 160 ? value.slice(0, 160) : value);
  };

  useEffect(() => {
    if (initialValues) {
      setDescription(initialValues.description || "");
      setTags(initialValues.tags || []);
      setCategory(initialValues?.category || null);
      setOnboardings(initialValues?.layouts || []);
      setStatus(
        {
          active: initialValues.active,
          featured: initialValues.featured,
        } || { active: false, featured: false }
      );
    }
  }, [initialValues]);

  return (
    <>
      <FormTitle>Edit Window</FormTitle>
      <GridContainer>
        <WindowSearchField>
          <WindowSearch
            initialValues={initialValues?.created_from}
            getBoards={() => new Promise(() => {})}
            getWindows={() => new Promise(() => {})}
            onSelectWindow={() => console.log("selected window")}
          />
        </WindowSearchField>
        <SnapshotField>
          <Snapshot
            onChangeWindow={() => console.log("changed window")}
            onUpdate={() => console.log("update")}
          />
        </SnapshotField>
        <DescriptionFormControl>
          <FieldLabel>Description</FieldLabel>
          <Description
            description={description}
            descriptionHandler={(event) =>
              handleDescriptionChange(event.target.value)
            }
          />
        </DescriptionFormControl>
        <ThumbnailField>
          <ThumbnailPicker value={initialValues?.thumbnail} />
        </ThumbnailField>
        <TagsFormControl>
          <FieldLabel>Tags</FieldLabel>
          <Tags
            availableTags={availableTags.map(({ name, id }) => ({ name, id }))}
            selectedTags={tags}
            handleChange={(_, value) => {
              setTags(value);
            }}
          />
        </TagsFormControl>
        <CategoriesFormControl>
          <FieldLabel>Categories</FieldLabel>
          <Categories
            availableCategories={availableCategories.map(({ name, id }) => ({
              name,
              id,
            }))}
            selectedCategories={category}
            handleChange={(_, value) => {
              setCategory(value);
            }}
          />
        </CategoriesFormControl>
        <OnboardingFormControl>
          <FieldLabel>Onboarding</FieldLabel>
          <Onboarding
            availableOnboardings={availableLayouts.map(({ name, id }) => ({
              name,
              id,
              rank: 9,
            }))}
            selectedOnboardings={onboardings}
            handleChange={(_, value) => {
              setOnboardings(value);
            }}
          />
          <SelectedOnboardings
            onboardings={onboardings}
            onDelete={(id) => {
              setOnboardings(onboardings.filter((item) => item.id !== id));
            }}
            onChangeRank={({ id, rank }) => {
              setOnboardings(
                onboardings.map((item) =>
                  item.id === id ? { ...item, rank } : item
                )
              );
            }}
          />
        </OnboardingFormControl>
        <StatusFormControl>
          <FieldLabel>Status</FieldLabel>
          <Status
            status={status}
            updateActive={(newStatusValue) =>
              setStatus({ ...status, active: newStatusValue })
            }
            updateFeatured={(newStatusValue) =>
              setStatus({ ...status, featured: newStatusValue })
            }
          />
        </StatusFormControl>
      </GridContainer>
    </>
  );
};

export default WindowForm;
