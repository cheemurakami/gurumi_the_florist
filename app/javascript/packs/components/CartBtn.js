import React from 'react'
import { Button } from "react-bootstrap";

function CartBtn(props) {
  const data = { flower_id: props.flowerId };
  //const [alreadyInCart, setAlreadyInCart] = useState(false);
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
        console.log(jsonifiedResponse)
      });
  };


  const showCartBtn = () => {
    return(
      <Button variant="outline-secondary" className="mb-1" onClick={() => addToCart(props.flower_id)}>
        Move to Cart
      </Button>
    )
  }

  return (
    showCartBtn()
  )
}

export default CartBtn
