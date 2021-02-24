import React, { useState } from "react";
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
    status?: boolean;
    thumbnail: string;
    rank?: string;
  };
};

const emptyValues: LayoutFormProps["initialValues"] = {
  name: "",
  status: false,
  thumbnail: "",
  rank: "",
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

  const changeHandlers = {
    name: (event: React.ChangeEvent<HTMLInputElement>) =>
      updateValue("name", getChangeEventValue(event)),
    status: () => updateValue("status", !values.status),
    rank: (event: React.ChangeEvent<HTMLInputElement>) =>
      updateValue("rank", getChangeEventValue(event)),
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
          <ThumbnailPicker value={values.thumbnail}/>
        </ThumbnailField>
        <StatusField>
          <FieldLabel>Status</FieldLabel>
          <StatusControlLabel
            label="Active"
            labelPlacement="start"
            control={
              <Switch
                checked={values.status}
                onChange={changeHandlers.status}
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
