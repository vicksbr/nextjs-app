import React from "react";
import { mutate } from "swr";
import { useRouter } from "next/router";
import { FormControl, OutlinedInput } from "@material-ui/core";

import type { CategoryData } from "types";

import Form from "../Form/Form";
import useForm from "../../../../lib/useForm";
import fetchJson from "../../../../lib/fetchJson";
import { FormGrid } from "./styles";
import { FormTitle, FieldLabel } from "../styles";

type CategoryFormProps = {
  action: "create" | "update";
  initialValues?: CategoryData;
};
const CategoryForm: React.FC<CategoryFormProps> = ({
  initialValues,
  action,
}) => {
  const router = useRouter();
  const { handleSubmit, register } = useForm();


  const handleUpdate = async (formValues: any) => {
    const id = initialValues?.id;
    const newValues = {
      name: formValues.name,
      rank: formValues.rank,
    };

    if (action === "update") {
      await fetchJson(`/api/categories/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newValues),
      });
    }

    if (action === "create") {
      const response = await fetchJson(`/api/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newValues),
      });

      router.push(`/categories/${response.id}`, undefined, { shallow: true });
    }

    mutate("/api/categories");
  };

  const handleDelete = async () => {
    const id = initialValues?.id;
    await fetchJson(`/api/categories/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    mutate("/api/categories");
  };

  return (
    <Form
      onSubmit={(e: any) => handleSubmit(e, handleUpdate)}
      onDelete={handleDelete}
      itemName={initialValues?.name}
      lastModified={initialValues?.last_update}
    >
      <FormTitle>Categories</FormTitle>
      <FormGrid>
        <FormControl>
          <FieldLabel>Category Name</FieldLabel>
          <OutlinedInput
            name="name"
            placeholder="Category Name"
            inputRef={register}
            defaultValue={initialValues?.name}
            key={initialValues?.name}
          />
        </FormControl>
        <FormControl>
          <FieldLabel>Rank</FieldLabel>
          <OutlinedInput
            inputRef={register}
            name="rank"
            type="number"
            placeholder="Rank"
            inputProps={{ min: 1 }}
            key={initialValues?.rank}
            defaultValue={initialValues?.rank ?? 1}
          ></OutlinedInput>
        </FormControl>
      </FormGrid>
    </Form>
  );
};

export default CategoryForm;
