import React from "react";
import {
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@material-ui/core";

import { typeIconsMap } from "icons";
import { WindowType, Window, Layout, Category, Tag } from "types";

import { ScrollList, Item } from "./styles";

type ItemIconProps = {
  type: WindowType;
  selected: boolean;
};
const ItemIcon: React.FC<ItemIconProps> = ({ type, selected }) => {
  const theme = useTheme();
  return (
    <ListItemIcon>
      {
        typeIconsMap({
          htmlColor: selected
            ? theme.palette.primary.main
            : theme.palette.grey[400],
        })[type]
      }
    </ListItemIcon>
  );
};

type ItemsListProps = {
  items: (Window | Layout | Category | Tag)[];
  selectedItem: string | null;
  handleSelectItem: React.Dispatch<React.SetStateAction<string | null>>;
};
const ItemsList: React.FC<ItemsListProps> = ({ items, selectedItem, handleSelectItem }) => {
  return (
    <ScrollList>
      {items.map(
        ({
          name,
          type,
          id,
        }: (Window | Layout | Category | Tag) & { type?: WindowType }) => (
          <Item onClick={() => handleSelectItem(id)} button selected={selectedItem === id} key={id}>
            {type && <ItemIcon selected={selectedItem === id} type={type} />}
            <ListItemText disableTypography primary={name} />
          </Item>
        )
      )}
    </ScrollList>
  );
};
export default ItemsList;
