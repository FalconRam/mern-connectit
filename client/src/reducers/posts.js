export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
      return action.payload;
    case "CREATE_POST":
      return [...posts, action.payload];
    case "UPDATE_POST":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "DELETE_POST":
      // if the post._id is not equal to the action.payload in that case we are going to delete
      //  going to keep all the posts expect the one where the id is equal
      return posts.filter((post) => post._id !== action.payload);
    case "LIKE_POST":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};
