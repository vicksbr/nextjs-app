import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

import { CategoryData, LayoutData } from "types";

import { APPLY_FILTERS, UPDATE_SEARCH_TERM } from "../actions/constants";

export const initialState = {
  filters: {
    types: {
      flux: false,
      chart: false,
      quotestable: false,
      twittersearch: false,
    },
    categories: [] as CategoryData[],
    layout: null as LayoutData | null,
  },
  searchTerm: "",
};

export type StoreState = typeof initialState;

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case APPLY_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
