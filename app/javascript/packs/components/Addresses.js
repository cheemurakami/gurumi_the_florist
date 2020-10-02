import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Addresses(props) {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    fetch("/api/addresses")
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        setAddresses(jsonifiedResponse);
      });
  }, []);

  const showMessage = () => {
    if (props.showMsg) {
      return (
        <div className="address-msg">
          <h5>Added Address!</h5>
        </div>
      );
    }
  };
  return (
    <React.Fragment>
      <Container>
        <h4>Your Addresses</h4>
        {showMessage()}
        <Row className="mt-3">
          <Col xs={12} sm={12} md={4} lg={4}>
            <Link to={"/newaddress"}>
              <div className="address-add-btn">
                <p>Add Address</p>
              </div>
            </Link>
          </Col>
          {addresses.map((address) => {
            return (
              <Col xs={12} sm={12} md={4} lg={4} key={address.id}>
                <div className="address">
                  <p>
                    {address.first_name} {address.last_name}
                  </p>
                  <p>
                    <span>{address.street} </span>
                    {address.apt_ste_unit && (
                      <span>#{address.apt_ste_unit}</span>
                    )}
                  </p>
                  <p>
                    {address.city}, {address.state} {address.zip}
                  </p>
                  <p>Phone: {address.phone}</p>
                  <br />
                  <p>
                    <span>Edit</span> <span>Remove</span>
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    showMsg: state.addressListReducer.showMsg,
  };
};
Addresses = connect(mapStateToProps)(Addresses);
export default Addresses;
