import React, { useEffect, useState } from "react";
import { OutlinedInput, Switch } from "@material-ui/core";

import ThumbnailPicker from "components/thumbnailPicker";

import { FieldLabel, FormTitle } from "../styles";
import {
  FormGrid,
  NameField,
  ThumbnailField,
  StatusField,
  StatusControlLabel,
  RankField,
} from "./styles";

type LayoutFormProps = {
  initialValues?: {
    name?: string;
    active?: boolean;
    thumbnail?: string;
    rank?: number;
  };
};

const emptyValues: LayoutFormProps["initialValues"] = {
  name: "",
  active: false,
  thumbnail: "",
  rank: 1,
};

const getChangeEventValue = (
  event: React.ChangeEvent<HTMLInputElement>
): string => {
  return event.target.value;
};

const LayoutForm: React.FC<LayoutFormProps> = ({
  initialValues,
}) => {
  const [values, setValues] = useState(initialValues || emptyValues);

  const updateValue = (field: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (initialValues) {
      setValues(initialValues)
    }
  }, [initialValues]);

  const changeHandlers = {
    name: (event: React.ChangeEvent<HTMLInputElement>) => updateValue("name", getChangeEventValue(event)),
    active: () => updateValue("active", values.active === true ? false : true),
    rank: (event: React.ChangeEvent<HTMLInputElement>) => updateValue("rank", getChangeEventValue(event)),
  };

  return (
    <>
      <FormTitle>Layouts</FormTitle>
      <FormGrid>
        <NameField variant="outlined">
          <FieldLabel>Layout Name</FieldLabel>
          <OutlinedInput
            value={values.name}
            onChange={changeHandlers.name}
            placeholder="Layout Name"
          />
        </NameField>
        <ThumbnailField>
          <ThumbnailPicker value={values.thumbnail} />
        </ThumbnailField>
        <StatusField>
          <FieldLabel>Status</FieldLabel>
          <StatusControlLabel
            label="Active"
            labelPlacement="start"
            control={
              <Switch
                checked={values.active}
                onChange={changeHandlers.active}
                color="primary"
              />
            }
          />
        </StatusField>
        <RankField>
          <FieldLabel>Rank</FieldLabel>
          <OutlinedInput
            value={values.rank}
            onChange={changeHandlers.rank}
            type="number"
          ></OutlinedInput>
        </RankField>
      </FormGrid>
    </>
  );
};

export default LayoutForm;
