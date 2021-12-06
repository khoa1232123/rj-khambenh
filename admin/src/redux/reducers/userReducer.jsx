import { userTypes } from "../types";

const initialState = {
  users: [],
  user: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Get all Users
    case userTypes.GET_USERS_START:
      return {
        ...state,
        users: [],
        isFetching: true,
      };
    case userTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        isFetching: false,
        error: false,
        message: "Get Users thành công!",
      };
    case userTypes.GET_USERS_FAILURE:
      return {
        users: [],
        isFetching: false,
        error: true,
        message: "Get users bị lỗi!",
      };

    // Get one User
    case userTypes.GET_USER_START:
      return {
        ...state,
        user: {},
        isFetching: true,
      };
    case userTypes.GET_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        isFetching: false,
        error: false,
        message: "Get Users thành công!",
      };
    case userTypes.GET_USER_FAILURE:
      return {
        user: {},
        isFetching: false,
        error: true,
        message: "Get user bị lỗi!",
      };

    // Update one User
    case userTypes.UPDATE_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case userTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) => user._id === payload._id && payload),
        isFetching: false,
        message: "Update User thành công!",
      };
    case userTypes.UPDATE_USER_FAILURE:
      return {
        isFetching: false,
        error: true,
        message: "Update user bị lỗi!",
      };

    default:
      return state;
  }
};

export default reducer;
