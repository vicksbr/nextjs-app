import { useSelector, shallowEqual } from "react-redux";

import type { StoreState } from "./reducers";
import type { CategoryData, LayoutData, WindowData, TagData } from "types";

export const getAllItems = () => {
    return useSelector<StoreState>(state => state.itemsData, shallowEqual);
}

export const getAllWindowsItems = () => {
    return useSelector<StoreState>(state => state.itemsData.windows, shallowEqual);
}

export const getAllLayoutsItems = () => {
    return useSelector<StoreState>(state => state.itemsData.layouts, shallowEqual);
}


export const getAllCategoriesItems = () => {
    return useSelector<StoreState>(state => state.itemsData.categories, shallowEqual);
}

export const getAllTagsItems = () => {
    return useSelector<StoreState>(state => state.itemsData.tags, shallowEqual);
}


export const getWindowsItemById = (id: string) => { 
    const items = getAllWindowsItems() as WindowData[]
    return items.filter(item => item.id === id)[0]  
}

export const getLayoutsItemById = (id: string) => { 
    const items = getAllLayoutsItems() as LayoutData[]
    return items.filter(item => item.id === id)[0]  
}

export const getCategoriesItemById = (id: string) => { 
    const items = getAllCategoriesItems() as CategoryData[]
    return items.filter(item => item.id === id)[0]  
}

export const getTagItemById = (id: string) => { 
    const items = getAllTagsItems() as TagData[]
    return items.filter(item => item.id === id)[0]
}

