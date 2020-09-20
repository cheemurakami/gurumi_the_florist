import React from "react";
import { Button } from "react-bootstrap";
import * as a from "../actions";
import { connect } from "react-redux";

function RemoveFromCart(props) {
  const { dispatch } = props;
  const removeHandler = (id) => {
    fetch(`/api/cart_delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        console.log("REMOVED FROM CART", jsonifiedResponse);
        const action = a.loadedFlowersInCart(jsonifiedResponse);
        dispatch(action);
        const actionTwo = a.deletedFlowerInCart();
        dispatch(actionTwo);
      });
  };
  return (
    <div className="btn-container">
      <Button
        variant="outline-secondary"
        className="mb-3"
        onClick={() => removeHandler(props.flowerId)}
      >
        {" "}
        Remove from Cart
      </Button>
    </div>
  );
}

RemoveFromCart = connect()(RemoveFromCart);
export default RemoveFromCart;
