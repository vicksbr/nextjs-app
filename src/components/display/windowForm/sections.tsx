import React from "react";
import { TextField, Autocomplete, Button, Switch } from "@material-ui/core";

import { themeValues } from "theme";

import { FullWindowData } from "types";

import {
  SelectedOnboardingList,
  DescriptionInput,
  DescriptionValidator,
  SelectedOnboardingHeader,
  SelectedOnboardingListContainer,
  ListCellContainer,
  OnboardingNameDeleteContainer,
  OnboardingRankTextField,
  StatusOptionContainer,
  StatusTitle,
  StatusContainer,
  TrashIcon,
  HeaderLayoutsText,
  HeaderRankText,
  SelectedOnboardingName,
} from "./styles";

export type StatusType = { active: boolean; featured: boolean };

export const Description: React.FC<{
  descriptionHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
}> = ({ descriptionHandler, description }) => (
  <>
    <DescriptionInput
      value={description}
      multiline
      onChange={descriptionHandler}
      placeholder="Description"
    />
    <DescriptionValidator>{`${
      description ? description.length : 0
    }/160 Characters`}</DescriptionValidator>
  </>
);

export const Tags: React.FC<{
  availableTags: FullWindowData["tags"];
  selectedTags: FullWindowData["tags"];
  handleChange: (
    event: object,
    value: FullWindowData["tags"],
    reason: string
  ) => void;
}> = ({ availableTags, selectedTags, handleChange }) => (
  <>
    <Autocomplete
      multiple
      options={availableTags}
      value={selectedTags}
      getOptionLabel={(option) => option.name}
      getOptionSelected={(option, value) => option.id === value.id}
      filterSelectedOptions
      onChange={handleChange}
      ChipProps={{
        style: {
          backgroundColor: "rgba(107, 72, 255, 0.08)",
          color: themeValues.palette.primary.main,
        },
      }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" placeholder="Tags" />
      )}
    />
  </>
);

export const Categories: React.FC<{
  availableCategories: FullWindowData["category"][];
  selectedCategories: FullWindowData["category"] | null;
  handleChange: (
    event: object,
    value: FullWindowData["category"] | null,
    reason: string
  ) => void;
}> = ({ availableCategories, selectedCategories, handleChange }) => (
  <>
    <Autocomplete
      options={availableCategories}
      value={selectedCategories}
      getOptionLabel={(option) => option.name}
      filterSelectedOptions
      onChange={handleChange}
      ChipProps={{
        style: {
          backgroundColor: "rgba(107, 72, 255, 0.08)",
          color: themeValues.palette.primary.main,
        },
      }}
      getOptionSelected={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" placeholder="Tags" />
      )}
    />
  </>
);

type OnChangeRankType = { id: string; rank: number };

type SelectOnboardingType = React.FC<{
  onboardings: FullWindowData["layouts"];
  onDelete: (id: string) => void;
  onChangeRank: (ChangeRank: OnChangeRankType) => void;
}>;

export const SelectedOnboardings: SelectOnboardingType = ({
  onboardings,
  onDelete,
  onChangeRank,
}) => {
  return (
    <SelectedOnboardingList>
      <SelectedOnboardingHeader>
        <HeaderLayoutsText>Layouts</HeaderLayoutsText>
        <HeaderRankText>Rank</HeaderRankText>
      </SelectedOnboardingHeader>
      <SelectedOnboardingListContainer>
        {onboardings.map(({ name, rank, id }) => {
          return (
            <ListCellContainer key={id}>
              <OnboardingNameDeleteContainer>
                <SelectedOnboardingName>{name}</SelectedOnboardingName>
                <Button
                  onClick={() => {
                    onDelete(id);
                  }}
                >
                  <TrashIcon />
                </Button>
              </OnboardingNameDeleteContainer>
              <OnboardingRankTextField
                onChange={(event) =>
                  onChangeRank({
                    id,
                    rank: Number.parseFloat(event.target.value),
                  })
                }
                value={rank}
                variant="outlined"
                type="number"
              />
            </ListCellContainer>
          );
        })}
      </SelectedOnboardingListContainer>
    </SelectedOnboardingList>
  );
};

export const Onboarding: React.FC<{
  availableOnboardings: FullWindowData["layouts"];
  selectedOnboardings: FullWindowData["layouts"];
  handleChange: (
    event: object,
    value: FullWindowData["layouts"],
    reason: string
  ) => void;
}> = ({ availableOnboardings, selectedOnboardings, handleChange }) => (
  <>
    <Autocomplete
      multiple
      options={availableOnboardings}
      value={selectedOnboardings}
      getOptionLabel={(option) => option.name}
      filterSelectedOptions
      disableClearable
      onChange={handleChange}
      renderTags={() => <></>}
      getOptionSelected={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" placeholder="Layouts" />
      )}
    />
  </>
);

export const Status: React.FC<{
  status: StatusType;
  updateActive: (status: boolean) => void;
  updateFeatured: (status: boolean) => void;
}> = ({ status, updateActive, updateFeatured }) => (
  <StatusContainer>
    <StatusOptionContainer variant="outlined" fullWidth>
      <StatusTitle>Active</StatusTitle>
      <Switch
        color="primary"
        checked={status.active}
        onChange={(_, checked) => updateActive(checked)}
      />
    </StatusOptionContainer>
    <StatusOptionContainer variant="outlined" fullWidth>
      <StatusTitle>Featured</StatusTitle>
      <Switch
        color="primary"
        checked={status.featured}
        onChange={(_, checked) => updateFeatured(checked)}
      />
    </StatusOptionContainer>
  </StatusContainer>
);
