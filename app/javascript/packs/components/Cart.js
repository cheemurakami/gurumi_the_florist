import React, { useEffect, useState } from "react";
import FavoriteList from "./FavoriteList";
import { Container, Image, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as a from "../actions";
import { connect } from "react-redux";


function Cart(props) {
  const [flowers, setFlowers] = useState([]);
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

  const removeHandler = (id) => {
    fetch(`/api/cart_delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        setFlowers(jsonifiedResponse);
      });
  };

  return (
    <React.Fragment>
      <Container>
        <div>
          <h4 className="mt-4 mb-4">Your Cart</h4>
        </div>

        {props.flowers &&
          props.flowers.map((flower) => {
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
                      <Button
                        onClick={() => removeHandler(flower.id)}
                        className="btn"
                        variant="outline-secondary"
                        className="mb-3"
                      >
                        Remove
                      </Button>
                    </Col>
                    <Col>
                      <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                          <Form.Control as="select" custom>
                            <option>Qty 1</option>
                            <option>Qty 2</option>
                            <option>Qty 3</option>
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

        <FavoriteList />
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    flowers: state.flowersInCartListReducer.flowers
  }
}

Cart = connect(mapStateToProps)(Cart);
export default Cart;
