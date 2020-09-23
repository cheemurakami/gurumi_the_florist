import React from "react";
import { Button } from "react-bootstrap";
import * as a from "../actions";
import { connect } from "react-redux";

function RemoveFromCartBtn(props) {
  const { dispatch } = props;
  const removeHandler = (id) => {
    fetch(`/api/cart_delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        const action = a.loadedFlowersInCart(jsonifiedResponse);
        dispatch(action);
        const actionTwo = a.deletedFlowerInCart(id);
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

RemoveFromCartBtn = connect()(RemoveFromCartBtn);
export default RemoveFromCartBtn;
