import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";
import * as a from "../actions";
import { connect } from "react-redux";

function Signin(props) {
  const signIn = (e) => {
    e.preventDefault();
    const { dispatch } = props;
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    fetch("/users/sign_in", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: data }), //devise dake tokubetsu
    })
      .then((response) => response.json())
      .then((responseData) => {
        const action = a.checkedLoginStatus(responseData);
        dispatch(action);
      });
  };

  const directToHome = () => {
    if (props.currentUser) {
      return <Redirect to="/" />;
    }
  };

  return (
    <React.Fragment>
      <Container>
        {directToHome()}

        <div style={{ textAlign: "center", margin: "auto", width: "350px" }}>
          <h4>Sign In</h4>
          <Form className="text-center" onSubmit={signIn}>
            <Form.Group controlId="title-input">
              <div className="text-left">
                <Form.Label>Email</Form.Label>
              </div>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                defaultValue="kiwi@fake.com"
              />
            </Form.Group>

            <Form.Group controlId="title-input">
              <div className="text-left">
                <Form.Label>Password</Form.Label>
              </div>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                defaultValue="123456"
              />
            </Form.Group>

            <Button variant="outline-secondary" className="btn" type="submit">
              Sign In
            </Button>
          </Form>

          <p className="mt-3">Don't have an account?</p>

          <Link to="/users/sign_up">
            <Button variant="outline-secondary" className="btn mb-3">
              Create Account
            </Button>
          </Link>
        </div>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginStatusReducer.currentUser,
  };
};

Signin = connect(mapStateToProps)(Signin);

export default Signin;
