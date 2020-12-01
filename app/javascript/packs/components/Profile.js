import React from "react";
import { connect } from "react-redux";
import { Container, Image, Row, Col } from "react-bootstrap";
import Addresses from "./Addresses";
import userImage from "./images/userImage.png";

export const Profile = (props) => {
  const { currentUser, addresses } = props;
  const showUser = () => {
    if (currentUser && addresses) {
      const addressObj = addresses[0];
      const address =
        addressObj.street +
        " " +
        addressObj.city +
        ", " +
        addressObj.state +
        " " +
        addressObj.zip;
      return (
        <>
          <p>Email: {currentUser.email}</p>
          <p>Default Address: {address}</p>
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
          <Col>{showUser()}</Col>
          <hr />
        </Row>
        <Addresses />
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
