import { CategoryData, LayoutData } from "types";
import { APPLY_FILTERS, UPDATE_SEARCH_TERM } from "./constants";

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
});
