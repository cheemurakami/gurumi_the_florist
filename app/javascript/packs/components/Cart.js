import React, { useEffect, useState } from "react";
import FavoriteList from "./FavoriteList";
import { Container, Image, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cart() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch("/api/cart")
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        setFlowers(jsonifiedResponse);
        console.log(jsonifiedResponse);
      });
    return () => {};
  }, []);

  const removeHandler = (id) => {
    fetch(`/cart_delete/${id}`)
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse);
      });
    window.location.reload(false);
  };
  return (
    <React.Fragment>
      <Container>
        <div>
          <h4 className="mt-4 mb-4">Your Cart</h4>
        </div>

        {flowers &&
          flowers.map((flower) => {
            return (
              <Row key={flower.id} style={{ marginBottom: "15px" }}>
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

export default Cart;
