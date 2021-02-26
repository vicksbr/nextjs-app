import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectView, selectItem } from "store/actions";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MainMenu from "components/mainMenu";
import Sidebar from "components/sidebar";
import { StoreState } from "store/reducers";

import type { CurationData, Item, View } from "../types"

const useStyles = makeStyles(() =>
  createStyles({
    grid: {
      height: "100vh",
      flexWrap: "nowrap",
    },
    mainMenu: {
      flexBasis: 88,
    },
    sidebar: {
      flexBasis: 328,
    },
    display: {
      flexBasis: 0,
      flexGrow: 1,
      padding: "48px 78px",
    },
  })
);

const data = {
  windows: [
    {
      name: "World News",
      date: new Date(),
      type: "Flux",
      id: "window1",
      basePath: "/windows",
    },
    {
      name: "US Financial Blogs",
      date: new Date(),
      type: "Flux",
      id: "window2",
      basePath: "/windows",
    },
    {
      name: "Graphic Design",
      date: new Date(),
      type: "Flux",
      id: "window3",
      basePath: "/windows",
    },
    {
      name: "Currencies",
      date: new Date(),
      type: "Quotes Table",
      id: "window4",
      basePath: "/windows",
    },
    {
      name: "Ibovespa",
      date: new Date(),
      type: "Quotes Table",
      id: "window5",
      basePath: "/windows",
    },
    {
      name: "Game News and Entertainment",
      date: new Date(),
      type: "Flux",
      id: "window6",
      basePath: "/windows",
    },
    {
      name: "USD BRL",
      date: new Date(),
      type: "Chart",
      id: "window7",
      basePath: "/windows",
    },
    {
      name: "US Federal Reserve",
      date: new Date(),
      type: "Chart",
      id: "window8",
      basePath: "/windows",
    },
    {
      name: "Agro Commodities BR",
      date: new Date(),
      type: "Flux",
      id: "window9",
      basePath: "/windows",
    },
    {
      name: "Petrobras",
      date: new Date(),
      type: "Twitter Search",
      id: "window10",
      basePath: "/windows",
    },
  ],
  layouts: [
    {
      name: "US Markets",
      date: new Date(),
      id: "layout1",
      basePath: "/layouts",
    },
    {
      name: "Gamer Girl Board",
      date: new Date(),
      id: "layout2",
      basePath: "/layouts",
    },
    {
      name: "Food",
      date: new Date(),
      id: "layout3",
      basePath: "/layouts",
    },
    {
      name: "Lifestyle",
      date: new Date(),
      id: "layout4",
      basePath: "/layouts",
    },
    {
      name: "Mercado Financeiro BR",
      date: new Date(),
      id: "layout5",
      basePath: "/layouts",
    },
  ],
  categories: [
    {
      name: "Business",
      date: new Date(),
      id: "category1",
      basePath: "/categories",
    },
    {
      name: "Finances",
      date: new Date(),
      id: "category2",
      basePath: "/categories",
    },
  ],
  tags: [
    {
      name: "Bitcoin",
      date: new Date(),
      id: "tag1",
      basePath: "/tags",
    },
    {
      name: "Blockchain",
      date: new Date(),
      id: "tag2",
      basePath: "/tags",
    },
  ],
} as CurationData;

export const getItemById = (type: View, id: any) => {
  return data[type].find((item) => item.id === id);
};

const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();

  const selectedView = useSelector<StoreState>((state) => state.selectedView) as View;
  const selectedItem = useSelector<StoreState>((state) => state.selectedItem) as Item;

  useEffect(() => {
    if (router.isReady) {
      const { create } = router.query;

      if (router.route === "/login") return;

      if (create) {
        dispatch(selectView(router.pathname.split("/")[1] as View));
        dispatch(selectItem(""));
        return;
      }

      if (router.route === "/categories") {
        dispatch(selectView("categories"));
        if (router.query.itemid)
          dispatch(selectItem(router.query.itemid as string));
        return;
      }
      const view = router.asPath.split("/")[1];
      const item = router.asPath.split("/")[2];

      if (!selectedView) {
        dispatch(selectView(view as View));
      }
      if (!selectedItem && item) {
        dispatch(selectItem(item));
      }
    }
  }, [router.isReady]);

  return (
    <>
      <Grid container className={classes.grid}>
        <Grid className={classes.mainMenu}>
          <MainMenu />
        </Grid>
        <Grid item className={classes.sidebar}>
          <Sidebar
            data={data}
          />
        </Grid>
        <Grid item className={classes.display}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
