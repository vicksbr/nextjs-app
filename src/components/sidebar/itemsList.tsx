import React from "react";
import { ListItemText, useTheme } from "@material-ui/core";

import { typeIconsMap } from "icons";
import { WindowType, ItemData, WindowData } from "types";

import { ScrollList, StyledItemIcon, Item, ItemRank } from "./styles";
import { useRouter } from "next/router";
import { selectItem } from "store/actions";
import { useDispatch } from "react-redux";

type ItemIconProps = {
  type: WindowType;
  selected: boolean;
};
const ItemIcon: React.FC<ItemIconProps> = ({ type, selected }) => {
  const theme = useTheme();
  return (
    <StyledItemIcon>
      {
        typeIconsMap({
          htmlColor: selected
            ? theme.palette.primary.main
            : theme.palette.grey[400],
        })[type]
      }
    </StyledItemIcon>
  );
};

type ItemsListProps = {
  items: ItemData[];
  selectedItem: string | null;
  selectedView: string | null;
};
const ItemsList: React.FC<ItemsListProps> = ({
  items,
  selectedItem,
}) => {

  const router = useRouter()
  const dispatch = useDispatch()

  const handleClick = (id: string, basePath: string) => {
    dispatch(selectItem(id));
    router.push(`${basePath}/${id}`);
  }

  return (
    <ScrollList>
      {items.map(
        ({ name, type, id, rank, basePath }: Omit<ItemData, "type" | "rank"> & { type?: WindowType; rank?: number | WindowData["rank"] }) => {
          return (
            <Item
              button
              onClick={() => handleClick(id, basePath)}
              selected={selectedItem === id}
              key={id}
            >
              {type && <ItemIcon selected={selectedItem === id} type={type} />}
              {rank && (<ItemRank selected={selectedItem === id}>{`${rank}.`}</ItemRank>)}
              <ListItemText disableTypography primary={name} />
            </Item>
          );
        }
      )}
    </ScrollList>
  );
};
export default ItemsList;
