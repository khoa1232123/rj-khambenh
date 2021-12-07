import axios from "axios";
import { bacsiTypes } from "../types";

// Get All Posts
const getBacsisStart = () => ({
  type: bacsiTypes.GET_BACSIS_START,
});

const getBacsisSuccess = (bacsis) => ({
  type: bacsiTypes.GET_BACSIS_SUCCESS,
  payload: bacsis,
});

const getBacsisFailure = () => ({
  type: bacsiTypes.GET_BACSIS_FAILURE,
});

const getBacsis = () => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(getBacsisStart());
    try {
      const res = await axios.get("/bacsi", configAxios);

      console.log(res.data);

      dispatch(getBacsisSuccess(res.data));
    } catch (error) {
      dispatch(getBacsisFailure());
    }
  };
};

// Get One Post
const getBacsiStart = () => ({
  type: bacsiTypes.GET_BACSI_START,
});

const getBacsiSuccess = (bacsi) => ({
  type: bacsiTypes.GET_BACSI_SUCCESS,
  payload: bacsi,
});

const getBacsiFailure = () => ({
  type: bacsiTypes.GET_BACSI_FAILURE,
});

const getBacsi = (id) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(getBacsiStart());
    try {
      const res = await axios.get("/bacsi/" + id, configAxios);

      dispatch(getBacsiSuccess(res.data));
    } catch (error) {
      dispatch(getBacsiFailure());
    }
  };
};

// Create Post
const createBacsiStart = () => ({
  type: bacsiTypes.CREATE_BACSI_START,
});

const createBacsiSuccess = (cat) => ({
  type: bacsiTypes.CREATE_BACSI_SUCCESS,
  payload: cat,
});

const createBacsiFailure = () => ({
  type: bacsiTypes.CREATE_BACSI_FAILURE,
});

const createBacsi = (bacsi) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(createBacsiStart());
    try {
      const res = await axios.post("/bacsi", bacsi, configAxios);
      console.log(res);

      dispatch(createBacsiSuccess(res.data));
    } catch (error) {
      dispatch(createBacsiFailure());
    }
  };
};

// Create Post
const deleteBacsiStart = () => ({
  type: bacsiTypes.DELETE_BACSI_START,
});

const deleteBacsiSuccess = (bacsis) => ({
  type: bacsiTypes.DELETE_BACSI_SUCCESS,
  payload: bacsis,
});

const deleteBacsiFailure = () => ({
  type: bacsiTypes.DELETE_BACSI_FAILURE,
});

const deleteBacsi = (bacsi) => {
  return async (dispatch, getState) => {
    console.log("abc bacsi");
    const {
      option: { configAxios },
      bacsi: { bacsis },
    } = getState();
    dispatch(deleteBacsiStart());
    try {
      await axios.delete("/bacsi/" + bacsi._id, configAxios);
      console.log("delete success");
      const newBacsis = bacsis.filter((item) => item._id !== bacsi._id);
      dispatch(deleteBacsiSuccess(newBacsis));
    } catch (error) {
      console.log("looix");
      dispatch(deleteBacsiFailure());
    }
  };
};

// Update Post
const updateBacsiStart = () => ({
  type: bacsiTypes.UPDATE_BACSI_START,
});

const updateBacsiSuccess = (cat) => ({
  type: bacsiTypes.UPDATE_BACSI_SUCCESS,
  payload: cat,
});

const updateBacsiFailure = () => ({
  type: bacsiTypes.UPDATE_BACSI_FAILURE,
});

const updateBacsi = (bacsi) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(updateBacsiStart());
    try {
      const res = await axios.put("/bacsi/" + bacsi._id, bacsi, configAxios);
      console.log(res);

      dispatch(updateBacsiSuccess(res.data));
    } catch (error) {
      dispatch(updateBacsiFailure());
    }
  };
};

export { getBacsis, createBacsi, deleteBacsi, updateBacsi, getBacsi };
