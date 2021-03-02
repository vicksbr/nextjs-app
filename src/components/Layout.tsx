import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MainMenu from "components/mainMenu";
import Sidebar from "components/sidebar";

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

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.grid}>
        <Grid className={classes.mainMenu}>
          <MainMenu />
        </Grid>
        <Grid item className={classes.sidebar}>
          <Sidebar />
        </Grid>
        <Grid item className={classes.display}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
