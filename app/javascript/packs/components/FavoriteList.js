import React, { useEffect } from "react";
import { CardDeck, Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartBtn from "./CartBtn";
import { connect } from "react-redux";
import * as a from "../actions";

function FavoriteList(props) {
  const { dispatch } = props;

  useEffect(() => {
    fetch("/api/favorites")
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        const action = a.loadedFavFlowers(jsonifiedResponse);
        dispatch(action);
      });
    return () => {};
  }, []);

  const removeHandler = (id) => {
    fetch(`/api/delete_favorite/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        const action = a.loadedFavFlowers(jsonifiedResponse);
        dispatch(action);
      });
  };

  return (
    <React.Fragment>
      <Container>
        <div>
          <h4 className="mt-4 mb-4">Your Favorites</h4>
        </div>
        <Row>
          <CardDeck className="mr-5">
            {props.flowers &&
              props.flowers.map((flower) => {
                return (
                  <Col 
                    lg={3}
                    md={3}
                    sm={6}
                    key={flower.id}
                    style={{ textAlign: "center" }}
                  >
                    <Card
                      border="light"
                      style={{
                        width: "100%",
                        minHeight: "500px",
                        maxHeight: "500px",
                        marginBottom: "30px",
                      }}
                    >
                      <Link to={`/flower/${flower.id}`}>
                        <Card.Img
                          variant="top"
                          style={{
                            margin: "auto",
                            maxHeight: "300px",
                            maxWidth: "300px",
                          }}
                          src={
                            flower.flower_photos[0] &&
                            flower.flower_photos[0].url
                          }
                        />
                      </Link>
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
                        <CartBtn
                          flowerId={flower.id}
                          isInCart={flower.is_in_cart}
                        ></CartBtn>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </CardDeck>
        </Row>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    flowers: state.favFlowerListReducer.flowers,
  };
};
FavoriteList = connect(mapStateToProps)(FavoriteList);
export default FavoriteList;
