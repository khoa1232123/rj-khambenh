import axios from "axios";
const { authTypes, optionTypes } = require("../types");

const loginStart = () => ({
  type: authTypes.LOGIN_AUTH_START,
});

const loginSuccess = (user) => ({
  type: authTypes.LOGIN_AUTH_SUCCESS,
  payload: user,
});

const loginFailure = () => ({
  type: authTypes.LOGIN_AUTH_FAILURE,
});

const registerStart = () => ({
  type: authTypes.REGISTER_AUTH_START,
});

const registerSuccess = (user) => ({
  type: authTypes.REGISTER_AUTH_SUCCESS,
  payload: user,
});

const registerFailure = () => ({
  type: authTypes.REGISTER_AUTH_FAILURE,
  payload: "Username hoặc Email đã bị trùng",
});

const logoutSuccess = () => ({
  type: authTypes.LOGOUT_AUTH_SUCCESS,
});

const login = (user) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/login", user);
      localStorage.setItem("user", JSON.stringify(res.data));
      const accessToken = res.data.accessToken;

      const configAxios = {
        headers: {
          token: "bearer " + accessToken,
        },
      };
      console.log(configAxios);
      dispatch({ type: optionTypes.GET_CONFIG_AXIOS, payload: configAxios });
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};

const register = (user) => {
  return async (dispatch) => {
    dispatch(registerStart());
    try {
      const res = await axios.post("/auth/register", user);
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(registerSuccess(res.data));
    } catch (error) {
      dispatch(registerFailure());
    }
  };
};

const logout = (user) => {
  return async (dispatch) => {
    localStorage.removeItem("user");

    dispatch({ type: optionTypes.REMOVE_CONFIG_AXIOS });
    dispatch(logoutSuccess());
  };
};

export { login, register, logout };
