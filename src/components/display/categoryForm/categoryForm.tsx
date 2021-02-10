import React, { useState } from "react";
import { FormControl, OutlinedInput } from "@material-ui/core";

import { FormTitle, FieldLabel } from "../styles";

type CategoryFormProps = {
  initialValues: {
    name: string;
  };
};
const CategoryForm: React.FC<CategoryFormProps> = ({ initialValues }) => {
  const [nameValue, setNameValue] = useState(
    initialValues ? initialValues.name : ""
  );
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };
  return (
    <>
      <FormTitle>Categories</FormTitle>
      <FormControl>
        <FieldLabel>Category Name</FieldLabel>
        <OutlinedInput
          value={nameValue}
          onChange={handleNameChange}
          placeholder="Category Name"
        />
      </FormControl>
    </>
  );
};

export default CategoryForm;
