import React, { useState, useEffect } from "react";
import { FormControl, OutlinedInput } from "@material-ui/core";

import { FormTitle, FieldLabel } from "../styles";

type TagFormProps = {
  values?: {
    name: string;
  };
};

const TagForm: React.FC<TagFormProps> = ({ values }) => {
  const [nameValue, setNameValue] = useState(values?.name || "");

  useEffect(() => {
    if (values?.name) {
      setNameValue(values.name);
    }
  }, [values]);

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
