import React, { useEffect } from "react";
import FavoriteList from "./FavoriteList";
import RemoveFromCartBtn from "./RemoveFromCartBtn";
import { Container, Image, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as a from "../actions";
import { connect } from "react-redux";

function Cart(props) {
  const { dispatch } = props;

  useEffect(() => {
    fetch("/api/cart")
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        const action = a.loadedFlowersInCart(jsonifiedResponse);
        dispatch(action);
      });
    return () => {};
  }, []);

  const itemCounter = () => {
    if (props.flowers && props.flowers.length > 0) {
      let qtyArray =
        props.flowers &&
        props.flowers.map((flower) => {
          return flower.qty;
        });
      let totalQty = qtyArray.reduce((acc, value) => {
        return acc + value;
      });
      if (totalQty == 1) {
        return <span>{totalQty} item</span>;
      } else {
        return <span>{totalQty} items</span>;
      }
    }
  };

  const totalPrice = () => {
    if (props.flowers && props.flowers.length > 0) {
      let priceArray = props.flowers.map((flower) => {
        return flower.total_price;
      });
      let totalPrice = priceArray.reduce((acc, value) => {
        return acc + value;
      });
      return <span>{totalPrice}</span>;
    }
  };

  const qtyHandler = (id, qty) => {
    const qtyNum = parseInt(qty);
    const data = { qty: qtyNum };
    fetch(`/api/cart_update/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        const action = a.loadedFlowersInCart(jsonifiedResponse);
        dispatch(action);
      });
  };

  const showCartItems = () => {
    fetch("/api/cart")
      .then((resp) => resp.json())
      .then((jsonResp) => {
        const action = a.loadedFlowersInCart(jsonResp);
        dispatch(action);
      });
  };

  const cartDetail = () => {
    if (props.flowers && props.flowers.length > 0) {
      return (
        <div>
          {props.flowers.map((flower) => {
            return (
              <Row
                className="cart-wrapper"
                key={flower.id}
                style={{ marginBottom: "15px" }}
              >
                <Col lg={3}>
                  <Link to={`/flower/${flower.id}`}>
                    <Image
                      src={flower.flower_photos && flower.flower_photos[0].url}
                      style={{
                        width: "150px",
                        height: "150px",
                      }}
                    />
                  </Link>
                </Col>
                <Col lg={6}>
                  <Row>
                    <h5 key={flower.id}>{flower.title}</h5>
                  </Row>
                  <Row>
                    <Col>
                      <RemoveFromCartBtn
                        flowerId={flower.id}
                      ></RemoveFromCartBtn>
                    </Col>
                    <Col>
                      <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                          <Form.Label>Select Qty</Form.Label>
                          <Form.Control
                            as="select"
                            value={flower.qty}
                            custom
                            onChange={(e) =>
                              qtyHandler(flower.id, e.target.value)
                            }
                          >
                            <option hidden>Qty</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </Form.Control>
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                </Col>
                <Col lg={3}>
                  <h5>${flower.price}</h5>
                </Col>
              </Row>
            );
          })}
          <Row>
            <Col md={{ span: 4, offset: 4 }} style={{ textAlign: "right" }}>
              <h5>
                Subtotal: {itemCounter()} ${totalPrice()}
              </h5>
            </Col>
            <Col md={4} style={{ textAlign: "right" }}>
              <Link to="/shipping_options">
                <Button
                  variant="outline-secondary"
                  className="btn"
                  onClick={() => {
                    showCartItems();
                  }}
                >
                  Proceed to checkout
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div>
          <h5 className="mt-4 mb-4 ml-4">Your cart is empty</h5>
          <p className="ml-4">
            Check Your Favorites or browse <Link to="/">flowers</Link>
          </p>
          <hr></hr>
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      <Container>
        <div>
          <h4 className="mt-4 mb-4">Your Cart</h4>
        </div>

        {cartDetail()}

        <FavoriteList />
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    flowers: state.flowersInCartListReducer.flowers,
  };
};

Cart = connect(mapStateToProps)(Cart);
export default Cart;
