import React, { useEffect, useState } from "react";
import { mutate } from "swr";
import { useRouter } from "next/router";

import {
  FullWindowData,
  TagData,
  CategoryData,
  LayoutData,
  SnapshotInfo,
  CreatedFrom,
} from "types";
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
import useForm from "../../../../lib/useForm";
import Form from "../Form/Form";
import fetchJson from "../../../../lib/fetchJson";
import { useAllData } from "../../../../lib/useAllData";

const emptyInitialValues = {
  name: "",
  description: "",
  thumbanail: "",
  type: "",
  tags: [],
  category: {},
  layouts: [],
  active: false,
  featured: false,
  created_from: {},
};

type WindowFormFields = {
  name: string;
  description: string;
  thumbnail: string;
  type: string;
  tags: FullWindowData["tags"];
  category: FullWindowData["category"];
  layouts: FullWindowData["layouts"];
  active: boolean;
  featured: boolean;
  created_from: CreatedFrom;
};

type WindowFormProps = {
  action: "create" | "update";
  availableTags: Array<TagData>;
  availableCategories: Array<CategoryData>;
  availableLayouts: Array<LayoutData>;
  initialValues?: FullWindowData;
};

const WindowForm: React.FC<WindowFormProps> = ({
  action,
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
  const [newCreatedFrom, setNewCreatedFrom] = useState<CreatedFrom | null>(
    null
  );
  const [onboardings, setOnboardings] = useState<FullWindowData["layouts"]>([]);
  const [status, setStatus] = useState({ active: false, featured: false });
  const [snapshotInfo, setSnapshotInfo] = useState<SnapshotInfo | null>(null);
  const router = useRouter();
  const {
    mutate: { windowsMutate },
  } = useAllData({ filtered: true });
  const curatedWindowId = router.query.id;

  const updateValue = (field: string, value: any) => {
    registerFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDescriptionChange = (value: string) => {
    const limitedValue = value.length > 160 ? value.slice(0, 160) : value;
    setDescription(limitedValue);
    updateValue("description", limitedValue);
  };

  const handleSnapshotChange = (value: SnapshotInfo | null) => {
    setSnapshotInfo(value);
    updateValue("name", value?.window.name);
    updateValue("type", value?.window.window_type);
    updateValue("created_from", {
      username: value?.username,
      board: value?.board.id,
      window: value?.window.id,
    });
  };

  const handleTagsChange = (value: FullWindowData["tags"]) => {
    setTags(value);
    updateValue("tags", value);
  };

  const handleCategoryChange = (value: FullWindowData["category"] | null) => {
    setCategory(value);
    updateValue("category", value);
  };

  const handleOnboardingChange = (value: FullWindowData["layouts"]) => {
    setOnboardings(value);
    updateValue("layouts", value);
  };

  const handleStatusChange = (value: {
    active: boolean;
    featured: boolean;
  }) => {
    setStatus(value);
    updateValue("active", value.active);
    updateValue("featured", value.featured);
  };

  const { handleSubmit, register, registerFields } = useForm();

  useEffect(() => {
    if (initialValues) {
      registerFields(initialValues);
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
    } else {
      registerFields(emptyInitialValues);
    }
  }, [initialValues]);

  const takeSnapshot = () => {
    if (snapshotInfo) {
      const data = {
        username: snapshotInfo.username,
        board: snapshotInfo.board.id,
        window: snapshotInfo.window.id,
      };
      fetch(`/api/curated/windows/${curatedWindowId}/snapshot`, {
        method: "PUT",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => setNewCreatedFrom(res))
        .catch(() => console.log("error taking snapshot"));
    }
  };

  const handleUpdate = async (formValues: WindowFormFields) => {
    const id = initialValues?.id;

    if (action === "update") {
      await fetchJson(`/api/curated/windows/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
    }

    if (action === "create") {
      const response = await fetchJson(`/api/curated/windows`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      router.push(`/windows/${response.id}`, undefined, { shallow: true });
    }

    mutate("/api/curated/windows");
    windowsMutate();
  };

  const handleDelete = async () => {
    const id = initialValues?.id;
    await fetchJson(`/api/curated/windows/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    mutate("/api/curated/windows");
    windowsMutate();
  };

  return (
    <Form
      onSubmit={(e) => handleSubmit(e, handleUpdate)}
      onDelete={handleDelete}
      itemName={initialValues?.name}
      lastModified={initialValues?.last_update}
    >
      <FormTitle>{initialValues ? "Edit Window" : "Create Window"}</FormTitle>
      <GridContainer>
        <WindowSearchField>
          <WindowSearch
            clearSnapshot={() => handleSnapshotChange(null)}
            initialValues={newCreatedFrom || initialValues?.created_from}
            onSelectWindow={(username, board, window, date) => {
              handleSnapshotChange({
                username,
                board,
                window,
                date,
              });
            }}
          />
        </WindowSearchField>
        <SnapshotField>
          <Snapshot {...snapshotInfo} onUpdate={takeSnapshot} />
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
          <ThumbnailPicker
            key={initialValues?.id}
            value={initialValues?.thumbnail}
            ref={register}
          />
        </ThumbnailField>
        <TagsFormControl>
          <FieldLabel>Tags</FieldLabel>
          <Tags
            availableTags={availableTags.map(({ name, id }) => ({ name, id }))}
            selectedTags={tags}
            handleChange={(_, value) => {
              handleTagsChange(value);
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
              handleCategoryChange(value);
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
              handleOnboardingChange(value);
            }}
          />
          <SelectedOnboardings
            onboardings={onboardings}
            onDelete={(id) => {
              handleOnboardingChange(
                onboardings.filter((item) => item.id !== id)
              );
            }}
            onChangeRank={({ id, rank }) => {
              handleOnboardingChange(
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
              handleStatusChange({ ...status, active: newStatusValue })
            }
            updateFeatured={(newStatusValue) =>
              handleStatusChange({ ...status, featured: newStatusValue })
            }
          />
        </StatusFormControl>
      </GridContainer>
    </Form>
  );
};

export default WindowForm;
