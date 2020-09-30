import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Account() {
  return (
    <React.Fragment>
      <Container>
        <h4>Your Account</h4>
        <Row className="mt-3">
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="acc-btn">
              <p>Your Addresses</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="acc-btn">
              <p>Your Payments</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="acc-btn">
              <p>Your Profile</p>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Account;
