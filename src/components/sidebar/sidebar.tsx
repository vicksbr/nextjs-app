import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { capitalize, InputAdornment } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import {
  selectItem,
  createItem,
  applyFilters,
  updateSearchTerm,
} from "store/actions";
import type { View, CurationData, Sort, Item, LayoutData } from "types";

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
import { useRouter } from "next/router";

const compareItems = (sort: Sort) => {
  return (itemA: any, itemB: any) => {
    if (itemA[sort.sortBy] > itemB[sort.sortBy]) {
      return sort.order === "asc" ? 1 : -1;
    }
    if (itemA[sort.sortBy] < itemB[sort.sortBy]) {
      return sort.order === "asc" ? -1 : 1;
    }
    return 0;
  };
};

const mapViewToSortItems = (
  selectedView: View | null,
  layoutFilter: LayoutData | null
): Sort["sortBy"][] => {
  switch (selectedView) {
    case "windows":
      return layoutFilter ? ["rank"] : ["date", "name", "type"];
    case "layouts":
      return ["rank", "name"];
    case "categories":
      return ["rank", "name"];
    case "tags":
      return ["date", "name"];
    default:
      return [];
  }
};

type SidebarProps = {
  data: CurationData;
  searchTerm: string;
  selectedView: View | null;
  selectedItem: Item;
  layoutFilter: LayoutData | null;
};
const Sidebar: React.FC<SidebarProps> = ({
  data,
  searchTerm,
  selectedView,
  selectedItem,
  layoutFilter,
}) => {
  const theme = useTheme();
  const [sort, setSort] = useState<Sort>({ sortBy: "date", order: "desc" });
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchTerm(event.target.value));
  };

  const handleCreate = () => {
    const basePath = router.pathname.split('/')[1]

    if (basePath === 'categories') {
      dispatch(createItem());
      router.push('/categories/?create=true')
      return
    }
    dispatch(createItem());
    router.push(`/${basePath}/?create=true`)
  }

  const searchPlaceholder = selectedView
    ? `Search ${capitalize(selectedView)}`
    : "";

  const items = selectedView ? data[selectedView] : [];
  const sortedItems = [...items].sort(compareItems(sort));

  return (
    <SidebarContainer disableGutters>
      <SearchInput
        value={searchTerm}
        onChange={handleSearchChange}
        disableUnderline
        fullWidth
        placeholder={searchPlaceholder}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon htmlColor={theme.palette.grey[600]} />
          </InputAdornment>
        }
        endAdornment={
          selectedView === "windows" && (
            <Filters
              categories={data.categories}
              layouts={data.layouts}
              onSave={(filters) => dispatch(applyFilters(filters))}
            />
          )
        }
      />
      <SortBar
        items={mapViewToSortItems(selectedView, layoutFilter)}
        sort={sort}
        setSort={setSort}
      />
      {selectedView && (
        <ItemsList
          items={sortedItems}
          selectedItem={selectedItem.id}
          handleSelectItem={(id) => dispatch(selectItem(id))}
        />
      )}
      {selectedView && (
        <CreateButton
          onClick={() => handleCreate()}
          color="primary"
          variant="extended"
        >
          <CreateIcon />
          Create
        </CreateButton>
      )}
    </SidebarContainer>
  );
};

type StateToProps = {
  selectedView: View | null;
  selectedItem: Item;
  searchTerm: string;
  filters: {
    layout: LayoutData | null;
  };
};

const mapStateToProps = ({
  selectedView,
  selectedItem,
  searchTerm,
  filters: { layout },
}: StateToProps) => ({
  selectedView,
  selectedItem,
  searchTerm,
  layoutFilter: layout,
});

export default connect(mapStateToProps)(Sidebar);
