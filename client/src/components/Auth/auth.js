import React, { useState } from "react";
import {
  Container,
  Paper,
  Avatar,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import jwt_decode from "jwt-decode";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import Stack from "@mui/material/Stack";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";
import Input from "./input";
import Icon from "./icon";
import { AUTH } from "../../constants/actionTypes";
import { signUp, logIn } from "../../actions/auth";

const Auth = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const switchMode = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setIsSignUp(!isSignUp);
    setShowPassword(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // step : 1 - dispatching the action ; check step to in actions/auth
    isSignUp
      ? dispatch(signUp(formData, history))
      : dispatch(logIn(formData, history));
  };

  const googleSuccess = async (res) => {
  
    //{clientId, credential : { token, data, signature}, select_by} = res
    // console.log(res);

    const result = jwt_decode(res.credential);
    // console.log(result);
    const token = res.credential.substr(0, 102);
    // console.log(token);

    try {
      dispatch({
        type: AUTH,
        data: { result, token },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    alert("Google SignIn Failed.Try again later..!");
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
                {/* <Input
                  name="date"
                  label="Date of Birth"
                  handleChange={handleChange}
                  half
                /> */}
                {/* <Input
                  name="location"
                  label="Location"
                  handleChange={handleChange}
                  half
                /> */}
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
                name="confirmPassword"
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
          <Grid container justifyContent="center">
            <GoogleOAuthProvider clientId="1020798232424-jq5793prql6ff6jpmt6dkc7q20hf6pvl.apps.googleusercontent.com">
              <GoogleLogin
                render={(renderProps) => (
                  <Button
                    classsName={classes.googleButton}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    startIcon={<Icon />}
                  >
                    Sign In
                  </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={"single_host_origin"}
              />
            </GoogleOAuthProvider>
          </Grid>
          <Grid container justifyContent="flex-end">
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
              * field is Required
            </Typography>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
