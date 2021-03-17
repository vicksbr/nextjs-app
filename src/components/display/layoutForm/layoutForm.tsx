import React from "react";
import { mutate } from "swr";
import { useRouter } from "next/router";
import { OutlinedInput, Switch } from "@material-ui/core";

import ThumbnailPicker from "components/thumbnailPicker";

import fetchJson from "../../../../lib/fetchJson";
import useForm from "../../../../lib/useForm";
import { useAllData } from "../../../../lib/useAllData";
import Form from "../Form/Form";
import { FieldLabel, FormTitle } from "../styles";
import {
  FormGrid,
  NameField,
  ThumbnailField,
  StatusField,
  StatusControlLabel,
  RankField,
} from "./styles";

import type { LayoutData } from "types";

type LayoutFormProps = {
  action: "create" | "update";
  initialValues?: LayoutData;
};

type LayoutFormFields = Omit<LayoutData, "id" | "last_update" | "active"> & {
  active: string;
};

const formOptions = {
  skipFormData: ["active"],
};

const LayoutForm: React.FC<LayoutFormProps> = ({ initialValues, action }) => {
  const router = useRouter();
  const { handleSubmit, register, registerFields } = useForm(formOptions);
  const {
    mutate: { layoutsMutate },
  } = useAllData({ filtered: true });

  const updateValue = (field: string, value: any) => {
    registerFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdate = async (formValues: LayoutFormFields) => {
    const id = initialValues?.id;
    const newValues = {
      name: formValues.name,
      active: formValues.active === "true" ? true : false,
      rank: formValues.rank,
      thumbnail: formValues.thumbnail,
    };

    if (action === "update") {
      await fetchJson(`/api/curated/layouts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newValues),
      });
    }

    if (action === "create") {
      const response = await fetchJson(`/api/curated/layouts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newValues),
      });
      router.push(`/layouts/${response.id}`, undefined, { shallow: true });
    }

    mutate("/api/curated/layouts");
    layoutsMutate();
  };

  const handleDelete = async () => {
    const id = initialValues?.id;
    await fetchJson(`/api/curated/layouts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    mutate("/api/curated/layouts");
    layoutsMutate();
  };

  return (
    <Form
      onSubmit={(e) => handleSubmit(e, handleUpdate)}
      onDelete={handleDelete}
      itemName={initialValues?.name}
      lastModified={initialValues?.last_update}
    >
      <FormTitle>Layouts</FormTitle>
      <FormGrid>
        <NameField variant="outlined">
          <FieldLabel>Layout Name</FieldLabel>
          <OutlinedInput
            name="name"
            placeholder="Layout Name"
            defaultValue={initialValues?.name}
            key={initialValues?.name}
            inputRef={register}
          />
        </NameField>
        <ThumbnailField>
          <ThumbnailPicker
            key={initialValues?.id}
            value={initialValues?.thumbnail}
            ref={register}
          />
        </ThumbnailField>
        <StatusField key={`${initialValues?.name}-${initialValues?.active}`}>
          <FieldLabel>Status</FieldLabel>
          <StatusControlLabel
            label="Active"
            name="active"
            inputRef={register}
            control={
              <Switch
                defaultChecked={initialValues?.active}
                onChange={(e, checked) => {
                  e.target.checked = !!checked;
                  updateValue("active", !!checked);
                }}
              />
            }
          />
        </StatusField>
        <RankField>
          <FieldLabel>Rank</FieldLabel>
          <OutlinedInput
            key={initialValues?.rank}
            type="number"
            name="rank"
            inputRef={register}
            defaultValue={initialValues?.rank}
          ></OutlinedInput>
        </RankField>
      </FormGrid>
    </Form>
  );
};

export default LayoutForm;
