import React from "react";
import { Typography, AppBar, Toolbar, Button, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const user = null;

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
              alt={user.result.name}
              src={user.result.imageUrl}
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
              onClick={() => {}}
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
