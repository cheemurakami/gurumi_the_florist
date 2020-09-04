import React, { useEffect, useState } from "react";
import FavoriteList from "./FavoriteList";
import { Container, Button, Row, Col } from "react-bootstrap";

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

        <Row>
          {flowers && flowers.map((flower) => {
            return (
            <Col>
                  <p key={flower.id}>{flower.title}</p>
            </Col>
            // <p>{flower.price}</p>
                  // <Button 
                  //   variant="outline-secondary"
                  //   className="mb-1 mr-1"  
                  //   onClick={() => removeHandler(flower.id)}
                  //   >delete
                  //   </Button>
                  )
 
          })}
        </Row>

        <FavoriteList />
      </Container>
    </React.Fragment>
  )
}

export default Cart
