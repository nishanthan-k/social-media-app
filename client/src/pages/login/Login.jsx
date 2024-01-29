import React, { useContext, useState } from "react";
import "./Login.scss";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { storeUser } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e, key) => {
    setFormValues((prev) => ({ ...prev, [key]: e.target.value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    storeUser(formValues.email, formValues.password);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form action="" className="form">
        <label htmlFor="email" className="label">
          <p>Email Address</p>
          <input
            type="text"
            placeholder="Email Address"
            value={formValues.email}
            onChange={(e) => handleInputChange(e, "email")}
            required
          />
        </label>
        <label htmlFor="password" className="label">
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            value={formValues.password}
            onChange={(e) => handleInputChange(e, "password")}
            required
          />
        </label>
        <div className="">
          <Link to="/register">
            <p className="text">Register</p>
          </Link>
          <p className="text">Forgot Password</p>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
