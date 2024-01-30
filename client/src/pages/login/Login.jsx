import React, { useContext } from "react";
import { Box, Button, FormHelperText, Grid, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/AuthContext";
import "./Login.scss";

const Login = () => {
  const { storeUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const notify = () => {
    toast.success("User Registered!", {
      position: "top-right",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
      style: {backgroundColor: "green", fontStyle: "bold"}
    })
  }
  return (
    <Grid container className="login">
      <ToastContainer />
      <Formik
        initialValues={{
          email: "abc",
          password: "123",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Email is required";
          } else if (values.email !== "123") {
            errors.email = "User doesn't exist";
          }

          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password !== "123") {
            errors.password = "Incorrect password";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          storeUser(values.email, values.password);
          notify();
          setTimeout(() => {
            setSubmitting(false);
            navigate("/");
          }, 1500);
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {(props) => {
          console.log("render errors", props.errors);
          return (
            <Box component={"form"} className="form">
              <TextField
                className="textField"
                label="Email"
                name="email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.errors.email ? true: false}
                required
                fullWidth
              />
              {props.errors.email && <FormHelperText className="errors" >{props.errors.email}</FormHelperText>}

              <TextField
                label="Password"
                name="password"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.errors.password ? true: false}
                required
                fullWidth
              />
              {props.errors.password && <FormHelperText className="errors" >{props.errors.password}</FormHelperText>}

              <Button
                onClick={props.handleSubmit}
                variant="contained"
                fullWidth
                size="large"
              >
                Submit
              </Button>
              <Typography variant="body1">
                <Link to="/register">Don't have an account? Register</Link>
              </Typography>
            </Box>
          );
        }}
      </Formik>
    </Grid>
  );
};

export default Login;
