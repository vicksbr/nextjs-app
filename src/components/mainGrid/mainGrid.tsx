import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import MainMenu from "components/mainMenu";
import Sidebar from "components/sidebar";
import Display from "components/display";
import type { CurationData } from "types";

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
    },
  })
);

const MainGrid: React.FC = () => {
  const data = useSelector(
    ({ itemsData }: { itemsData: CurationData }) => itemsData
  );
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid className={classes.mainMenu}>
        <MainMenu />
      </Grid>
      <Grid item className={classes.sidebar}>
        <Sidebar data={data} />
      </Grid>
      <Grid item className={classes.display}>
        <Display />
      </Grid>
    </Grid>
  );
};

export default MainGrid;
