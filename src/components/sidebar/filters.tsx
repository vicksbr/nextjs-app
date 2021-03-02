import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import {
  Popover,
  useTheme,
  FormControl,
  Checkbox,
  Autocomplete,
  TextField,
  Fade,
} from "@material-ui/core";

import { WindowType, CategoryData, LayoutData } from "types";

import {
  AnchorContainer,
  PopoverAnchor,
  FiltersBox,
  TopBox,
  MainLabel,
  InputsLabel,
  LayoutField,
  CategoriesField,
  TypesGroup,
  TypeFilter,
  FilterIcon,
  ButtonsContainer,
  ApplyButton,
  ResetButton,
} from "./styles";

const windowTypes: {value: WindowType, label: string}[] = [
  {value: "flux", label: "Flux"},
  {value: "chart", label: "Chart"},
  {value: "quotestable", label: "Quotes Table"},
  {value: "twittersearch", label: "Twitter Search"},
];

type TypeBoolMap = { [k in WindowType]: boolean };

const emptyTypesState: TypeBoolMap = windowTypes.reduce(
  (obj: TypeBoolMap, type) => {
    obj[type.value] = false;
    return obj;
  },
  {} as TypeBoolMap
);

type FiltersProps = {
  categories: CategoryData[];
  layouts: LayoutData[];
  filteredTypes?: { [x: string]: boolean };
  filteredCategories?: CategoryData[];
  filteredLayout?: LayoutData | null;
  onSave: (filters: {
    types: { [x: string]: boolean };
    categories: CategoryData[];
    layout: LayoutData | null;
  }) => void;
};
const Filters: React.FC<FiltersProps> = ({
  categories,
  layouts,
  filteredTypes = null,
  filteredCategories = null,
  filteredLayout = null,
  onSave,
}) => {
  const initialTypesState = filteredTypes || emptyTypesState;
  const initialCategoriesState = filteredCategories || [];
  const initialLayoutState = filteredLayout ? filteredLayout : null;
  const [open, setOpen] = useState(false);
  const [selectedCategories, setSelectedCategory] = useState(
    initialCategoriesState
  );
  const [selectedTypes, setSelectedTypes] = useState(initialTypesState);
  const [selectedLayout, setSelectedLayout] = useState(initialLayoutState);

  const anchor = useRef(null);

  const isFiltering = () => {
    const isLayoutFiltered = !!filteredLayout;
    const isCategoriesFiltered =
      filteredCategories && filteredCategories.length > 0;
    const isTypesFiltered =
      filteredTypes &&
      Object.values(filteredTypes).some((typeSelected) => typeSelected);
    if (isLayoutFiltered || isCategoriesFiltered || isTypesFiltered) {
      return true;
    }
    return false;
  };

  const handleCategoryChange = (
    _: React.SyntheticEvent<Element, Event>,
    value: CategoryData[]
  ) => {
    setSelectedCategory(value);
  };

  const handleLayoutChange = (
    _: React.SyntheticEvent<Element, Event>,
    value: LayoutData | null
  ) => {
    setSelectedLayout(value);
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
    setSelectedLayout(initialLayoutState);
  };

  const handleCloseFilters = () => {
    setOpen(false);
  };

  const handleSave = () => {
    onSave({
      types: selectedTypes,
      categories: selectedCategories,
      layout: selectedLayout,
    });
    handleCloseFilters();
  };

  const handleReset = () => {
    onSave({ types: emptyTypesState, categories: [], layout: null });
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
          <LayoutField variant="outlined">
            <InputsLabel variant="subtitle2">Layout</InputsLabel>
            <Autocomplete
              options={layouts}
              ChipProps={{ color: "primary" }}
              getOptionLabel={(option) => option.name}
              value={selectedLayout}
              onChange={handleLayoutChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Layout"
                />
              )}
            />
          </LayoutField>
          <CategoriesField variant="outlined">
            <InputsLabel variant="subtitle2">Categories</InputsLabel>
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
                />
              )}
            />
          </CategoriesField>
          <FormControl component="fieldset">
            <InputsLabel variant="subtitle2">Window Type</InputsLabel>
            <TypesGroup>
              {windowTypes.map((type) => (
                <TypeFilter
                  key={type.value}
                  control={
                    <Checkbox
                      color="primary"
                      checked={selectedTypes[type.value]}
                      onChange={handleCheckboxChange}
                      name={type.value}
                    />
                  }
                  label={type.label}
                />
              ))}
            </TypesGroup>
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

type StateToProps = {
  filters: {
    types: TypeBoolMap;
    categories: CategoryData[];
    layout: LayoutData | null;
  };
};
const mapStateToProps = ({
  filters: { types, categories, layout },
}: StateToProps) => ({
  filteredTypes: types,
  filteredCategories: categories,
  filteredLayout: layout,
});
export default connect(mapStateToProps)(Filters);
