import React, { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const notify = () => {
    toast.success("User Registered!", {
      position: "top-right",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
      style: { backgroundColor: "green", fontStyle: "bold" },
    });
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Grid container className="register">
      <ToastContainer />
      <Formik
        initialValues={{
          name: "",
          username: "",
          password: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          notify();
          setTimeout(() => {
            navigate("/");
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {props.errors.name && (
                <FormHelperText className="errors">
                  {props.errors.name}
                </FormHelperText>
              )}

              <TextField
                label="Username"
                name="username"
                value={props.values.username}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.errors.username ? true : false}
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonPinIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {props.errors.username && (
                <FormHelperText className="errors">
                  {props.errors.username}
                </FormHelperText>
              )}

              <TextField
                className="textField"
                label="Email"
                name="email"
                value={props.values.email}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.errors.email ? true : false}
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {props.errors.email && (
                <FormHelperText className="errors">
                  {props.errors.email}
                </FormHelperText>
              )}

              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={props.values.password}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                error={props.errors.password ? true : false}
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {showPassword ? <LockOpenIcon /> : <LockIcon />}
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
              {props.errors.password && (
                <FormHelperText className="errors">
                  {props.errors.password}
                </FormHelperText>
              )}

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
