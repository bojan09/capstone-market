import { createAction } from "../../reducers/reducer.utilis";
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
