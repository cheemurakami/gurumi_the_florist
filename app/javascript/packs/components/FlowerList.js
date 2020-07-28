import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

function FlowerList(props) {
  const history = useHistory();
  const location = useLocation();
  //console.log(location);

  const handleClick = (id) => {
    //console.log("clicked");
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

  const addButton = () => {
    if (props.currentUser && props.currentUser.admin) {
      return (
        <React.Fragment>
          <div className="text-center btn-container">
            <Link to="/newflowers">
              <Button variant="outline-secondary">
                Add a new flower to the list
              </Button>
            </Link>
          </div>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      {loadingMessage()}

      {addButton()}

      <Container>
        <Row>
          {flowers.map((flower) => (
            <Col
              lg={3}
              md={4}
              sm={6}
              key={flower.id}
              onClick={() => handleClick(flower.id)}
            >
              <Card
                style={{ width: "100%", height: "380px", marginBottom: "30px" }}
              >
                <Card.Img
                  variant="top"
                  src={flower.flower_photos[0]}
                />

                <Card.Body>
                  <Card.Title>{flower.title}</Card.Title>
                  <Card.Text>${flower.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginStatusReducer.currentUser,
  };
};

FlowerList = connect(mapStateToProps)(FlowerList);
export default FlowerList;
