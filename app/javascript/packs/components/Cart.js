import React, { useEffect, useState } from "react";
import FavoriteList from "./FavoriteList";
import { Container, Image, Row, Col } from "react-bootstrap";

function Cart() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch("/api/cart")
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      setFlowers(jsonifiedResponse);
      console.log(jsonifiedResponse)
    });
    return () => {};
  }, []);

  const removeHandler = (id) => {
    fetch(`/cart_delete/${id}`)
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      console.log(jsonifiedResponse)
    });
    window.location.reload(false);
  }
  return (
    <React.Fragment>
      <Container>
        <div>
          <h4 className="mt-4 mb-4">Your Cart</h4>
        </div>

          {flowers && flowers.map((flower) => {
            return (
              <Row key={flower.id}>  
                  <Col lg={3}>
                      <Image 
                        src={flower.flower_photos && flower.flower_photos[0].url}
                        style={{
                          width: "150px",
                          height: "150px",
                        }}
                      />
                  </Col>
                  <Col lg={6}>
                        <p key={flower.id}>{flower.title}</p>
                  </Col>
                  <Col lg={3}>
                    <p>{flower.price}</p>
                  </Col>     
              </Row>
            )
          })}

        <FavoriteList />
      </Container>
    </React.Fragment>
  )
}

export default Cart
