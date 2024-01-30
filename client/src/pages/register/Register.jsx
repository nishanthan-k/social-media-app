import React from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Grid, TextField, Typography, FormHelperText } from "@mui/material";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  return (
    <Grid container className="register">
      <ToastContainer />
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          let errors = {};
          const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

          if (!values.name) {
            errors.name = "Name is required";
          }

          if (!values.username) {
            errors.username = "Username is required";
          }

          if (!values.email) {
            errors.email = "Email is required";
          } else if (!values.email.match(isValidEmail)) {
            errors.email = "Invalid Email"
          }

          if (!values.password) {
            errors.password = "Password is required";
          }

          return errors
        }}
        onSubmit={(values) => {
          toast.success("User Registered!", {
            position: "top-right",
            autoClose: 1000,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "colored",
            style: {backgroundColor: "green", fontStyle: "bold"}
          })
          setTimeout(() => {
            navigate("/")
          }, 1500);
        }}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {(props) => {
          return (
            <Box component={"form"} className="form">
              <TextField
                label="Name"
                name="name"
                value={props.values.name}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.errors.name ? true : false}
                required
                fullWidth
              />
              {props.errors.name && <FormHelperText className="errors" >{props.errors.name}</FormHelperText>}

              <TextField
                label="Username"
                name="username"
                value={props.values.username}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.errors.username ? true : false}
                required
                fullWidth
              />
              {props.errors.username && <FormHelperText className="errors" >{props.errors.username}</FormHelperText>}

              <TextField
                label="Email"
                name="email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.errors.email ? true : false}
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
                error={props.errors.password ? true : false}
                required
                fullWidth
              />
              {props.errors.password && <FormHelperText className="errors" >{props.errors.password}</FormHelperText>}

              <Button
                onClick={props.handleSubmit}
                variant="contained"
                size="large"
                fullWidth
              >
                Register
              </Button>
              <Typography variant="body1">
                <Link to="/login">Already an user? Login</Link>
              </Typography>
            </Box>
          );
        }}
      </Formik>
    </Grid>
  );
};

export default Register;
