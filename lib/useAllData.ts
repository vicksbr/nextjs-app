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

export const useAllData = () => {
        
  const { data: windows, error: windowsError } = useSWR(`/api/curated/windows`);
  const { data: layouts, error: layoutsError } = useSWR(`/api/curated/layouts`,);
  const { data: categories, error: categoriesError } = useSWR(`/api/categories`,);
  const { data: tags, error: tagsError } = useSWR(`/api/tags`, );

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
