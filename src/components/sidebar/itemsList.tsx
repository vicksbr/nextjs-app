import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, useTheme } from "@material-ui/core";

import Flux from "icons/flux";
import { Window, Layout, Category, Tag } from "types";

type ItemsListProps = {
  items: (Window | Layout | Category | Tag)[];
};
const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
  const theme = useTheme();
  return (
    <List>
      {items.map(
        (item: (Window | Layout | Category | Tag) & { type?: string }) => (
          <ListItem button key={item.name}>
            {item.type && (
              <ListItemIcon>
                <Flux htmlColor={theme.palette.grey[400]} />
              </ListItemIcon>
            )}
            <ListItemText primary={item.name} />
          </ListItem>
        )
      )}
    </List>
  );
};
export default ItemsList;
