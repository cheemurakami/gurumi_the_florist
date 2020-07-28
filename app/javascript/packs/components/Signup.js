import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function Signup() {
  const signUp = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      password_confirmation: e.target.password_confirmation.value,
    };
    fetch("/users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: data }), //devise dake tokubetsu
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      });
  };

  return (
    <React.Fragment>
      <Container>
        <div style={{ textAlign: "center", margin: "auto", width: "350px" }}>
          <h4>Sign Up</h4>
          <Form className="text-center" onSubmit={signUp}>
            <Form.Group controlId="title-input">
              <div className="text-left">
                <Form.Label>Email</Form.Label>
              </div>
              <Form.Control type="text" name="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="title-input">
              <div className="text-left">
                <Form.Label>Password</Form.Label>
              </div>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group controlId="title-input">
              <div className="text-left">
                <Form.Label>Password confirmation</Form.Label>
              </div>
              <Form.Control
                type="password"
                name="password_confirmation"
                placeholder="Password Confirmation"
              />
            </Form.Group>

            <Button variant="outline-secondary" className="btn mb-3" type="submit">
              Sign Up
            </Button>
          </Form>

          <Link to="/">
            <Button variant="outline-secondary" className="btn mb-3">
              Back to flower list
            </Button>
          </Link>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Signup;
