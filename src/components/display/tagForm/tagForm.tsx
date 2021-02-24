import React, { useState, useEffect } from "react";
import { FormControl, OutlinedInput } from "@material-ui/core";

import { FormTitle, FieldLabel } from "../styles";

type TagFormProps = {
  initialValues?: {
    name: string;
  };
};

const TagForm: React.FC<TagFormProps> = ({ initialValues }) => {
  const [nameValue, setNameValue] = useState(initialValues?.name || "");

  useEffect(() => {
    if (initialValues?.name) {
      setNameValue(initialValues.name);
    }
  }, [initialValues]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  return (
    <>
      <FormTitle>Tags</FormTitle>
      <FormControl>
        <FieldLabel>Tag Name</FieldLabel>
        <OutlinedInput
          value={nameValue}
          onChange={handleNameChange}
          placeholder="Tag Name"
        />
      </FormControl>
    </>
  );
};

export default TagForm;
