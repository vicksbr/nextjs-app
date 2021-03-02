import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { capitalize, InputAdornment } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";

import { createItem, applyFilters, updateSearchTerm } from "store/actions";

import ItemsList from "./itemsList";
import SortBar from "./sortBar";
import Filters from "./filters";
import { SidebarContainer, SearchInput, CreateButton, CreateIcon, SearchIcon } from "./styles";

import type { View, CurationData, Sort, Item, LayoutData } from "types";

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
}

const mapViewToSortItems = (
  selectedView: View | null,
  layoutFilter: LayoutData | null
): Sort["sortBy"][] => {
  switch (selectedView) {
    case "windows":
      return layoutFilter ? ["rank"] : ["last_update", "name", "type"];
    case "layouts":
      return ["rank", "name"];
    case "categories":
      return ["rank", "name"];
    case "tags":
      return ["last_update", "name"];
    default:
      return [];
  }
};

type SidebarProps = {
  searchTerm: string;
  selectedItem: any;
  layoutFilter: LayoutData | null;
};
const Sidebar: React.FC<SidebarProps> = ({
  searchTerm,
  layoutFilter,
}) => {

  const theme = useTheme();
  const [sort, setSort] = useState<Sort>({ sortBy: "last_update", order: "desc" });
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector(({ itemsData }: { itemsData: CurationData }) => itemsData);

  const { id } = router.query
  const currentView = router.pathname.split('/')[1]
  const currentItem = id ?? null
  const searchPlaceholder = currentView ? `Search ${capitalize(currentView)}` : "";
  const items = currentView ? data[currentView as View] : [];
  const sortedItems = items ? [...items].sort(compareItems(sort)) : [];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchTerm(event.target.value));
  };

  const handleCreate = () => {
    const basePath = router.pathname.split('/')[1]
    dispatch(createItem());
    router.push(`/${basePath}/?create=true`)
  }

  return (
    <SidebarContainer disableGutters>
      {items && <SearchInput
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
          currentView === "windows" && (
            <Filters
              categories={data.categories}
              layouts={data.layouts}
              onSave={(filters) => dispatch(applyFilters(filters))}
            />
          )
        }
      />}
      <SortBar
        items={mapViewToSortItems(currentView as View, layoutFilter)}
        sort={sort}
        setSort={setSort}
      />
      {currentView && (
        <ItemsList
          items={sortedItems}
          selectedItem={currentItem as string}
          selectedView={currentView as string}
        />
      )}
      {currentView && (
        <CreateButton onClick={() => handleCreate()} color="primary" variant="extended">
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
