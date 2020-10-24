import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import * as a from "../actions";
import { connect } from "react-redux";

function RemoveFromCartBtn(props) {
  const { dispatch } = props;
  const [comp] = useState(props);

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

  if (props.comp === "checkOutInfo") {
    return (
      <Card.Text
        className="remove-checkout"
        onClick={() => removeHandler(props.flowerId)}
      >
        Remove
      </Card.Text>
    );
  } else {
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
}

RemoveFromCartBtn = connect()(RemoveFromCartBtn);
export default RemoveFromCartBtn;
