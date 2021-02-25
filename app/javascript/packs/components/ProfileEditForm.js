import * as a from "../actions";

import { Button, Col, Container, Form } from "react-bootstrap";

import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

export const ProfileEditForm = (props) => {
  const { currentUser, dispatch, message } = props;
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const data = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      username: e.target.username.value,
      email: e.target.email.value,
      current_password: e.target.current_password.value,
      password: e.target.password.value,
    };
    fetch("/users", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: data }),
    }).then((resp) => {
      if (resp.status === 204) {
        const action = a.updatedProfile();
        dispatch(action);
      }
    });
  };

  const form = () => {
    if (message) {
      return updatedProfile();
    } else {
      return (
        <React.Fragment>
          <Container>
            <Form onSubmit={formSubmissionHandler}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="first_name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="last_name" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" name="username" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="email" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>Current password</Form.Label>
                  <Form.Control type="text" name="current_password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" name="password" />
                </Form.Group>
              </Form.Row>

              <Button
                variant="outline-secondary"
                className="mb-1 mr-1"
                type="submit"
              >
                Save
              </Button>
            </Form>
            <Link to={"/profile"}>
              <Button
                variant="outline-secondary"
                className="mb-1 mr-1"
                type="submit"
              >
                Back to Profile
              </Button>
            </Link>
          </Container>
        </React.Fragment>
      );
    }
  };

  const loggedinUserForm = () => {
    if (message) {
      return updatedMessage();
    } else {
      return (
        <React.Fragment>
          <Container>
            <div>
              <h4 className="mt-4 mb-4">Edit your profile</h4>
            </div>
            <Form onSubmit={formSubmissionHandler}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    defaultValue={currentUser.first_name}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    defaultValue={currentUser.last_name}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    defaultValue={currentUser.username}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    defaultValue={currentUser.email}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>Current password</Form.Label>
                  <Form.Control type="text" name="current_password" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" name="password" />
                </Form.Group>
              </Form.Row>

              <Button
                variant="outline-secondary"
                className="mb-1 mr-1"
                type="submit"
              >
                Save
              </Button>
            </Form>
            <Link to={"/profile"}>
              <Button
                variant="outline-secondary"
                className="mb-1 mr-1"
                type="submit"
              >
                Back to Profile
              </Button>
            </Link>
          </Container>
        </React.Fragment>
      );
    }
  };

  const updatedMessage = () => {
    if (message) {
      setTimeout(() => {
        const action = a.resetProfileMessage();
        dispatch(action);
      }, 1500);
    }
    return (
      <React.Fragment>
        <div style={{ textAlign: "center", margin: "auto" }}>
          <p>Successfully Created!</p>
          <Link to="/profile">
            <Button variant="outline-secondary" className="btn">
              Back to List
            </Button>
          </Link>
        </div>
      </React.Fragment>
    );
  };

  if (currentUser) {
    return loggedinUserForm();
  } else {
    return form();
  }
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginStatusReducer.currentUser,
    message: state.loginStatusReducer.message,
  };
};

export default connect(mapStateToProps)(ProfileEditForm);
