import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CheckOutInfo from "./CheckOutInfo";
import Payments from "./Payments";

function SelectPayment() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
          <h4>Select a payment method</h4>
            <hr />
            <Payments />
          </Col>
          <Col md={4}>
            <CheckOutInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SelectPayment;
