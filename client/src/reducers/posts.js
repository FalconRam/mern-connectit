import {
  FETCH_ALL_POSTS,
  FETCH_BY_SEARCH,
  FETCH_POST_BY_ID,
  CREATE_POST,
  UPDATE_OR_LIKE_POST,
  DELETE_POST,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export default (state = { posts: [], isLoading: true }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL_POSTS:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_POST_BY_ID:
      return { ...state, post: action.payload };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE_OR_LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE_POST:
      // if the post._id is not equal to the action.payload in that case we are going to delete
      //  going to keep all the state expect the one where the id is equal
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
