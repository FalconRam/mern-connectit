import React, { useState, useEffect } from "react";
import { Typography, AppBar, Toolbar, Button, Avatar } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import { LOGOUT } from "../../constants/actionTypes";
import logo from "../../images/logo.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  // console.log(user);

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
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
        <img
          className={classes.image}
          src={logo}
          alt="connectit"
          height="40px"
        />
        <Typography
          component={Link}
          to={user ? "/" : "/auth"}
          className={classes.heading}
          variant="h4"
          align="center"
        >
          ConnectIt
        </Typography>
      </div>
      <Toolbar className={classes.toolBar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.picture}
            >
              {user.result.name.charAt(0).toUpperCase()}
            </Avatar>
            <Typography className={classes.userName} variant="h5">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={() => logout()}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Typography className={classes.userName} variant="h6">
            Hi, There...
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
