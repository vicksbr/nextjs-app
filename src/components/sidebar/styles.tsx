import { styled } from "@material-ui/core/styles";
import { Container, Box, Input, Typography } from "@material-ui/core";

import theme from "theme";
import type { Sort } from "types";

const sidebarGutters = {
  paddingLeft: "24px",
  paddingRight: "24px",
};

const SidebarContainer = styled(Container)({
  backgroundColor: theme.palette.grey[200],
  height: "100%",
});

const SearchInput = styled(Input)({
  backgroundColor: theme.palette.grey[300],
  height: "88px",
  width: "100%",
  ...sidebarGutters,
});

export { SidebarContainer, SearchInput };

const SortBarContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "13px",
  paddingBottom: "13px",
  ...sidebarGutters,
});

const SortLabel = styled(Typography)({
  color: theme.palette.grey[500],
  fontWeight: 500,
});

const SortItems = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
});

type SortItemProps = {
  selected?: boolean;
  order?: Sort["order"];
};
const SortItem = styled(({ selected = false, order = "desc", ...other }) => (
  <Typography {...other} />
))({
  color: ({ selected }: SortItemProps) =>
    selected ? theme.palette.grey.A700 : theme.palette.grey[500],
  marginLeft: "36px",
  paddingLeft: ({ selected }: SortItemProps) => (selected ? "17px" : 0),
  position: "relative",
  cursor: "pointer",
  userSelect: "none",
  "&:first-child": {
    marginLeft: 0,
  },
  "&:before": {
    content: ({ selected }: SortItemProps) => (selected ? "''" : ""),
    width: 0,
    height: 0,
    border: "5px solid transparent",
    borderTopColor: theme.palette.grey.A700,
    borderBottomWidth: 0,
    position: "absolute",
    left: 0,
    top: "50%",
    transform: ({ order }: SortItemProps) =>
      order === "asc" ? "translateY(-50%) rotate(180deg)" : "translateY(-50%)",
  },
});

export { SortBarContainer, SortLabel, SortItems, SortItem };
