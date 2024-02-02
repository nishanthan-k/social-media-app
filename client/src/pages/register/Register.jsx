import { Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Form, Button } from "semantic-ui-react";
import * as Yup from "yup";
import "./Register.scss";

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
    <div className="register">
      <ToastContainer />
      <div className="card">
        <div className="left">
          <h1>Social Media</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, cum? Blanditiis reiciendis totam ex quos quod dicta earum ad! Facere minus delectus laborum ipsum molestias aut itaque nihil modi quia?</p>
          <span>Already have an account?</span>
          <Button className="login-btn" as={Link}  to="/login" content="Login" color="orange" />
        </div>
        <Formik
          initialValues={{
            name: "",
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={() => {
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
              <div className="right">
                <h1>Register</h1>
                <Form className="form">
                  <Form.Field error={props.errors.name ? true : false}>
                    <Form.Input
                      className="input"
                      placeholder="Name"
                      name="name"
                      type="text"
                      value={props.values.name}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      required
                    />
                    {props.errors.name && (
                      <div className="ui pointing below red basic label">
                        {props.errors.name}
                      </div>
                    )}
                  </Form.Field>

                  <Form.Field error={props.errors.username ? true : false}>
                    <Form.Input
                      className="input"
                      placeholder="Username"
                      name="username"
                      type={showPassword ? "text" : "password"}
                      value={props.values.username}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      required
                    />
                    {props.errors.username && (
                      <div className="ui pointing above red basic label">
                        {props.errors.username}
                      </div>
                    )}
                  </Form.Field>

                  <Form.Field error={props.errors.email ? true : false}>
                    <Form.Input
                      className="input"
                      placeholder="Email"
                      name="email"
                      type="text"
                      value={props.values.email}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      required
                    />
                    {props.errors.email && (
                      <div className="ui pointing below red basic label">
                        {props.errors.email}
                      </div>
                    )}
                  </Form.Field>

                  <Form.Field error={props.errors.password ? true : false}>
                    <Form.Input
                      className="input"
                      placeholder="Password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={props.values.password}
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      required
                    />
                    {props.errors.password && (
                      <div className="ui pointing above red basic label">
                        {props.errors.password}
                      </div>
                    )}
                  </Form.Field>

                  <Button
                    className="button"
                    content="Register"
                    primary
                    fluid
                    type="submit"
                  />
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};


export default Register;
