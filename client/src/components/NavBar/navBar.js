import React, { useState, useEffect } from "react";
import { Typography, AppBar, Toolbar, Button, Avatar } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { LOGOUT } from "../../constants/actionTypes";
import logo from "../../images/logo.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    history.push("/auth");
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          ConnectIt
        </Typography>
        <img className={classes.image} src={logo} alt="connectit" height="60" />
      </div>
      <Toolbar className={classes.toolBar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.decodedUserPayload.name}
              src={user.decodedUserPayload.picture}
            >
              {user.decodedUserPayload.name.charAt(0).toUpperCase()}
            </Avatar>
            <Typography className={classes.userName} variant="h5">
              {user.decodedUserPayload.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/auth"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
