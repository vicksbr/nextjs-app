import React, { useState, useRef } from "react";
import {
  Popover,
  useTheme,
  FormControl,
  Checkbox,
  Autocomplete,
  TextField,
  Fade,
} from "@material-ui/core";

import { WindowTypes, WindowType, Category } from "types";

import {
  AnchorContainer,
  PopoverAnchor,
  FiltersBox,
  TopBox,
  MainLabel,
  InputsLabel,
  TypesGroup,
  TypeFilter,
  FilterIcon,
  ButtonsContainer,
  ApplyButton,
  ResetButton,
} from "./styles";

const windowTypes: WindowTypes = [
  "Flux",
  "Chart",
  "Quotes Table",
  "Twitter Search",
];

type TypeBoolMap = { [k in WindowType]: boolean };

const emptyTypesState: TypeBoolMap = windowTypes.reduce(
  (obj: TypeBoolMap, type) => {
    obj[type] = false;
    return obj;
  },
  {} as TypeBoolMap
);

type FiltersProps = {
  categories: Category[];
  filteredTypes?: { [x: string]: boolean };
  filteredCategories?: Category[];
  onSave: (types: { [x: string]: boolean }, categories: Category[]) => void;
};
const Filters: React.FC<FiltersProps> = ({
  categories,
  onSave,
  filteredTypes = null,
  filteredCategories = null,
}) => {
  const initialTypesState = filteredTypes ? filteredTypes : emptyTypesState;
  const initialCategoriesState = filteredCategories ? filteredCategories : [];
  const [open, setOpen] = useState(false);
  const [selectedCategories, setSelectedCategory] = useState(
    initialCategoriesState
  );
  const [selectedTypes, setSelectedTypes] = useState(initialTypesState);

  const anchor = useRef(null);

  const isFiltering = () => {
    const isCategoriesFiltered =
      filteredCategories && filteredCategories.length > 0;
    const isTypesFiltered =
      filteredTypes &&
      Object.values(filteredTypes).some((typeSelected) => typeSelected);
    if (isCategoriesFiltered || isTypesFiltered) {
      return true;
    }
    return false;
  };

  const handleCategoryChange = (
    _: React.SyntheticEvent<Element, Event>,
    value: Category[]
  ) => {
    setSelectedCategory(value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTypes({
      ...selectedTypes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOpenFilters = () => {
    setOpen(true);
    setSelectedTypes(initialTypesState);
    setSelectedCategory(initialCategoriesState);
  };

  const handleCloseFilters = () => {
    setOpen(false);
  };

  const handleSave = () => {
    onSave(selectedTypes, selectedCategories);
    handleCloseFilters();
  };

  const handleReset = () => {
    onSave(emptyTypesState, []);
    handleCloseFilters();
  };

  const theme = useTheme();

  return (
    <>
      <AnchorContainer>
        <FilterIcon
          htmlColor={
            isFiltering() ? theme.palette.primary.main : theme.palette.grey[600]
          }
          onClick={handleOpenFilters}
        />
        <PopoverAnchor ref={anchor}></PopoverAnchor>
      </AnchorContainer>
      <Popover
        open={open}
        anchorEl={anchor.current}
        onClose={handleCloseFilters}
        marginThreshold={0}
        TransitionComponent={Fade}
      >
        <FiltersBox>
          <TopBox>
            <FilterIcon color="primary" onClick={handleCloseFilters} />
            <MainLabel>Filter by:</MainLabel>
          </TopBox>
          <FormControl component="fieldset">
            <InputsLabel variant="subtitle2">Window Type</InputsLabel>
            <TypesGroup>
              {windowTypes.map((type) => (
                <TypeFilter
                  key={type}
                  control={
                    <Checkbox
                      color="primary"
                      checked={selectedTypes[type]}
                      onChange={handleCheckboxChange}
                      name={type}
                    />
                  }
                  label={type}
                />
              ))}
            </TypesGroup>
          </FormControl>
          <InputsLabel variant="subtitle2">Categories</InputsLabel>
          <FormControl variant="outlined">
            <Autocomplete
              multiple
              options={categories}
              disableCloseOnSelect
              ChipProps={{ color: "primary" }}
              getOptionLabel={(option) => option.name}
              value={selectedCategories}
              onChange={handleCategoryChange}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox color="primary" checked={selected} />
                  {option.name}
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Categories"
                  style={{ width: "290px" }}
                />
              )}
            />
          </FormControl>
          <ButtonsContainer>
            <ResetButton onClick={handleReset}>reset</ResetButton>
            <ApplyButton onClick={handleSave}>apply filters</ApplyButton>
          </ButtonsContainer>
        </FiltersBox>
      </Popover>
    </>
  );
};

export default Filters;
