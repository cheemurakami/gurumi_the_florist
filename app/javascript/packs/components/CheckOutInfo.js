import React, { useEffect } from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { connect } from "react-redux";
import * as a from "../actions";
import RemoveFromCartBtn from "./RemoveFromCartBtn";

function CheckOutInfo(props) {
  const { dispatch } = props;

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
      return totalPrices.reduce((acc, cur) => {
        return acc + cur;
      });
    }
  };

  return (
    <React.Fragment>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>Order Subtotal: ${subTotal()}</Card.Text>
            <Card.Text>Estimated Tax:</Card.Text>
            <Card.Text>Estimated Subtotal: ${subTotal()}</Card.Text>
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
                  <Col className="pt-4 pb-3 card-checkout">
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
  };
};

CheckOutInfo = connect(mapStateToProps)(CheckOutInfo);
export default CheckOutInfo;
