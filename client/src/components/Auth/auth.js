import React, { useState } from "react";
import {
  Container,
  Paper,
  Avatar,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";

import useStyles from "./styles";
import Input from "./input";

const Auth = ({}) => {
  const classes = useStyles();

  const [isSignUp, setIsSignUp] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {};

  const handleChange = () => {};

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const switchMode = () => {
    setIsSignUp(!isSignUp);
    // handleShowPassword(false);
    // handleShowConfirmPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autofoucs="true"
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="date"
                  label="Date of Birth"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="location"
                  label="Location"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              type={showPassword ? "text" : "password"}
            />
            {isSignUp && (
              <Input
                name="password"
                label="Confirm Password"
                handleChange={handleChange}
                // handleShowPassword={handleShowPassword}
                // type={showPassword ? "text" : "password"}
                handleShowConfirmPassword={handleShowConfirmPassword}
                type={showConfirmPassword ? "text" : "password"}
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode} color="primary">
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account?"}
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Typography variant="overline" color="error">
              {" "}
              * field is Required
            </Typography>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
