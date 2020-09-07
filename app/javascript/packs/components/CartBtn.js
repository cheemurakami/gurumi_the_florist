import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as a from "../actions";

function CartBtn(props) {
  const data = { flower_id: props.flowerId };
  const [showSigninMsg, setShowSigninMsg] = useState(false);
  const [inCart, setInCart] = useState(false);
  const { dispatch } = props;

  useEffect(() => {
    setInCart(props.isInCart);
    return () => {};
  }, [props.isInCart]);

  const addToCart = (id) => {
    if (!props.currentUser) {
      setShowSigninMsg(true);
    } else {
      fetch(`/api/cart/${id}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((jsonifiedResponse) => {
          console.log((jsonifiedResponse.flowers_in_cart))
          const action = a.loadedFlowersInCart(jsonifiedResponse.flowers_in_cart);
          dispatch(action);
          if (jsonifiedResponse) {
            setInCart(true);
          } else {
            setInCart(false);
          }
        });
    }
  };

  const cartBtnText = () => {
    if (inCart) {
      return "Added in cart";
    } else {
      return "Move to Cart";
    }
  };

  const showCartBtn = () => {
    return (
      <div className="btn-container">
        <Button
          variant="outline-secondary"
          className="mb-3"
          onClick={() => addToCart(props.flowerId)}
        >
          {cartBtnText()}
        </Button>
      </div>
    );
  };

  const msgOrBtn = () => {
    if (showSigninMsg) {
      return (
        <div style={{ textAlign: "center", margin: "auto" }}>
          <Link to="/users/log_in">
            <div className="btn-container">
              <Button variant="outline-secondary" className="btn mb-2">
                Please Sign In
              </Button>
            </div>
          </Link>
        </div>
      );
    } else {
      return showCartBtn();
    }
  };
  return msgOrBtn();
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.loginStatusReducer.currentUser,
  };
};

CartBtn = connect(mapStateToProps)(CartBtn);
export default CartBtn;
