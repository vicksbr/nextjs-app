import useSWR from "swr";
import { useSelector } from "react-redux";

import { WindowData } from "types";
import { StoreState } from "store/reducers";

const sanitizeWindowsRank = (items: WindowData[]) => {
  return items.map((window) => {
    if (window.rank)
      return {
        ...window,
        rank: window.rank[0]?.value,
      };
    return window;
  });
};

const getFiltersQueryString = (
  searchTerm: StoreState["searchTerm"],
  filters: StoreState["filters"] | undefined = undefined
) => {
  const nameFilter = searchTerm ? `name=${searchTerm}` : "";

  if (!filters) {
    return `?${nameFilter}`;
  }

  const selectedTypes = Object.entries(filters.types)
    .filter((type) => type[1])
    .map((type) => type[0])
    .join(",");

  const selectedCategories = filters.categories
    .map((category) => `"${category.name}"`)
    .join(",");

  const layoutFilter = filters.layout ? `layout_id=${filters?.layout?.id}` : "";
  const typeFilter = selectedTypes ? `type=${selectedTypes}` : "";
  const categoriesFilter = selectedCategories
    ? `categories=${selectedCategories}`
    : "";

  return `?${[nameFilter, typeFilter, categoriesFilter, layoutFilter]
    .filter((filter) => !!filter)
    .join("&")}`;
};

type UseAllDataOptions = {
  filtered?: boolean;
};
export const useAllData = (options: UseAllDataOptions = {}) => {
  const searchTerm = useSelector<StoreState, StoreState["searchTerm"]>(
    (state) => state.searchTerm
  );
  const filters = useSelector<StoreState, StoreState["filters"]>(
    (state) => state.filters
  );

  const windowsFilters = getFiltersQueryString(searchTerm, filters);
  const searchFilter = getFiltersQueryString(searchTerm);

  const routes = options.filtered
    ? {
        windows: `/api/curated/windows${windowsFilters}`,
        layouts: `/api/curated/layouts${searchFilter}`,
        cats: `/api/categories${searchFilter}`,
        tags: `/api/tags${searchFilter}`,
      }
    : {
        windows: `/api/curated/windows`,
        layouts: `/api/curated/layouts`,
        cats: `/api/categories`,
        tags: `/api/tags`,
      };

  const { data: windows, error: windowsError, mutate: windowsMutate } = useSWR(
    routes.windows
  );
  const { data: layouts, error: layoutsError, mutate: layoutsMutate } = useSWR(
    routes.layouts
  );
  const {
    data: categories,
    error: categoriesError,
    mutate: categoriesMutate,
  } = useSWR(routes.cats);
  const { data: tags, error: tagsError, mutate: tagsMutate } = useSWR(
    routes.tags
  );

  const data = {
    windows: windows ? sanitizeWindowsRank(windows) : windows,
    layouts,
    categories,
    tags,
  };
  const errors = {
    windowsError,
    layoutsError,
    categoriesError,
    tagsError,
  };
  const mutate = {
    windowsMutate,
    layoutsMutate,
    categoriesMutate,
    tagsMutate,
  };

  return { data, errors, mutate };
};
