import { optionTypes } from "../types";
const accessToken = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")).accessToken
  : "";

const configAxios = accessToken
  ? {
      headers: {
        token: "bearer " + accessToken,
      },
    }
  : null;

const initialState = {
  sidebar: "responsive",
  configAxios: configAxios,
};

const option = (state = initialState, { type, payload }) => {
  switch (type) {
    case optionTypes.SIDEBAR_SHOW:
      return {
        ...state,
        sidebar: payload,
      };

    case optionTypes.GET_CONFIG_AXIOS:
      return {
        ...state,
        configAxios: payload,
      };

    case optionTypes.REMOVE_CONFIG_AXIOS:
      return {
        ...state,
        configAxios: null,
      };

    default:
      return state;
  }
};

export default option;
