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
  const { handleSubmit, register, isCommiting, setIsCommiting } = useForm();

  const handleUpdate = async (formValues: SubmitFields | any) => {
    const id = initialValues?.id;
    const name = formValues.name;

    setIsCommiting(true)

    if (action === "update") {
      setIsCommiting(true)
      await fetchJson(`/api/tags/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name }),
      });
      await mutate("/api/tags");
    }
    if (action === "create") {
      const response = await fetchJson(`/api/tags`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name }),
      });

      await mutate("/api/tags");
      router.push(`/tags/${response.id}`, undefined, { shallow: true });
    }
    setIsCommiting(false)
  };

  const handleDelete = async () => {
    const id = initialValues?.id;
    setIsCommiting(true)
    await fetchJson(`/api/tags/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    await mutate("/api/tags");
    setIsCommiting(false)
    router.push(`/tags`)

  };

  return (
    <Form
      onSubmit={(e) => handleSubmit(e, handleUpdate)}
      onDelete={action === "update" ? handleDelete : undefined}
      itemName={initialValues?.name}
      lastModified={initialValues?.last_update}
      isCommiting={isCommiting}
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
