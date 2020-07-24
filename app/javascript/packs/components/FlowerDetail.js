import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams, useLocation } from "react-router-dom";

function FlowerDetail() {
  const { id } = useParams();
  const [flower, setFlower] = useState({});
  const location = useLocation();

  function deleteHandler(event) {
    event.preventDefault();
    fetch(`/api/flowers/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Success:", responseData);
      });
  }

  useEffect(() => {
    fetch(`/api/flowers/${id}`)
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        setFlower(jsonifiedResponse);
      });
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={7} style={{ textAlign: "center", padding: "auto" }}>
            <img
              className="mr-3"
              src="https://s7img.ftdi.com/is/image/ProvideCommerce/C12-4400D_LOL?$proflowers-tile-wide-sv-new$&qlt=80,0&resMode=trilin"
              alt="Generic placeholder"
            />
          </Col>
          <Col md={5} style={{ textAlign: "center", padding: "auto" }}>
            <h3>{flower.title}</h3>
            <p>{flower.description}</p>
            <p>Price: ${flower.price}</p>
            <Link to={`/editflowers/${id}`}>
              <Button className="btn" variant="outline-secondary">
                Edit this flower
              </Button>
            </Link>
            <Button variant="outline-secondary" onClick={deleteHandler}>
              Delete this flower
            </Button>
            <Link to="/">
              <Button variant="outline-secondary">Back to List</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default FlowerDetail;
