import { Formik } from "formik";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Form, Icon } from "semantic-ui-react";
import * as Yup from "yup";
import { AuthContext } from "../../contexts/AuthContext";
import "./Login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { storeCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const notify = () => {
    toast.success("User Logged In!", {
      position: "top-right",
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
      style: { backgroundColor: "green", fontStyle: "bold" },
    });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string()
      .min(3, "Password length should be equal to or greater than 3")
      .required("Password is Required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  return (
    <div className="login">
      <ToastContainer />
      <div className="card">
        <div className="left">
          <h1>Social Media</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus fugiat illo quod, fuga, culpa eius hic voluptatem
            dolore cupiditate unde esse praesentium beatae architecto, nesciunt
            quis rerum aut libero molestiae!
          </p>
          <span>Don{`'`}t have an account?</span>
          <Button
            className="reg-btn"
            content="Register"
            as={Link}
            to="/register"
            color="orange"
          />
        </div>
        {/* eslint-disable react/prop-types */}
        <Formik
          initialValues={{
            email: "abc@gmail.com",
            password: "123",
          }}
          validationSchema={validationSchema}
          validate={(values) => {
            const errors = {};

            if (values.email !== "abc@gmail.com") {
              errors.email = "User doesn't exist";
            }

            if (values.password !== "123") {
              errors.password = "Incorrect password";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // storeCurrentUser(values.email, values.password);
            storeCurrentUser();
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
            console.log(props.errors);
            return (
              <div className="right">
                <h1>Social Login</h1>
                <Form className="form" onSubmit={props.handleSubmit}>
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
                      icon={
                        <Icon
                          name={showPassword ? "eye" : "eye slash"}
                          link
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      }
                    />
                    {props.errors.password && (
                      <div className="ui pointing above red basic label">
                        {props.errors.password}
                      </div>
                    )}
                  </Form.Field>

                  <Button
                    className="button"
                    content="Login"
                    primary
                    type="submit"
                  />
                </Form>
              </div>
            );
          }}
        </Formik>
        {/* eslint-enable react/prop-types */}
      </div>
    </div>
  );
};

export default Login;
