import { createAction } from "../../reducers/reducer.utilis";
import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
