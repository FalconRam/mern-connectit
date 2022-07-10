import {
  FETCH_ALL_POSTS,
  FETCH_BY_SEARCH,
  CREATE_POST,
  UPDATE_OR_LIKE_POST,
  DELETE_POST,
} from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return action.payload;
    case FETCH_BY_SEARCH:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    case UPDATE_OR_LIKE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      // if the post._id is not equal to the action.payload in that case we are going to delete
      //  going to keep all the posts expect the one where the id is equal
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
