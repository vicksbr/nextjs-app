import React from "react";
import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import MainMenu from "components/mainMenu";
import Sidebar from "components/sidebar";
import type { Views, View } from "types";

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
      position: "relative",
      overflowY: "scroll",
      padding: "48px 78px",
    },
  })
);

const views: Views = ["windows", "layouts", "categories", "tags"];

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  const router = useRouter();
  const pathView = router.pathname.split("/")[1] as View;
  const currentView: View | null = views.includes(pathView) ? pathView : null;

  return (
    <>
      <Grid container className={classes.grid}>
        <Grid className={classes.mainMenu}>
          <MainMenu currentView={currentView} />
        </Grid>
        <Grid item className={classes.sidebar}>
          <Sidebar currentView={currentView} />
        </Grid>
        <Grid item className={classes.display}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
