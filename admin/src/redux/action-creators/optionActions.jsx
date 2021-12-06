const { optionTypes } = require("../types");

const sidebarShow = (val) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    dispatch({ type: optionTypes.SIDEBAR_SHOW, payload: val });
  };
};

const getConfigAxios = () => {
  return async (dispatch) => {
    const accessToken = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).accessToken
      : "";

    const configAxios = {
      headers: {
        token: "bearer " + accessToken,
      },
    };

    dispatch({ type: optionTypes.GET_CONFIG_AXIOS, payload: configAxios });
  };
};

const removeConfigAxios = () => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    dispatch({ type: optionTypes.REMOVE_CONFIG_AXIOS });
  };
};

export { sidebarShow, getConfigAxios, removeConfigAxios };
