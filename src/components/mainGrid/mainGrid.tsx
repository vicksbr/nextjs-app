import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import MainMenu from "components/mainMenu";
import Sidebar from "components/sidebar";
import Display from "components/display";
import type { View, CurationData } from "types";

const useStyles = makeStyles(() =>
  createStyles({
    grid: {
      height: "100vh",
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

type MainGridProps = {
  data: CurationData;
};
const MainGrid: React.FC<MainGridProps> = ({ data }) => {
  const [selectedView, setSelectedView] = useState(null as View | null);
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid className={classes.mainMenu}>
        <MainMenu
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
      </Grid>
      <Grid item className={classes.sidebar}>
        <Sidebar data={data} selectedView={selectedView} />
      </Grid>
      <Grid item className={classes.display}>
        <Display />
      </Grid>
    </Grid>
  );
};

export default MainGrid;
