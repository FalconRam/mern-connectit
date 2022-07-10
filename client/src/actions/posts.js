import * as api from "../api";
import {
  FETCH_ALL_POSTS,
  FETCH_BY_SEARCH,
  CREATE_POST,
  UPDATE_OR_LIKE_POST,
  DELETE_POST,
} from "../constants/actionTypes";

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (search) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(search);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE_OR_LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: UPDATE_OR_LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
