import React from "react";

import type { View, Sort } from "types";

import { SortBarContainer, SortItem, SortItems, SortLabel } from "./styles";

type SortBarProps = {
  selectedView: View | null;
  sort: Sort;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
};
const SortBar: React.FC<SortBarProps> = ({ selectedView, sort, setSort }) => {
  const toogleSortOrder = () =>
    setSort((prevSort) => ({
      ...prevSort,
      order: prevSort.order === "asc" ? "desc" : "asc",
    }));
  const setSortBy = (sortBy: Sort["sortBy"]) =>
    setSort((prevSort) => ({
      ...prevSort,
      sortBy,
    }));

  const handleSortClick = (sortBy: Sort["sortBy"]) => {
    if (sort.sortBy === sortBy) toogleSortOrder();
    else setSortBy(sortBy);
  };

  return (
    <SortBarContainer>
      <SortLabel variant="overline">sort by</SortLabel>
      <SortItems>
        <SortItem
          variant="body2"
          onClick={() => handleSortClick("date")}
          selected={sort.sortBy === "date"}
          order={sort.order}
        >
          Date
        </SortItem>
        <SortItem
          variant="body2"
          onClick={() => handleSortClick("name")}
          selected={sort.sortBy === "name"}
          order={sort.order}
        >
          Name
        </SortItem>
        {selectedView === "windows" && (
          <SortItem
            variant="body2"
            onClick={() => handleSortClick("type")}
            selected={sort.sortBy === "type"}
            order={sort.order}
          >
            Type
          </SortItem>
        )}
      </SortItems>
    </SortBarContainer>
  );
};

export default SortBar;
