import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

import { itemsData } from "mockedData";
import { CurationData, View } from "types";

import {
  SELECT_VIEW,
  SELECT_ITEM,
  CREATE_ITEM,
  UPDATE_ITEMS_DATA,
  APPLY_FILTERS,
  UPDATE_SEARCH_TERM,
} from "../actions/constants";

export const initialState = {
  selectedView: null,
  selectedItem: {
    type: null,
    id: null,
    data: null,
  },
  itemsData: itemsData,
  filters: {
    types: {
      flux: false,
      chart: false,
      quotestable: false,
      twittersearch: false,
    },
    categories: [],
    layout: null,
  },
  searchTerm: "",
};

export type StoreState = typeof initialState


const mapViewToItemType = (view: View | null) => {
  const map = {
    windows: "window",
    layouts: "layout",
    categories: "category",
    tags: "tag",
  };
  return view ? map[view] : null;
};

const getItemData = ( itemsData: CurationData, view: View | null, itemId: string) => {
  return view ? itemsData[view].find((item) => item.id === itemId) : null;
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case UPDATE_ITEMS_DATA:
      return {
        ...state,
        itemsData: action.payload,
      };
    case SELECT_VIEW:
      return { ...state, selectedView: action.payload };
    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: {
          type: mapViewToItemType(state.selectedView),
          id: action.payload,
          data: getItemData(
            state.itemsData,
            state.selectedView,
            action.payload
          ),
        },
      };
    case CREATE_ITEM:
      return {
        ...state,
        selectedItem: {
          type: mapViewToItemType(state.selectedView),
          id: null,
          data: null,
        },
      };
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
