import React from 'react'
import { Button } from "react-bootstrap";

function CartBtn(props) {
  const data = { flower_id: props.flowerId };

  const addToCart = (id) => {
    fetch(`/api/cart/${id}`, {
      method: "POST",
      body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
    })
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse);
      });
  };

  return (
    <Button variant="outline-secondary" className="mb-1" onClick={() => addToCart(props.flower_id)}>
    Move to Cart
  </Button>
  )
}

export default CartBtn
