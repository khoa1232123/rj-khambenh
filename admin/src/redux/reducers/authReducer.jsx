import { authTypes } from "../types";

const localUser =
  localStorage.getItem("user") && localStorage.getItem("user") !== "null"
    ? JSON.parse(localStorage.getItem("user"))
    : {};

const initialState = {
  user: localUser,
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authTypes.LOGIN_AUTH_START:
      return {
        user: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case authTypes.LOGIN_AUTH_SUCCESS:
      return {
        user: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case authTypes.LOGIN_AUTH_FAILURE:
      return {
        user: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case authTypes.REGISTER_AUTH_START:
      return {
        user: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case authTypes.REGISTER_AUTH_SUCCESS:
      return {
        user: payload,
        isFetching: false,
        error: false,
        message: "Register thành công!",
      };
    case authTypes.REGISTER_AUTH_FAILURE:
      return {
        user: {},
        isFetching: false,
        error: true,
        message: "Username hoặc Email của bạn đã bị trùng",
      };

    case authTypes.LOGOUT_AUTH_SUCCESS:
      return {
        user: {},
        isFetching: false,
        error: false,
        message: "",
      };

    default:
      return state;
  }
};

export default reducer;
