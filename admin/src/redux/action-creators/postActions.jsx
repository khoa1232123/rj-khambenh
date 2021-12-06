import axios from "axios";
import { postTypes } from "../types";

// Get All Posts
const getPostsStart = () => ({
  type: postTypes.GET_POSTS_START,
});

const getPostsSuccess = (posts) => ({
  type: postTypes.GET_POSTS_SUCCESS,
  payload: posts,
});

const getPostsFailure = () => ({
  type: postTypes.GET_POSTS_FAILURE,
});

const getPosts = () => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(getPostsStart());
    try {
      const res = await axios.get("/posts", configAxios);

      console.log(res.data);

      dispatch(getPostsSuccess(res.data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
};

// Get One Post
const getPostStart = () => ({
  type: postTypes.GET_POST_START,
});

const getPostSuccess = (post) => ({
  type: postTypes.GET_POST_SUCCESS,
  payload: post,
});

const getPostFailure = () => ({
  type: postTypes.GET_POST_FAILURE,
});

const getPost = (id) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(getPostStart());
    try {
      const res = await axios.get("/posts/" + id, configAxios);

      dispatch(getPostSuccess(res.data));
    } catch (error) {
      dispatch(getPostFailure());
    }
  };
};

// Create Post
const createPostStart = () => ({
  type: postTypes.CREATE_POST_START,
});

const createPostSuccess = (cat) => ({
  type: postTypes.CREATE_POST_SUCCESS,
  payload: cat,
});

const createPostFailure = () => ({
  type: postTypes.CREATE_POST_FAILURE,
});

const createPost = (post) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(createPostStart());
    try {
      const res = await axios.post("/posts", post, configAxios);
      console.log(res);

      dispatch(createPostSuccess(res.data));
    } catch (error) {
      dispatch(createPostFailure());
    }
  };
};

// Create Post
const deletePostStart = () => ({
  type: postTypes.DELETE_POST_START,
});

const deletePostSuccess = () => ({
  type: postTypes.DELETE_POST_SUCCESS,
});

const deletePostFailure = () => ({
  type: postTypes.DELETE_POST_FAILURE,
});

const deletePost = (post) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(deletePostStart());
    try {
      await axios.delete("/posts/" + post._id, configAxios);
      console.log("delete success");
      dispatch(deletePostSuccess());
    } catch (error) {
      console.log("looix");
      dispatch(deletePostFailure());
    }
  };
};

// Update Post
const updatePostStart = () => ({
  type: postTypes.UPDATE_POST_START,
});

const updatePostSuccess = (cat) => ({
  type: postTypes.UPDATE_POST_SUCCESS,
  payload: cat,
});

const updatePostFailure = () => ({
  type: postTypes.UPDATE_POST_FAILURE,
});

const updatePost = (post) => {
  return async (dispatch, getState) => {
    const {
      option: { configAxios },
    } = getState();
    dispatch(updatePostStart());
    try {
      const res = await axios.put("/posts/" + post._id, post, configAxios);
      console.log(res);

      dispatch(updatePostSuccess(res.data));
    } catch (error) {
      dispatch(updatePostFailure());
    }
  };
};

export { getPosts, createPost, deletePost, updatePost, getPost };
