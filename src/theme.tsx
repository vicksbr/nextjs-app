import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6b48ff;',
      light: "#886bff",
    },
    secondary: {
      main: '#0070f3;',
    },
    error: {
      main: "#eb5757",
    },
    background: {
      default: '#fff',
    },
    grey: {
      200: "#efefef",
      300: "#e2e2e2",
      400: "#c4c4c4",
      500: "#a8a8a8",
      600: "#717171",
      700: "#666666",
      900: "#212121",
      A200: "#e0e0e0",
      A700: "#606060",
    }
  },
});

export default theme;
