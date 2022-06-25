import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Posts from "../Posts/posts";
import Form from "../Form/form";
import { getPosts } from "../../actions/posts";

import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = localStorage.getItem("profile");
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  if (!user) {
    history.push("/auth");
  }
  
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          align="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
