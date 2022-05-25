import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import logo from "./images/logo.png";
import useStyles from "./styles";
import Posts from "./components/Posts/posts";
import Form from "./components/Form/form";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          ConnectIt
        </Typography>
        <img
          className={classes.images}
          src={logo}
          alt="connectit"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" align="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
