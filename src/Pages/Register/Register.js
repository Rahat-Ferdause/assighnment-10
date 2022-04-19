import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const moveToLogin = (event) => {
    navigate("/login");
  };
  const handleRegister = event =>{
    event.preventDefault();
    }
  return (
    <div className="register-form mx-auto">
      <h1>This is Register page</h1>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="Your Name" />
        <br />
        <input
          type="email"
          name="email"
          id=""
          placeholder=" Email Address"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already Account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={moveToLogin}
        >
          LogIn
        </Link>
      </p>
    </div>
  );
};

export default Register;
