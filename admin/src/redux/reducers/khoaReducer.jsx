import { khoaTypes } from "../types";

const initialState = {
  khoas: [],
  khoa: {},
  isFetching: false,
  error: false,
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case khoaTypes.GET_KHOAS_START:
      return {
        khoas: [],
        isFetching: true,
        error: false,
        message: "",
      };
    case khoaTypes.GET_KHOAS_SUCCESS:
      return {
        khoas: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case khoaTypes.GET_KHOAS_FAILURE:
      return {
        khoas: [],
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case khoaTypes.GET_KHOA_START:
      return {
        khoa: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case khoaTypes.GET_KHOA_SUCCESS:
      return {
        khoa: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case khoaTypes.GET_KHOA_FAILURE:
      return {
        khoa: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case khoaTypes.CREATE_KHOA_START:
      return {
        khoa: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case khoaTypes.CREATE_KHOA_SUCCESS:
      console.log(state);
      return {
        khoas: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case khoaTypes.CREATE_KHOA_FAILURE:
      return {
        khoa: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case khoaTypes.UPDATE_KHOA_START:
      return {
        khoa: {},
        isFetching: true,
        error: false,
        message: "",
      };
    case khoaTypes.UPDATE_KHOA_SUCCESS:
      return {
        khoas: payload,
        isFetching: false,
        error: false,
        message: "Login thành công!",
      };
    case khoaTypes.UPDATE_KHOA_FAILURE:
      return {
        khoa: {},
        isFetching: false,
        error: true,
        message: "Bạn đã nhập sai email hoặc password!",
      };

    case khoaTypes.DELETE_KHOA_START:
      return {
        isFetching: true,
        error: false,
        message: "",
      };
    case khoaTypes.DELETE_KHOA_SUCCESS:
      return {
        khoas: payload,
        isFetching: false,
        error: false,
        message: "DELETE success!",
      };
    case khoaTypes.DELETE_KHOA_FAILURE:
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
