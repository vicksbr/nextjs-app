import { SELECT_MENU_DISPLAY  } from "./constants"

export const selectMenu = (display: any) => ({
    type: SELECT_MENU_DISPLAY,
    payload: display,
  });
  