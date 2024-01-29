import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <h2>Register</h2>
      <form action="" className="form">
        <label htmlFor="name" className="label">
          <p>Name</p>
          <input type="text" placeholder="Name" />
        </label>
        <label htmlFor="username" className="label">
          <p>Username</p>
          <input type="text" placeholder="Username" />
        </label>
        <label htmlFor="email" className="label">
          <p>Email Address</p>
          <input type="text" placeholder="Email Address" />
        </label>
        <label htmlFor="password" className="label">
          <p>Password</p>
          <input type="password" placeholder="Password" />
        </label>
        <div className="secondary">
          <Link to="/login">
            <span>Login</span>
          </Link>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
