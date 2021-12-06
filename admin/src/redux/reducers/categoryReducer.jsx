import { categoryTypes } from "../types";

const initialState = {
  categories: [],
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case categoryTypes.GET_CATEGORIES_START:
      return {
        categories: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case categoryTypes.GET_CATEGORIES_SUCCESS:
      return {
        categories: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case categoryTypes.GET_CATEGORIES_FAILURE:
      return {
        categories: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case categoryTypes.DELETE_CATEGORY_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case categoryTypes.DELETE_CATEGORY_SUCCESS:
      return {
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case categoryTypes.DELETE_CATEGORY_FAILURE:
      return {
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    default:
      return state;
  }
};

export default reducer;
