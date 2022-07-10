import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import "../../index.css";
import Post from "./Post/post";
import useStyles from "./styles";

const Posts = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  // console.log(posts);
  return !posts.length ? (
    <div className="center">
      <div className="spinner" />
    </div>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6} lg={6}>
          {/* Props Drilling */}
          <Post post={post} currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
