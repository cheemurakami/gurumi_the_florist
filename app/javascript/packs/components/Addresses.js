import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Addresses() {
  return (
    <React.Fragment>
      <Container>
        <h4>Your Addresses</h4>
        <Row className="mt-3">
          <Col xs={12} sm={12} md={4} lg={4}>
            <Link to={"/newaddress"}>
              <div className="address-btn">
                <p>Add Address</p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Addresses;
