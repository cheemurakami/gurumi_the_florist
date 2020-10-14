import React, { useEffect, useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { useParams, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as a from "../actions";

function AddressEditForm(props) {
  const [address, setAddress] = useState({});
  const { id } = useParams();
  const { dispatch } = props;

  useEffect(() => {
    let mounted = true;
    fetch(`/api/addresses/${id}`)
      .then((resp) => resp.json())
      .then((jsonifiedResp) => {
        if (mounted) {
          setAddress(jsonifiedResp);
        }
      });
    return () => mounted = false;
  }, []);

  const formSubmissionHandler = (e) => {
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

    fetch(`/api/addresses/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        const action = a.updatedAddress();
        dispatch(action);
      });
  };

  const directToAddresses = () => {
    if (props.showMsg) {
      return <Redirect to="/addresses" />;
    }
  };

  const setDefault = () => {
      return (
        <React.Fragment>
          <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" name="default" defaultChecked={address && address.default} label="Set as default" />
          </Form.Group>
        </React.Fragment>
      )
  }

  return (
    <React.Fragment>
      <Container>
        {directToAddresses()}
        <Form onSubmit={formSubmissionHandler}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                defaultValue={address.first_name}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                defaultValue={address.last_name}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridAddresses1">
              <Form.Label>Street Addresses</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                type="text"
                name="street"
                defaultValue={address.street}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddresses2">
              <Form.Label>Apt/ Suite/ Unit</Form.Label>
              <Form.Control
                placeholder="Don't forget this one!"
                type="text"
                name="apt_ste_unit"
                defaultValue={address.apt_ste_unit}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                defaultValue={address.city}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                type="text"
                name="state"
                defaultValue={address.state}
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
              <Form.Control
                type="integer"
                name="zip"
                defaultValue={address.zip}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGridFirstName">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="integer"
                name="phone"
                defaultValue={address.phone}
              />
            </Form.Group>
          </Form.Row>

          {setDefault()}

          <Button
            variant="outline-secondary"
            className="mb-1 mr-1"
            type="submit"
          >
            Continue
          </Button>
          <Link to="/addresses">
            <Button
              variant="outline-secondary"
              className="mb-1 mr-1"
            >
              Back
            </Button>
          </Link>
        </Form>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    showMsg: state.addressListReducer.showMsg,
  };
};
AddressEditForm = connect(mapStateToProps)(AddressEditForm);
export default AddressEditForm;
