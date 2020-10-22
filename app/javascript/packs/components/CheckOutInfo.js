import React, { useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as a from "../actions";

function CheckOutInfo(props) {
  const { dispatch } = props;

  useEffect(() => {
    fetch("/api/cart_items")
      .then((resp) => resp.json())
      .then((jsonResp) => {
        const action = a.loadedFlowersInCart(jsonResp);
        dispatch(action);
      });
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>Order Subtotal:</Card.Text>
            <Card.Text>Estimated Tax:</Card.Text>
            <Card.Title>Estimated Subtotal:</Card.Title>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        {props.flowers &&
          props.flowers.map((flower) => {
            return (
              <Card key={flower.id} className="mt-4" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Price</Card.Text>
                  <Card.Text>Qty: {flower.qty}</Card.Text>
                  <Button variant="outline-secondary" className="mb-1">
                    Remove
                  </Button>
                </Card.Body>
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
