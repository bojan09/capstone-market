import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((accumilator, category) => {
      const { title, items } = category;
      accumilator[title.toLowerCase()] = items;

      return accumilator;
    }, {})
);
