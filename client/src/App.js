import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/NavBar/navBar";
import Home from "./components/Home/home";
import Auth from "./components/Auth/auth";
import PostDetails from "./components/PostDetails/postDetails";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Container maxwidth="xl">
        <Navbar />
        <Switch>
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/" />)}
          />
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/post/:id" exact component={PostDetails} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
