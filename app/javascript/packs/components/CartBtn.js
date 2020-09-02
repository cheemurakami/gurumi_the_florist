import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function CartBtn(props) {
  const data = { flower_id: props.flowerId };
  const [showSigninMsg, setShowSigninMsg] = useState(false);

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
          console.log(jsonifiedResponse);
        });
    }
  };

  const showCartBtn = () => {
    return (
      <div className="btn-container">
        <Button
          variant="outline-secondary"
          className="mb-3"
          onClick={() => addToCart(props.flower_id)}
        >
          Move to Cart
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
              <Button variant="outline-secondary" className="btn mb-3">
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
