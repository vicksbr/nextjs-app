import { styled } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Input,
  Typography,
  ListItem,
  Fab,
  List,
  Theme,
  Button,
  FormControlLabel,
  FormGroup,
  FormControl,
  ListItemIcon,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Search as MaterialSearchIcon } from "@material-ui/icons";

import Filter from "icons/filter";
import type { Sort } from "types";

const sidebarGutters = {
  paddingLeft: "24px",
  paddingRight: "24px",
};

const SidebarContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[200],
  height: "100%",
  display: "flex",
  flexFlow: "column",
}));

const SearchInput = styled(Input)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  flexBasis: "88px",
  flexShrink: 0,
  width: "100%",
  color: theme.palette.grey.A700,
  ...sidebarGutters,
}));

const SearchIcon = styled(MaterialSearchIcon)({
  width: "32px",
  height: "32px",
});

const FilterIcon = styled(Filter)({
  cursor: "pointer",
});

export { SidebarContainer, SearchInput, SearchIcon, FilterIcon };

// Sort Bar
const SortBarContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "13px",
  paddingBottom: "13px",
  ...sidebarGutters,
});

const SortLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
  fontWeight: 500,
}));

const SortItems = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
});

type SortItemProps = {
  selected?: boolean;
  order?: Sort["order"];
  theme: Theme;
};
const SortItem = styled(Typography)(
  ({ theme, selected, order }: SortItemProps) => ({
    color: selected ? theme.palette.grey.A700 : theme.palette.grey[500],
    marginLeft: "36px",
    paddingLeft: selected ? "17px" : 0,
    position: "relative",
    cursor: "pointer",
    userSelect: "none",
    "&:first-child": {
      marginLeft: 0,
    },
    "&:before": {
      content: "''",
      display: selected ? "block" : "none",
      width: 0,
      height: 0,
      border: "5px solid transparent",
      borderTopColor: theme.palette.grey.A700,
      borderBottomWidth: 0,
      position: "absolute",
      left: 0,
      top: "50%",
      transform:
        order === "asc"
          ? "translateY(-50%) rotate(180deg)"
          : "translateY(-50%)",
    },
  })
);

export { SortBarContainer, SortLabel, SortItems, SortItem };

// ItemsList
const ScrollList = styled(List)(({ theme }) => ({
  overflow: "auto",
  scrollbarWidth: "thin",
  scrollbarColor: `${theme.palette.grey[400]} transparent`,
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: theme.palette.grey[400],
    borderRadius: "2px",
  },
}));

type ItemProps = {
  selected?: boolean;
  theme: Theme;
};
const Item = styled(({ selected, ...other }) => <ListItem {...other} />)(
  ({ theme, selected }: ItemProps) => ({
    color: selected ? theme.palette.grey.A400 : theme.palette.grey.A700,
    backgroundColor: selected ? "#fff" : "transparent",
    fontWeight: selected ? 500 : 400,
    "&:hover": {
      backgroundColor: selected ? "#fff" : theme.palette.grey[300],
    },
  }),
  { withTheme: true }
);

type ItemRankProps = {
  selected?: boolean;
  theme: Theme;
};

const StyledItemIcon = styled(ListItemIcon)({
  minWidth: 36,
});

const ItemRank = styled(Typography)(({ theme, selected }: ItemRankProps) => ({
  color: selected ? theme.palette.primary.main : theme.palette.grey[400],
  marginRight: 4,
}));

const CreateButton = styled(Fab)({
  letterSpacing: "1.25px",
  padding: "0 17px 0 12px",
  position: "absolute",
  right: 24,
  bottom: 30,
});

const CreateIcon = styled(AddIcon)({
  marginRight: "12px",
});

export { ScrollList, Item, StyledItemIcon, ItemRank, CreateButton, CreateIcon };
// Filters
const AnchorContainer = styled(Box)({
  position: "relative",
});

const PopoverAnchor = styled(Box)({
  position: "absolute",
  top: "-16px",
  left: "-16px",
});

const FiltersBox = styled(Box)({
  padding: "16px",
});

const TopBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
});

const MainLabel = styled(Typography)(({ theme }) => ({
  marginLeft: "16px",
  color: theme.palette.grey[800],
  fontWeight: 500,
  letterSpacing: "0.5px",
}));

const InputsLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[700],
  marginBottom: "10px",
}));

const LayoutField = styled(FormControl)({
  width: 290,
  display: "block",
  marginBottom: 16,
});

const CategoriesField = styled(FormControl)({
  width: 290,
  display: "block",
  marginBottom: 24,
});

const TypesGroup = styled(FormGroup)({});

const TypeFilter = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.grey[700],
}));

const ButtonsContainer = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "17px",
});

const ApplyButton = styled(Button)({
  marginLeft: "4px",
});

const ResetButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[500],
}));

export {
  AnchorContainer,
  PopoverAnchor,
  FiltersBox,
  TopBox,
  MainLabel,
  InputsLabel,
  LayoutField,
  CategoriesField,
  TypesGroup,
  TypeFilter,
  ButtonsContainer,
  ApplyButton,
  ResetButton,
};
