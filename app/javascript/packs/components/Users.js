import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function Users() {
  const signUp = (event) => {
    event.preventDefault();
    // signUp kaku
  };
  return (
    <React.Fragment>
      <Container>
        <div style={{ textAlign: "center", padding: "auto", width: "350px" }}>
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
                type="text"
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group controlId="title-input">
              <div className="text-left">
                <Form.Label>Password confirmation</Form.Label>
              </div>
              <Form.Control
                type="text"
                name="password-confirmation"
                placeholder="Password Confirmation"
              />
            </Form.Group>

            <Button variant="outline-secondary" className="btn" type="submit">
              Sign Up
            </Button>
          </Form>

          <Link to="/">
            <Button variant="outline-secondary" className="btn">
              Back to flower list
            </Button>
          </Link>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Users;
