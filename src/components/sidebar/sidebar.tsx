import React, { useState } from "react";
import { capitalize, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useTheme } from "@material-ui/core/styles";

import ItemsList from "./itemsList";
import SortBar from "./sortBar";
import type { View, CurationData, Sort } from "types";

import { SidebarContainer, SearchInput } from "./styles";

type SidebarProps = {
  data: CurationData;
  selectedView: View | null;
};
const Sidebar: React.FC<SidebarProps> = ({ data, selectedView }) => {
  const theme = useTheme();
  const [sort, setSort] = useState<Sort>({ sortBy: "date", order: "desc" });

  const searchPlaceholder = selectedView
    ? `Search ${capitalize(selectedView)}`
    : "";
  return (
    <SidebarContainer disableGutters>
      <SearchInput
        disableUnderline
        fullWidth
        placeholder={searchPlaceholder}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon htmlColor={theme.palette.grey[600]} />
          </InputAdornment>
        }
      />
      <SortBar selectedView={selectedView} sort={sort} setSort={setSort} />
      {selectedView && <ItemsList items={data[selectedView]}/>}
    </SidebarContainer>
  );
};

export default Sidebar;
