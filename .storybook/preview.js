import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider as ReduxProvider } from "react-redux";

import Provider from "./Provider";
import { themeValues } from "../src/theme";
import reducer, { initialState } from "../src/store/reducers";

const storyTheme = createMuiTheme({
  ...themeValues,
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware())
);

export const decorators = [
  (Story) => (
    <Provider>
      <MuiThemeProvider theme={storyTheme}>
        <CssBaseline />
        <ReduxProvider store={store}>
          <Story />
        </ReduxProvider>
      </MuiThemeProvider>
    </Provider>
  ),
];
