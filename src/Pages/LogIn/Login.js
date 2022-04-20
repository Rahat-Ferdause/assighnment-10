import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialMedia from "./SocialMedia/SocialMedia";

const Login = () => {
  const emailref = useRef("");
  const passref = useRef("");
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] =
    useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailref.current.value;
    const password = passref.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const moveToRegister = (event) => {
    navigate("/register");
  };
  const moveToResetPassword = async() => { 
    const email = emailref.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');};

  return (
    <div>
      <SocialMedia></SocialMedia>
      <div className="container w-50 mx-auto">
        <h1 className="text-center mt-2">this is Login Page</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailref}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passref}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          New User
          <Link
            to="/register"
            className="text-primary pe-auto text-decoration-none"
            onClick={moveToRegister}
          >
            Register
          </Link>
        </p>
        <p>
          Forget Password?
          <Link
            to="/register"
            className="text-primary pe-auto text-decoration-none"
            onClick={moveToResetPassword}
          >
            Reset Password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
