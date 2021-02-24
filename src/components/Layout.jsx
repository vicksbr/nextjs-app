import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { selectView, selectItem } from "store/actions";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import MainMenu from "components/mainMenu";
import Sidebar from "components/sidebar";

import useUser from "../../lib/useUser";
import { useRouter } from "next/router";

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
};

export const getItemById = (type, id) => {
  return data[type].find((item) => item.id === id);
};

const Layout = ({ children }) => {
  const { user } = useUser({ redirectTo: "/login" });
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();

  const selectedView = useSelector((state) => state.selectedView);
  const selectedItem = useSelector((state) => state.selecteItem);

  useEffect(() => {
    if (router.isReady) {
      const { create } = router.query;
      console.log(create);

      if (create) {
        dispatch(selectView(router.pathname.split("/")[1]));
        dispatch(selectItem(""));
        return;
      }

      if (router.route === "/categories") {
        dispatch(selectView("categories"));
        dispatch(selectItem(router.query.itemid));
        return;
      }
      const view = router.asPath.split("/")[1];
      const item = router.asPath.split("/")[2];

      if (!selectedView) {
        dispatch(selectView(view));
      }
      if (!selectedItem && item) {
        dispatch(selectItem(item));
      }
    }
  }, [router.isReady]);

  if (!user?.isLoggedIn) return <>{children}</>;

  return (
    <>
      <Grid container className={classes.grid}>
        <Grid className={classes.mainMenu}>
          <MainMenu selectedView={selectedView} />
        </Grid>
        <Grid item className={classes.sidebar}>
          <Sidebar
            data={data}
            selectedView={selectedView}
            selectedItem={selectedItem}
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
