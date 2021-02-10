import { styled } from "@material-ui/core/styles";
import {
  LibraryBooks,
  LocalOffer,
  ViewCompact,
  Category,
  PowerSettingsNew,
} from "@material-ui/icons";
import { Container, Box, List, ListItem, Theme } from "@material-ui/core";


const MainMenuContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100%",
  padding: "0",
  display: "flex",
  flexFlow: "column",
}));

const LogoContainer = styled(Box)({
  padding: "16px",
  fontSize: "0",
});

const Menu = styled(List)({
  padding: 0,
  flexGrow: 1,
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "space-between",
});

const MainItems = styled(Box)({
  width: "100%",
});

type MenuItemProps = {
  selected: boolean;
  theme: Theme;
};
const MenuItem = styled(({ selected, ...other }) => <ListItem {...other} />)(
  ({ theme, selected }: MenuItemProps) => ({
    opacity: selected ? "1" : "0.66",
    backgroundColor: selected ? theme.palette.primary.light : "transparent",
    height: "88px",
    justifyContent: "center",
    transitionProperty: "all",
    "&:hover": {
      backgroundColor: selected ? theme.palette.primary.light : "#6141e9",
    },
  })
);

const LogoutItem = styled(MenuItem)({
  alignSelf: "flex-end",
});

const iconStyles = {
  width: "32px",
  height: "32px",
  color: "#ffffff",
};

const WindowIcon = styled(LibraryBooks)({
  ...iconStyles,
});

const LayoutIcon = styled(ViewCompact)({
  ...iconStyles,
});

const CategoryIcon = styled(Category)({
  ...iconStyles,
});

const TagIcon = styled(LocalOffer)({
  ...iconStyles,
});

const LogoutIcon = styled(PowerSettingsNew)({
  ...iconStyles,
});

export {
  MainMenuContainer,
  LogoContainer,
  Menu,
  MainItems,
  MenuItem,
  LogoutItem,
  WindowIcon,
  LayoutIcon,
  CategoryIcon,
  TagIcon,
  LogoutIcon,
};
