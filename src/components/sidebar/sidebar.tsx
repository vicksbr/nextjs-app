import React, { useState } from "react";
import { capitalize, InputAdornment } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import type { View, CurationData, Sort, Category } from "types";

import ItemsList from "./itemsList";
import SortBar from "./sortBar";
import Filters from "./filters";
import {
  SidebarContainer,
  SearchInput,
  CreateButton,
  CreateIcon,
  SearchIcon,
} from "./styles";

type SidebarProps = {
  data: CurationData;
  selectedView: View | null;
  selectedItem: string | null;
  handleSelectItem: React.Dispatch<React.SetStateAction<string | null>>;
};
const Sidebar: React.FC<SidebarProps> = ({
  data,
  selectedView,
  selectedItem,
  handleSelectItem,
}) => {
  const theme = useTheme();
  const [sort, setSort] = useState<Sort>({ sortBy: "date", order: "desc" });

  // Mocked functionality to be replaced with redux integration
  const [filteredCategories, setFilteredCategories] = useState<
    Category[] | undefined
  >(undefined);
  const [filteredTypes, setFilteredTypes] = useState(undefined);
  const handleFiltersApply = (types: any, categories: any) => {
    setFilteredTypes(types);
    setFilteredCategories(categories);
  };

  const searchPlaceholder = selectedView
    ? `Search ${capitalize(selectedView)}`
    : "";
  return (
    <SidebarContainer disableGutters>
      <SearchInput
        disableUnderline
        fullWidth
        placeholder={searchPlaceholder}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon htmlColor={theme.palette.grey[600]} />
          </InputAdornment>
        }
        endAdornment={
          <Filters
            categories={data.categories}
            onSave={handleFiltersApply}
            filteredCategories={filteredCategories}
            filteredTypes={filteredTypes}
          />
        }
      />
      <SortBar selectedView={selectedView} sort={sort} setSort={setSort} />
      {selectedView && (
        <ItemsList
          items={data[selectedView]}
          selectedItem={selectedItem}
          handleSelectItem={handleSelectItem}
        />
      )}
      {selectedView && (
        <CreateButton color="primary" variant="extended">
          <CreateIcon />
          Create
        </CreateButton>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
