import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { capitalize, InputAdornment } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useRouter } from "next/router";

import { applyFilters, updateSearchTerm } from "store/actions";

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

import type { View, Sort, LayoutData } from "types";
import { useAllData } from "../../../lib/useAllData";

const initialSortValues = (currentView: View | null): Sort => {
  switch (currentView) {
    case "windows":
      return {
        sortBy: "last_update",
        order: "desc",
      };
    case "layouts":
      return {
        sortBy: "rank",
        order: "asc",
      };
    case "categories":
      return {
        sortBy: "rank",
        order: "asc",
      };
    case "tags":
      return {
        sortBy: "last_update",
        order: "desc",
      };
    default:
      return {
        sortBy: "name",
        order: "asc",
      };
  }
};

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
  currentView: View | null;
  searchTerm: string;
  layoutFilter: LayoutData | null;
};
const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  searchTerm,
  layoutFilter,
}) => {

  const [sort, setSort] = useState<Sort>(initialSortValues(currentView));

  useEffect(() => {
    setSort(initialSortValues(currentView));
  }, [currentView]);

  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const { data } = useAllData();

  const { id } = router.query;
  const currentItem = id ?? null;
  const searchPlaceholder = currentView
    ? `Search ${capitalize(currentView)}`
    : "";

  const items = currentView ? data[currentView as View] : [];
  const sortedItems = items ? [...items].sort(compareItems(sort)) : [];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchTerm(event.target.value));
  };

  const handleCreate = () => {
    const basePath = router.pathname.split("/")[1];
    router.push(`/${basePath}/?create=true`);
  };

  return (
    <SidebarContainer disableGutters>
      {currentView && (
        <>
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
              currentView === "windows" && (
                <Filters
                  categories={data.categories}
                  layouts={data.layouts}
                  onSave={(filters) => dispatch(applyFilters(filters))}
                />
              )
            }
          />
          <SortBar
            items={mapViewToSortItems(currentView, layoutFilter)}
            sort={sort}
            setSort={setSort}
          />
          <ItemsList items={sortedItems} selectedItem={currentItem as string} />
          <CreateButton
            onClick={() => handleCreate()}
            color="primary"
            variant="extended"
          >
            <CreateIcon />
            Create
          </CreateButton>
        </>
      )}
    </SidebarContainer>
  );
};

type StateToProps = {
  searchTerm: string;
  filters: {
    layout: LayoutData | null;
  };
};

const mapStateToProps = ({
  searchTerm,
  filters: { layout },
}: StateToProps) => ({
  searchTerm,
  layoutFilter: layout,
});

export default connect(mapStateToProps)(Sidebar);
