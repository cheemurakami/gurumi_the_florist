import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function FavoriteList() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch("/api/favorites")
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse);
        setFlowers(jsonifiedResponse);
      });
    return () => {};
  }, []);

  const removeHandler = (id) => {
    fetch(`/api/delete_favorite/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        console.log(jsonifiedResponse)
      })
  }


  
  return (
    <React.Fragment>
      <Container>
        <div>
            <h4 className="mt-4 mb-4">Your Favorites</h4>
        </div>
        <Row>
          {flowers &&
            flowers.map((flower) => {
              return (
                <Col lg={4} md={4} sm={6} key={flower.id} style={{ textAlign: "center" }}>
                  <Link to={`/flower/${flower.id}`}>
                    <Card
                      border="light"
                      style={{
                        width: "100%",
                        height: "500px",
                        marginBottom: "30px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        style={{
                          margin: "auto",
                          maxHeight: "300px",
                          maxWidth: "300px",
                        }}
                        src={
                          flower.flower_photos[0] && flower.flower_photos[0].url
                        }
                      />

                      <Card.Body>
                        <Card.Title>{flower.title}</Card.Title>
                        <Card.Text>${flower.price}</Card.Text>
                        <Button 
                          variant="outline-secondary"
                          className="mb-1 mr-1"
                          onClick={() => removeHandler(flower.id)}
                        >
                          Remove
                        </Button>
                        <Button 
                          variant="outline-secondary"
                          className="mb-1"
                        >
                          Move to Cart 
                        </Button>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              );
            })}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default FavoriteList;
