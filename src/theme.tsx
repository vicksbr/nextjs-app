import { createMuiTheme } from "@material-ui/core/styles";

export const themeValues = {
  palette: {
    primary: {
      main: "#6b48ff",
      light: "#886bff",
      dark: "#6141e9",
    },
    secondary: {
      main: "#0070f3",
    },
    error: {
      main: "#eb5757",
      dark: "#e15353",
    },
    background: {
      default: "#fff",
    },
    grey: {
      200: "#efefef",
      300: "#e2e2e2",
      400: "#c4c4c4",
      500: "#a8a8a8",
      600: "#717171",
      700: "#666666",
      800: "#333333",
      900: "#212121",
      A200: "#e0e0e0",
      A400: "#333333",
      A700: "#606060",
    },
  },
};

const theme = createMuiTheme(themeValues);

export default theme;
