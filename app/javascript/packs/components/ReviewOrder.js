import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ReviewOrder() {
  return (
    <React.Fragment>
      <Container>
        <h4>Review your order</h4>
        <hr />
        <Row className="mb-5 mt-5">
          <Col md={6}>
            <h5>Shipping option</h5>
            <div>.....</div>
            <div>.....</div>
          </Col>
          <Col md={6}>
            <h5>Payment method</h5>
            <div>.....</div>
            <div>.....</div>
          </Col>
        </Row>
        <Row className="mb-5 mt-5"></Row>
      </Container>
    </React.Fragment>
  );
}

export default ReviewOrder;
