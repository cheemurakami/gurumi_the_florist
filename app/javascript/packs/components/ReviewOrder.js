import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";

function ReviewOrder(props) {
  const { address } = props;
  const deliveryFee = 3;

  const displayShippingOption = () => {
    if (address) {
      const deliveryAddress =
        address.street +
        " " +
        address.city +
        ", " +
        address.state +
        " " +
        address.zip;
      return (
        <>
          <Card style={{ width: "18rem" }} className="card-checkout">
            <Card.Body>
              <Card.Text>Ship to: {deliveryAddress}</Card.Text>
              <Card.Text>Delivery fee: ${deliveryFee}</Card.Text>
            </Card.Body>
          </Card>
        </>
      );
    } else {
      return (
        <>
          <Card.Text>Store Pickup</Card.Text>
        </>
      );
    }
  };

  return (
    <React.Fragment>
      <Container>
        <h4>Review your order</h4>
        <hr />
        <Row className="mb-5 mt-5">
          <Col md={6}>
            <h5>Shipping option</h5>
            {displayShippingOption()}
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

const mapStateToProps = (state) => {
  return {
    address: state.addressReducer.address,
  };
};
ReviewOrder = connect(mapStateToProps)(ReviewOrder);
export default ReviewOrder;
