import React from "react";
import { connect } from "react-redux";
import { Container, Form, Button, Col } from "react-bootstrap";

export const ProfileEditForm = () => {
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const data = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      username: e.target.username.value,
    };
    console.log(data);
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

            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" />
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ProfileEditForm);
