import React from "react";
import { connect } from "react-redux";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import Addresses from "./Addresses";
import Cart from "./Cart";
import userImage from "./images/userImage.png";
import { Link } from "react-router-dom";

export const Profile = (props) => {
  const { currentUser, addresses } = props;

  const showUser = () => {
    if (currentUser && addresses && addresses.length > 0) {
      const addressObj = addresses.find((address) => address.default === true);

      const defaultAddress =
        addressObj.street +
        " " +
        addressObj.apt_ste_unit +
        " " +
        addressObj.city +
        ", " +
        addressObj.state +
        " " +
        addressObj.zip;

      const email = currentUser.email;

      return (
        <>
          <p>
            Name: {currentUser.first_name} {currentUser.last_name}
          </p>
          <p>Email: {email}</p>
          <p>Default Address: {defaultAddress}</p>
        </>
      );
    }
  };
  return (
    <React.Fragment>
      <Container>
        <h4>Your Profile</h4>

        <Row className="mt-5 mb-5">
          <Col>
            <Image
              className="ml-3"
              src={userImage}
              roundedCircle
              width={150}
              height={150}
            />
          </Col>
          <Col>
            {showUser()}
            <Link to={"/profile_edit"}>
              <Button variant="outline-secondary" className="btn">
                Edit your profile
              </Button>
            </Link>
          </Col>
        </Row>
        <Addresses />
        <Cart />
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginStatusReducer.currentUser,
    addresses: state.addressListReducer.addresses,
  };
};

export default connect(mapStateToProps)(Profile);
