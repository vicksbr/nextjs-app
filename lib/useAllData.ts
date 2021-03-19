import useSWR from "swr";
import { WindowData } from "types";


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

// const getFiltersQueryString = (
//   searchTerm: StoreState["searchTerm"],
//   filters: StoreState["filters"] | undefined = undefined
// ) => {
//   const nameFilter = searchTerm ? `name=${searchTerm}` : "";

//   if (!filters) {
//     return `?${nameFilter}`;
//   }

//   const selectedTypes = Object.entries(filters.types)
//     .filter((type) => type[1])
//     .map((type) => type[0])
//     .join(",");

//   const selectedCategories = filters.categories
//     .map((category) => `"${category.name}"`)
//     .join(",");

//   const layoutFilter = filters.layout ? `layout_id=${filters?.layout?.id}` : "";
//   const typeFilter = selectedTypes ? `type=${selectedTypes}` : "";
//   const categoriesFilter = selectedCategories
//     ? `categories=${selectedCategories}`
//     : "";

//   return `?${[nameFilter, typeFilter, categoriesFilter, layoutFilter]
//     .filter((filter) => !!filter)
//     .join("&")}`;
// };


export const useAllData = () => {
  // const searchTerm = useSelector<StoreState, StoreState["searchTerm"]>(useAllData
  // const filters = useSelector<StoreState, StoreState["filters"]>(
  //   (state: any) => state.filters
  // );

  // const windowsFilters = getFiltersQueryString(searchTerm, filters);
  // const searchFilter = getFiltersQueryString(searchTerm);


  const { data: windows, error: windowsError } = useSWR('/api/curated/windows');
  const { data: layouts, error: layoutsError } = useSWR(`/api/curated/layouts`);
  const { data: categories, error: categoriesError } = useSWR(`/api/categories`);
  const { data: tags, error: tagsError } = useSWR(`/api/tags`);

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
  

  return { data, errors };
};
