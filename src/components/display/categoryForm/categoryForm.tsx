import React, { useState, useEffect } from "react";
import { FormControl, OutlinedInput } from "@material-ui/core";

import { FormGrid } from "./styles";
import { FormTitle, FieldLabel } from "../styles";

type CategoryFormProps = {
  initialValues?: {
    name: string;
    rank: number;
  };
};
const CategoryForm: React.FC<CategoryFormProps> = ({ initialValues }) => {
  const [name, setName] = useState(initialValues?.name ?? "");
  const [rank, setRank] = useState(initialValues?.rank ?? 1)


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleRankChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setRank(value >= 1 ? value : 1);
  };

  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name)
      setRank(initialValues.rank)
    }
  }, [initialValues]);

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
