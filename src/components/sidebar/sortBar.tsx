import React from "react";
import { capitalize } from "@material-ui/core";

import type { Sort } from "types";

import { SortBarContainer, SortItem, SortItems, SortLabel } from "./styles";

type SortItemsListProps = {
  items: Sort["sortBy"][];
  sort: Sort;
  handleSortClick: (sortBy: Sort["sortBy"]) => void;
};

const SortItemsList: React.FC<SortItemsListProps> = ({
  items,
  sort,
  handleSortClick,
}) => (
  <>
    {items.map((sortBy) => (
      <SortItem
        key={sortBy}
        variant="body2"
        onClick={() => handleSortClick(sortBy)}
        selected={sort.sortBy === sortBy}
        order={sort.order as any}
      >
        {capitalize(sortBy)}
      </SortItem>
    ))}
  </>
);

type SortBarProps = {
  items: Sort["sortBy"][];
  sort: Sort;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
};
const SortBar: React.FC<SortBarProps> = ({ items, sort, setSort }) => {
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
      {items.length > 0 && <SortLabel variant="overline">sort by</SortLabel>}
      <SortItems>
        <SortItemsList
          items={items}
          handleSortClick={handleSortClick}
          sort={sort}
        />
      </SortItems>
    </SortBarContainer>
  );
};

export default SortBar;
