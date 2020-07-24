import React, { useEffect, useState } from "react";
import { Media, Card, Container, Row, Col } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";

function FlowerList() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const handleClick = (id) => {
    console.log("clicked");
    history.push(`/flower/${id}`);
  };

  const [flowers, setFlowers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //This is what we want to happen when first loaded
  useEffect(() => {
    fetch("/api/flowers/")
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        setFlowers(jsonifiedResponse);
        setIsLoading(false);
      });
    // get all flowers
    // then set all flowers to my state
    return () => {};
  }, [location]);

  const loadingMessage = () => {
    if (isLoading) {
      return <p>Loading</p>;
    }
  };

  return (
    <React.Fragment>

        {loadingMessage()}

      <Container>
        <Row>
        {flowers.map((flower) => (
            <Col lg={3} md={4} sm={6} key={flower.id} onClick={() => handleClick(flower.id)}>
              <Card style={{ width: "100%", height: "380px", marginBottom: "30px"}}>
                <Card.Img
                  variant="top"
                  src="https://s7img.ftdi.com/is/image/ProvideCommerce/C12-4400D_LOL?$proflowers-tile-wide-sv-new$&qlt=80,0&resMode=trilin"
                />

                <Card.Body>
                  <Card.Title>
                    {flower.title}
                  </Card.Title>
                    <Card.Text>${flower.price}</Card.Text>
                </Card.Body>

              </Card>
            </Col>
        ))}
        </Row>
      </Container>

      <Link to="/newflowers">
        <button>Add a new flower to the list</button>
      </Link>
    </React.Fragment>
  );
}

export default FlowerList;
