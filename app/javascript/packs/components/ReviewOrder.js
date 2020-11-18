import React, { useEffect } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as a from "../actions";
import FavoriteList from "./FavoriteList";
import ProceedOrderBtn from "./ProceedOrderBtn";

function ReviewOrder(props) {
  const { flowers, address, dispatch } = props;

  useEffect(() => {
    fetch("/api/cart")
      .then((resp) => resp.json())
      .then((jsonResp) => {
        const action = a.loadedFlowersInCart(jsonResp);
        dispatch(action);
      });
    return () => {};
  }, []);

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
              <Card.Text>Ship to:</Card.Text>
              <Card.Text>{deliveryAddress}</Card.Text>
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

  const cartItemReview = () => {
    if (flowers) {
      return (
        <>
          <Row className="ml-3">
            <h5>{flowers.length} items in your cart</h5>
          </Row>
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
          <Col md={4} className="mb-5">
            <h5>Shipping option</h5>
            {displayShippingOption()}
          </Col>
          <Col md={4}>
            <h5>Payment method</h5>
            <div>.....</div>
            <div>.....</div>
          </Col>
          <Col>
            {cartItemReview()}
            {flowers &&
              flowers.map((flower) => {
                return (
                  <Card
                    key={flower.id}
                    className="mt-4 mr-4"
                    style={{ padding: "auto", width: "18rem" }}
                  >
                    <Row>
                      <Col className="pt-3 pb-3">
                        <Image
                          variant="top"
                          style={{ padding: 10, width: 100, height: 100 }}
                          src={
                            flower.flower_photos[0] &&
                            flower.flower_photos[0].url
                          }
                        />
                      </Col>
                      <Col className="pt-4 pb-3 mr-3 card-checkout">
                        <Card.Text>{flower.title}</Card.Text>
                        <Card.Text>Price: ${flower.price}</Card.Text>
                        <Card.Text>Qty: {flower.qty}</Card.Text>
                      </Col>
                    </Row>
                  </Card>
                );
              })}
            <Row style={{ justifyContent: "center", marginTop: 36 }}>
              <ProceedOrderBtn />
            </Row>
          </Col>
        </Row>
        <FavoriteList />
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    flowers: state.flowersInCartListReducer.flowers,
    address: state.addressReducer.address,
  };
};
ReviewOrder = connect(mapStateToProps)(ReviewOrder);
export default ReviewOrder;
