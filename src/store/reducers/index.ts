import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { SELECT_MENU_DISPLAY  } from "../actions/constants";

export interface StoreState {
    display: string;
}

export const initialState = {
  display: "initial page",
  
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case SELECT_MENU_DISPLAY:
        return { ...state, display: action.payload };
    default:
        return state;
  }
};

export default reducer;