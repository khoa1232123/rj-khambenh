import axios from "axios";
// import { configAxios } from "src/config";
import { userTypes } from "../types";

// Get All Users
const getUsersStart = () => ({
  type: userTypes.GET_USERS_START,
});

const getUsersSuccess = (users) => ({
  type: userTypes.GET_USERS_SUCCESS,
  payload: users,
});

const getUsersFailure = () => ({
  type: userTypes.GET_USERS_FAILURE,
});

const getUsers = () => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(getUsersStart());
    try {
      const res = await axios.get("/users", configAxios);
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  };
};

// Get One User
const getUserStart = () => ({
  type: userTypes.GET_USER_START,
});

const getUserSuccess = (user) => ({
  type: userTypes.GET_USER_SUCCESS,
  payload: user,
});

const getUserFailure = () => ({
  type: userTypes.GET_USER_FAILURE,
});

const getUser = (id) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(getUserStart());
    try {
      const res = await axios.get("/users/find/" + id, configAxios);
      dispatch(getUserSuccess(res.data));
    } catch (error) {
      dispatch(getUserFailure());
    }
  };
};

const updateUserStart = () => ({
  type: userTypes.UPDATE_USER_START,
});

const updateUserSuccess = (users) => ({
  type: userTypes.UPDATE_USER_SUCCESS,
  payload: users,
});

const updateUserFailure = () => ({
  type: userTypes.UPDATE_USER_FAILURE,
});

const updateUser = (user, image) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(updateUserStart());

    if (image) {
      const data = new FormData();
      data.append("image", image);
      try {
        const res = await axios.post("/upload", data);
        user = { ...user, avatar: "images/" + res.data.file.filename };
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const res = await axios.put("/users/" + user._id, user, configAxios);
      dispatch(updateUserSuccess(res.data));
    } catch (error) {
      dispatch(updateUserFailure());
    }
  };
};

export { getUsers, getUser, updateUser };
