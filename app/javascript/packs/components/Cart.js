import React, { useEffect, useState } from "react";
import FavoriteList from "./FavoriteList";
import { Container } from "react-bootstrap";

function Cart() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch("/api/cart")
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      //console.log(jsonifiedResponse)
      setFlowers(jsonifiedResponse);
    });
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <Container>
        <div>
          <h4 className="mt-4 mb-4">Your Cart</h4>
        </div>

        <div>
          {flowers.map((flower) => {
            return (
            <p key={flower.id}>{flower.title}</p>
            )
          })}
        </div>

        <FavoriteList />
      </Container>
    </React.Fragment>
  )
}

export default Cart
