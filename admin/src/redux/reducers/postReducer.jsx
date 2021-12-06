import { postTypes } from "../types";

const initialState = {
  posts: [],
  post: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case postTypes.GET_POSTS_START:
      return {
        posts: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case postTypes.GET_POSTS_SUCCESS:
      return {
        posts: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case postTypes.GET_POSTS_FAILURE:
      return {
        posts: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case postTypes.GET_POST_START:
      return {
        post: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case postTypes.GET_POST_SUCCESS:
      return {
        post: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case postTypes.GET_POST_FAILURE:
      return {
        post: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case postTypes.DELETE_POST_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case postTypes.DELETE_POST_SUCCESS:
      return {
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case postTypes.DELETE_POST_FAILURE:
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
