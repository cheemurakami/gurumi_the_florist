import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
          <Col md={7}>
            <img
              className="mr-3"
              src="https://s7img.ftdi.com/is/image/ProvideCommerce/C12-4400D_LOL?$proflowers-tile-wide-sv-new$&qlt=80,0&resMode=trilin"
              alt="Generic placeholder"
            />
          </Col>
          <Col md={5}>
            <h5>{flower.title}</h5>
            <p>{flower.description}</p>
            <p>Price: ${flower.price}</p>
          </Col>
        </Row>
      </Container>

      <Link to={`/editflowers/${id}`}>
        <button>Edit this flower</button>
      </Link>
      <button onClick={deleteHandler}>Delete this flower</button>
      <Link to="/">
        <button>Back to List</button>
      </Link>
    </React.Fragment>
  );
}

export default FlowerDetail;
