import React, { useEffect } from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { connect } from "react-redux";
import * as a from "../actions";
import RemoveFromCartBtn from "./RemoveFromCartBtn";

function CheckOutInfo(props) {
  const { dispatch, address } = props;
  const deliveryFee = 3;

  useEffect(() => {
    fetch("/api/cart")
      .then((resp) => resp.json())
      .then((jsonResp) => {
        const action = a.loadedFlowersInCart(jsonResp);
        dispatch(action);
      });
    return () => {};
  }, []);

  const subTotal = () => {
    if (props.flowers) {
      const totalPrices = props.flowers.map((flower) => {
        return flower.total_price;
      });
      if (props.address) {
        return totalPrices.reduce((acc, cur) => {
          return acc + cur;
        });
      }
    }
  };

  const displayAddress = () => {
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
          <Card.Text>Ship to: {deliveryAddress}</Card.Text>
          <Card.Text>Delivery fee: ${deliveryFee}</Card.Text>
        </>
      );
    }
  };

  return (
    <React.Fragment>
      <Row>
        <Card style={{ width: "18rem" }} className="card-checkout">
          <Card.Body>
            <Card.Text>Delivery Date: </Card.Text>
            <Card.Text>Order Subtotal: ${subTotal()}</Card.Text>
            {displayAddress()}
            <Card.Text>Estimated Tax:</Card.Text>
            <Card.Text>
              Estimated Subtotal: ${subTotal() + deliveryFee}
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        {props.flowers &&
          props.flowers.map((flower) => {
            return (
              <Card
                key={flower.id}
                className="mt-4"
                style={{ padding: "auto", width: "18rem" }}
              >
                <Row>
                  <Col className="pt-3 pb-3">
                    <Image
                      variant="top"
                      style={{ padding: 10, width: 100, height: 100 }}
                      src={
                        flower.flower_photos[0] && flower.flower_photos[0].url
                      }
                    />
                  </Col>
                  <Col className="pt-4 pb-3 mr-3 card-checkout">
                    <Card.Text>{flower.title}</Card.Text>
                    <Card.Text>Price: ${flower.price}</Card.Text>
                    <Card.Text>Qty: {flower.qty}</Card.Text>
                    <RemoveFromCartBtn
                      flowerId={flower.id}
                      comp={"checkOutInfo"}
                    ></RemoveFromCartBtn>
                  </Col>
                </Row>
              </Card>
            );
          })}
      </Row>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    flowers: state.flowersInCartListReducer.flowers,
    address: state.addressReducer.address,
  };
};

CheckOutInfo = connect(mapStateToProps)(CheckOutInfo);
export default CheckOutInfo;
