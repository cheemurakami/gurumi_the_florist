import React, { useEffect, useState } from "react";
import FavoriteList from "./FavoriteList";

function Cart() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch("/api/cart")
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      console.log(jsonifiedResponse)
      setFlowers(jsonifiedResponse);
    });
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <div>
        cart
      </div>
      <FavoriteList />
    </React.Fragment>
  )
}

export default Cart
