import React from "react";
import { connect } from "react-redux";
import { Container, Form, Button, Col } from "react-bootstrap";

export const ProfileEditForm = (props) => {
  const { currentUser } = props;

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
        console.log("updated!");
      }
    });
  };
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
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginStatusReducer.currentUser,
  }
}

export default connect(mapStateToProps)(ProfileEditForm);
