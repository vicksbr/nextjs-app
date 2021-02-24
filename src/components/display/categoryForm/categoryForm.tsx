import React, { useState, useLayoutEffect } from "react";
import { FormControl, OutlinedInput } from "@material-ui/core";

import { FormGrid } from "./styles";
import { FormTitle, FieldLabel } from "../styles";

type CategoryFormProps = {
  formData?: {
    name: string;
    rank: number;
  };
};
const CategoryForm: React.FC<CategoryFormProps> = ({ formData }) => {
  const [name, setName] = useState(formData?.name || "");
  const [rank, setRank] = useState(formData?.rank || 1)


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleRankChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setRank(value >= 1 ? value : 1);
  };

  useLayoutEffect(() => {
    if (formData) {
      setName(formData.name)
      setRank(formData.rank)
    }
  }, [formData]);

  return (
    <>
      <FormTitle>Categories</FormTitle>
      <FormGrid>
        <FormControl>
          <FieldLabel>Category Name</FieldLabel>
          <OutlinedInput
            value={name}
            onChange={handleNameChange}
            placeholder="Category Name"
          />
        </FormControl>
        <FormControl>
          <FieldLabel>Rank</FieldLabel>
          <OutlinedInput
            value={rank}
            onChange={handleRankChange}
            type="number"
            placeholder="Rank"
            inputProps={{
              min: 1,
            }}
          ></OutlinedInput>
        </FormControl>
      </FormGrid>
    </>
  );
};

export default CategoryForm;
