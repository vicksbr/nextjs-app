import React from "react";
import { ListItemIcon, ListItemText, useTheme } from "@material-ui/core";

import { typeIconsMap } from "icons";

import {
  WindowType,
  ItemData,
} from "types";

import { ScrollList, Item } from "./styles";
import { useRouter } from "next/router";

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
  items: ItemData[];
  selectedItem: string | null;
  handleSelectItem: (id: string) => void;
};
const ItemsList: React.FC<ItemsListProps> = ({
  items,
  selectedItem,
  handleSelectItem,
}) => {

  const router = useRouter()

  const handleClick = (id: string, basePath: string) => {
    handleSelectItem(id);
    if (basePath !== "/categories") {
      router.push(`${basePath}/${id}`);
      return
    }
    router.push(`${basePath}?itemid=${id}`);
  }

  return (
    <ScrollList>
      {items.map(
        ({
          name,
          type,
          id,
          basePath,
        }: ItemData & {
          type?: WindowType;
        }) => (
          <Item
            onClick={() => handleClick(id, basePath)}
            button
            selected={selectedItem === id}
            key={id}
          >
            {type && <ItemIcon selected={selectedItem === id} type={type} />}
            <ListItemText disableTypography primary={name} />
          </Item>
        )
      )}
    </ScrollList>
  );
};
export default ItemsList;
