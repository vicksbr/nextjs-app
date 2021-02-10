import { createStore, applyMiddleware } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import promise from 'redux-promise-middleware'

import reducer from "../store/reducers"
import type { StoreState } from "../store/reducers" 

const makeStore: MakeStore<StoreState> = () => createStore(reducer, composeWithDevTools(applyMiddleware(promise)));
export const wrapper = createWrapper<StoreState>(makeStore);