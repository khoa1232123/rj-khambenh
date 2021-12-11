import { benhnhanTypes } from "../types";

const initialState = {
  benhnhans: [],
  benhnhan: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case benhnhanTypes.GET_BENHNHANS_START:
      return {
        benhnhans: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case benhnhanTypes.GET_BENHNHANS_SUCCESS:
      return {
        benhnhans: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case benhnhanTypes.GET_BENHNHANS_FAILURE:
      return {
        benhnhans: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case benhnhanTypes.GET_BENHNHAN_START:
      return {
        benhnhan: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case benhnhanTypes.GET_BENHNHAN_SUCCESS:
      return {
        benhnhan: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case benhnhanTypes.GET_BENHNHAN_FAILURE:
      return {
        benhnhan: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case benhnhanTypes.CREATE_BENHNHAN_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case benhnhanTypes.CREATE_BENHNHAN_SUCCESS:
      return {
        benhnhans: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case benhnhanTypes.CREATE_BENHNHAN_FAILURE:
      return {
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case benhnhanTypes.UPDATE_BENHNHAN_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case benhnhanTypes.UPDATE_BENHNHAN_SUCCESS:
      return {
        benhnhans: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case benhnhanTypes.UPDATE_BENHNHAN_FAILURE:
      return {
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };
    case benhnhanTypes.DELETE_BENHNHAN_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case benhnhanTypes.DELETE_BENHNHAN_SUCCESS:
      return {
        benhnhans: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case benhnhanTypes.DELETE_BENHNHAN_FAILURE:
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
