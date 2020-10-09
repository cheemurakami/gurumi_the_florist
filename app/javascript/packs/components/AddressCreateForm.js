import React from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import * as a from "../actions";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

function AddressCreateForm(props) {
  const { dispatch } = props;

  const formSubmissionHandler = (e) => {
    console.log(e.target.default.checked);
    e.preventDefault();
    const data = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      street: e.target.street.value,
      apt_ste_unit: e.target.apt_ste_unit.value,
      city: e.target.city.value,
      state: e.target.state.value,
      zip: e.target.zip.value,
      phone: e.target.phone.value,
      default: e.target.default.checked,
    };

    fetch("/api/addresses", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        const action = a.addedAddress();
        dispatch(action);
      });
  };

  const directToAddresses = () => {
    if (props.showMsg) {
      return <Redirect to="/addresses" />;
    }
  };

  return (
    <Container>
      {directToAddresses()}
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
          <Form.Group as={Col} controlId="formGridAddresses1">
            <Form.Label>Street Addresses</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              type="text"
              name="street"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddresses2">
            <Form.Label>Apt/ Suite/ Unit</Form.Label>
            <Form.Control
              placeholder="Don't forget this one!"
              type="text"
              name="apt_ste_unit"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              type="text"
              name="state"
            >
              <option>Choose...</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="integer" name="zip" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formGridFirstName">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="integer" name="phone" />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" name="default" label="Set as default" />
        </Form.Group>

        <Button variant="outline-secondary" className="mb-1 mr-1" type="submit">
          Continue
        </Button>
        <Link to="/addresses">
          <Button variant="outline-secondary" className="mb-1 mr-1">
            Back
          </Button>
        </Link>
      </Form>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    showMsg: state.addressListReducer.showMsg,
  };
};
AddressCreateForm = connect(mapStateToProps)(AddressCreateForm);
export default AddressCreateForm;
