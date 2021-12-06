import axios from "axios";
import { renderDataCategories } from "src/helpers/renderCategories";
import { categoryTypes } from "../types";

const getArrCatId = (categories, id) => {
  const data = [];
  let category;
  category = categories.filter((cat) => cat._id === id);
  data.push(id);
  category.forEach((cat1) => {
    console.log(cat1);
    if (cat1.children) {
      cat1.children.forEach((cat) => {
        data.push(...getArrCatId(categories, cat._id));
      });
    }
  });
  // category.forEach((cat) => {
  //   data.push(cat._id);
  //   if (cat.parent) {
  //     data.push(...getArrCatId(categories, cat.parent));
  //   }
  // });

  return data;
};

// Get All Categories
const getCategoriesStart = () => ({
  type: categoryTypes.GET_CATEGORIES_START,
});

const getCategoriesSuccess = (cats) => ({
  type: categoryTypes.GET_CATEGORIES_SUCCESS,
  payload: cats,
});

const getCategoriesFailure = () => ({
  type: categoryTypes.GET_CATEGORIES_FAILURE,
});

const getCategories = () => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(getCategoriesStart());
    try {
      const res = await axios.get("/categories", configAxios);
      // const resTest = await axios.get("/categories/test");
      console.log(res.data);
      const cats = renderDataCategories(res.data);

      dispatch(getCategoriesSuccess(cats));
    } catch (error) {
      console.log("looix");
      dispatch(getCategoriesFailure());
    }
  };
};

// Create Category
const createCategoryStart = () => ({
  type: categoryTypes.CREATE_CATEGORY_START,
});

const createCategorySuccess = (cat) => ({
  type: categoryTypes.CREATE_CATEGORY_SUCCESS,
  payload: cat,
});

const createCategoryFailure = () => ({
  type: categoryTypes.CREATE_CATEGORY_FAILURE,
});

const createCategory = (cat) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(createCategoryStart());
    try {
      const res = await axios.post("/categories", cat, configAxios);
      console.log(res);

      dispatch(createCategorySuccess(res.data));
    } catch (error) {
      console.log("looix");
      dispatch(createCategoryFailure());
    }
  };
};

// Create Category
const deleteCategoryStart = () => ({
  type: categoryTypes.DELETE_CATEGORY_START,
});

const deleteCategorySuccess = () => ({
  type: categoryTypes.DELETE_CATEGORY_SUCCESS,
});

const deleteCategoryFailure = () => ({
  type: categoryTypes.DELETE_CATEGORY_FAILURE,
});

const deleteCategory = (cat) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
      category: { categories },
    } = getState();
    dispatch(deleteCategoryStart());
    try {
      const idList = getArrCatId(categories, cat._id);
      idList.forEach(async (id) => {
        await axios.delete("/categories/" + id, configAxios);
      });
      console.log("delete success");
      dispatch(deleteCategorySuccess());
    } catch (error) {
      console.log("looix");
      dispatch(deleteCategoryFailure());
    }
  };
};

// Update Category
const updateCategoryStart = () => ({
  type: categoryTypes.UPDATE_CATEGORY_START,
});

const updateCategorySuccess = (cat) => ({
  type: categoryTypes.UPDATE_CATEGORY_SUCCESS,
  payload: cat,
});

const updateCategoryFailure = () => ({
  type: categoryTypes.UPDATE_CATEGORY_FAILURE,
});

const updateCategory = (cat) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(updateCategoryStart());
    try {
      const res = await axios.put("/categories/" + cat._id, cat, configAxios);
      console.log(res);

      dispatch(updateCategorySuccess(res.data));
    } catch (error) {
      console.log("looix");
      dispatch(updateCategoryFailure());
    }
  };
};

export { getCategories, createCategory, deleteCategory, updateCategory };
