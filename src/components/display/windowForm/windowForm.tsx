import React, { useState } from "react";

import { FormTitle, FieldLabel } from "../styles";

import {
  GridContainer,
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

import { FullWindowData, TagData, CategoryData, LayoutData } from "types";

type WindowFormProps = {
  availableTags: Array<TagData>;
  availableCategories: Array<CategoryData>;
  availableLayouts: Array<LayoutData>;
  initialValues: FullWindowData;
};

const WindowForm: React.FC<WindowFormProps> = ({
  availableTags,
  availableCategories,
  availableLayouts,
  initialValues,
}) => {
  const [description, setDescription] = useState(
    initialValues?.description || ""
  );
  const [tags, setTags] = useState<FullWindowData["tags"]>(
    initialValues?.tags || []
  );
  const [category, setCategory] = useState<FullWindowData["category"] | null>(
    initialValues?.category || null
  );
  const [onboardings, setOnboardings] = useState(initialValues?.layouts || []);
  const [status, setStatus] = useState(
    initialValues
      ? {
          active: initialValues.active,
          featured: initialValues.featured,
        }
      : { active: false, featured: false }
  );

  return (
    <>
      <FormTitle>Edit Window</FormTitle>
      <GridContainer>
        <DescriptionFormControl>
          <FieldLabel>Description</FieldLabel>
          <Description
            description={description}
            descriptionHandler={(event) => setDescription(event.target.value)}
          />
        </DescriptionFormControl>

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
