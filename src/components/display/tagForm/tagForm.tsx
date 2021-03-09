import React, { useState, useEffect } from "react";
import { OutlinedInput } from "@material-ui/core";

import { NameField } from "./style";
import { FormTitle, FieldLabel } from "../styles";

type TagFormProps = {
  initialValues?: {
    name: string;
  };
};

const TagForm: React.FC<TagFormProps> = ({ initialValues }) => {
  const [nameValue, setNameValue] = useState("");

  useEffect(() => {
    if (initialValues) {
      setNameValue(initialValues.name || "");
    }
  }, [initialValues]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  return (
    <>
      <FormTitle>Tags</FormTitle>
      <NameField>
        <FieldLabel>Tag Name</FieldLabel>
        <OutlinedInput
          value={nameValue}
          onChange={handleNameChange}
          placeholder="Tag Name"
        />
      </NameField>
    </>
  );
};

export default TagForm;
