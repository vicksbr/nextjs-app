import React, { useState } from "react";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import MainMenu from "components/mainMenu";
import Sidebar from "components/sidebar";

import useUser from "../../lib/useUser";

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
  const [selectedView, setSelectedView] = useState(null);
  const [selectedItem, setSelectedItem] = useState("");

  const classes = useStyles();

  const { user } = useUser({ redirectTo: "/login" });

  if (!user?.isLoggedIn) return <>{children}</>;

  return (
    <>
      <Grid container className={classes.grid}>
        <Grid className={classes.mainMenu}>
          <MainMenu
            selectedView={selectedView}
            setSelectedView={setSelectedView}
          />
        </Grid>
        <Grid item className={classes.sidebar}>
          <Sidebar
            data={data}
            selectedView={selectedView}
            selectedItem={selectedItem}
            handleSelectItem={setSelectedItem}
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
