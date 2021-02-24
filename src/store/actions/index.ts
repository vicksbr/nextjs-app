import { View, CurationData, CategoryData, LayoutData } from "types";
import {
  SELECT_VIEW,
  SELECT_ITEM,
  UPDATE_ITEMS_DATA,
  CREATE_ITEM,
  APPLY_FILTERS,
  UPDATE_SEARCH_TERM,
} from "./constants";

export const updateItemsData = (itemsData: CurationData) => ({
  type: UPDATE_ITEMS_DATA,
  payload: itemsData,
});

export const selectView = (view: View) => ({
  type: SELECT_VIEW,
  payload: view,
});

export const selectItem = (itemId: string | null) => ({
  type: SELECT_ITEM,
  payload: itemId,
});

export const createItem = () => ({
  type: CREATE_ITEM,
});

export const applyFilters = (filters: {
  types: {
    [x: string]: boolean;
  };
  categories: CategoryData[];
  layout: LayoutData | null;
}) => ({
  type: APPLY_FILTERS,
  payload: filters,
});

export const updateSearchTerm = (searchTerm: string) => ({
  type: UPDATE_SEARCH_TERM,
  payload: searchTerm,
})