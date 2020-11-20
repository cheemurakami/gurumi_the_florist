import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Account() {
  return (
    <React.Fragment>
      <Container>
        <h4>Your Account</h4>
        <Row className="mt-3">
          <Col xs={12} sm={12} md={4} lg={4}>
            <Link to={"/addresses"}>
              <div className="acc-btn">
                <p>Your Addresseses</p>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Link to={"/payments"}>
              <div className="acc-btn">
                <p>Your Payments</p>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Link to={"/profile"}>
              <div className="acc-btn">
                <p>Your Profile</p>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Link to={"/cart"}>
              <div className="acc-btn">
                <p>Your Cart</p>
              </div>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Link to={"/favorites"}>
              <div className="acc-btn">
                <p>Your Favorite List</p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Account;
