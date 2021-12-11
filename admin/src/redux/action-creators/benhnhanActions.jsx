import axios from "axios";
import { benhnhanTypes } from "../types";

// Get All Posts
const getBenhnhansStart = () => ({
  type: benhnhanTypes.GET_BENHNHANS_START,
});

const getBenhnhansSuccess = (benhnhans) => ({
  type: benhnhanTypes.GET_BENHNHANS_SUCCESS,
  payload: benhnhans,
});

const getBenhnhansFailure = () => ({
  type: benhnhanTypes.GET_BENHNHANS_FAILURE,
});

const getBenhnhans = () => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(getBenhnhansStart());
    try {
      const res = await axios.get("/hosobenhnhan", configAxios);

      console.log(res.data);

      dispatch(getBenhnhansSuccess(res.data));
    } catch (error) {
      dispatch(getBenhnhansFailure());
    }
  };
};

// Get One Post
const getBenhnhanStart = () => ({
  type: benhnhanTypes.GET_BENHNHAN_START,
});

const getBenhnhanSuccess = (benhnhan) => ({
  type: benhnhanTypes.GET_BENHNHAN_SUCCESS,
  payload: benhnhan,
});

const getBenhnhanFailure = () => ({
  type: benhnhanTypes.GET_BENHNHAN_FAILURE,
});

const getBenhnhan = (id) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(getBenhnhanStart());
    try {
      const res = await axios.get("/hosobenhnhan/" + id, configAxios);

      dispatch(getBenhnhanSuccess(res.data));
    } catch (error) {
      dispatch(getBenhnhanFailure());
    }
  };
};

// Create Post
const createBenhnhanStart = () => ({
  type: benhnhanTypes.CREATE_BENHNHAN_START,
});

const createBenhnhanSuccess = (benhnhans) => ({
  type: benhnhanTypes.CREATE_BENHNHAN_SUCCESS,
  payload: benhnhans,
});

const createBenhnhanFailure = () => ({
  type: benhnhanTypes.CREATE_BENHNHAN_FAILURE,
});

const createBenhnhan = (benhnhan) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
      benhnhan: { benhnhans },
    } = getState();
    dispatch(createBenhnhanStart());
    try {
      const res = await axios.post("/hosobenhnhan", benhnhan, configAxios);
      console.log(res);

      dispatch(createBenhnhanSuccess([res.data, ...benhnhans]));
    } catch (error) {
      dispatch(createBenhnhanFailure());
    }
  };
};

// Create Post
const deleteBenhnhanStart = () => ({
  type: benhnhanTypes.DELETE_BENHNHAN_START,
});

const deleteBenhnhanSuccess = (benhnhans) => ({
  type: benhnhanTypes.DELETE_BENHNHAN_SUCCESS,
  payload: benhnhans,
});

const deleteBenhnhanFailure = () => ({
  type: benhnhanTypes.DELETE_BENHNHAN_FAILURE,
});

const deleteBenhnhan = (benhnhan) => {
  return async (dispatch, getState) => {
    console.log("abc benhnhan");
    const {
      option: { configAxios },
      benhnhan: { benhnhans },
    } = getState();
    dispatch(deleteBenhnhanStart());
    try {
      await axios.delete("/hosobenhnhan/" + benhnhan._id, configAxios);
      console.log("delete success");
      const newBenhnhans = benhnhans.filter(
        (item) => item._id !== benhnhan._id
      );
      dispatch(deleteBenhnhanSuccess(newBenhnhans));
    } catch (error) {
      console.log("looix");
      dispatch(deleteBenhnhanFailure());
    }
  };
};

// Update Post
const updateBenhnhanStart = () => ({
  type: benhnhanTypes.UPDATE_BENHNHAN_START,
});

const updateBenhnhanSuccess = (benhnhans) => ({
  type: benhnhanTypes.UPDATE_BENHNHAN_SUCCESS,
  payload: benhnhans,
});

const updateBenhnhanFailure = () => ({
  type: benhnhanTypes.UPDATE_BENHNHAN_FAILURE,
});

const updateBenhnhan = (benhnhan) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
      benhnhan: { benhnhans },
    } = getState();
    dispatch(updateBenhnhanStart());
    try {
      const res = await axios.put(
        "/hosobenhnhan/" + benhnhan._id,
        benhnhan,
        configAxios
      );
      console.log(res);

      let index = benhnhans.findIndex((item) => item._id === benhnhan._id);
      benhnhans[index] = benhnhan;

      dispatch(updateBenhnhanSuccess(benhnhans));
    } catch (error) {
      dispatch(updateBenhnhanFailure());
    }
  };
};

export {
  getBenhnhans,
  createBenhnhan,
  deleteBenhnhan,
  updateBenhnhan,
  getBenhnhan,
};
