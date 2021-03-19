import React from "react";
import { mutate } from "swr";
import { useRouter } from "next/router";
import { OutlinedInput } from "@material-ui/core";

import Form from "../Form/Form";
import useForm from "../../../../lib/useForm";
import { NameField } from "./style";
import { FormTitle, FieldLabel } from "../styles";

import { TagData } from "types";
import fetchJson from "../../../../lib/fetchJson";

type TagFormProps = {
  action: "create" | "update";
  initialValues?: TagData;
};

type SubmitFields = Pick<TagData, "name">;

const TagForm: React.FC<TagFormProps> = ({ initialValues, action }) => {
  const router = useRouter();
  const { handleSubmit, register } = useForm();

  const handleUpdate = async (formValues: SubmitFields | any) => {
    const id = initialValues?.id;
    const name = formValues.name;

    if (action === "update") {
      await fetchJson(`/api/tags/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name }),
      });
    }

    if (action === "create") {
      const response = await fetchJson(`/api/tags`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name }),
      });

      router.push(`/tags/${response.id}`, undefined, { shallow: true });
    }

    mutate("/api/tags");

  };

  const handleDelete = async () => {
    const id = initialValues?.id;
    await fetchJson(`/api/tags/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    mutate("/api/tags");

  };

  return (
    <Form
      onSubmit={(e) => handleSubmit(e, handleUpdate)}
      onDelete={handleDelete}
      itemName={initialValues?.name}
      lastModified={initialValues?.last_update}
    >
      <FormTitle>Tags</FormTitle>
      <NameField>
        <FieldLabel>Tag Name</FieldLabel>
        <OutlinedInput
          name="name"
          inputRef={register}
          key={initialValues?.name}
          defaultValue={initialValues?.name}
          placeholder="Tag Name"
        />
      </NameField>
    </Form>
  );
};

export default TagForm;
