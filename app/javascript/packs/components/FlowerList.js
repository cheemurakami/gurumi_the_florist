import React, { useEffect, useState } from "react";
import {
  Nav,
  Accordion,
  Form,
  FormControl,
  Card,
  Container,
  Row,
  Col,
  Button,
  useAccordionToggle,
} from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import * as a from "../actions";
import AccordionCustom from "./AccordionCustom";


function FlowerList(props) {
  const history = useHistory();
  const location = useLocation();
  const { dispatch } = props;
  //console.log(location);

  const handleClick = (id) => {
    history.push(`/flower/${id}`);
  };

  //const [flowers, setFlowers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //This is what we want to happen when first loaded
  useEffect(() => {
    fetch("/api/flowers/")
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        // setFlowers(jsonifiedResponse);
        const action = a.loadedFlowers(jsonifiedResponse);
        dispatch(action);
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
      <Container>
        <Row>
          <Col md={3} style={{ textAlign: "left" }}>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Accordion defaultActiveKey="1">
                <AccordionCustom eventKey="0">
                  Occasion
                </AccordionCustom>
                
                  <Accordion.Collapse eventKey="0">
                    <Form>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Anniversary" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Birthday" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Romance" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Thank You" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Congratulations" />
                      </Form.Group>
                    </Form>
                  </Accordion.Collapse>
              </Accordion>

              <Accordion defaultActiveKey="1">
                <AccordionCustom eventKey="0">
                  Flower Type
                </AccordionCustom>
                  <Accordion.Collapse eventKey="0">
                    <Form>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Daisy" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Lily" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Rose" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Tulip" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Sunflower" />
                      </Form.Group>
                    </Form>
                  </Accordion.Collapse>
              </Accordion>

              <Accordion defaultActiveKey="1">
                <AccordionCustom eventKey="0">
                  Color
                </AccordionCustom>
                  <Accordion.Collapse eventKey="0">
                    <Form>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Red" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Yellow" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Pink" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Orange" />
                      </Form.Group>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="purple" />
                      </Form.Group>
                    </Form>
                  </Accordion.Collapse>
              </Accordion>
            </Nav>
          </Col>

          <Col md={9} style={{ textAlign: "center", margin: "auto" }}>
            {addButton()}
            <Row>
              {props.flowers &&
                props.flowers.map((flower) => (
                  <Col
                    lg={4}
                    md={4}
                    sm={6}
                    key={flower.id}
                    onClick={() => handleClick(flower.id)}
                  >
                    <Card
                      border="light"
                      style={{
                        width: "100%",
                        height: "380px",
                        marginBottom: "30px",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={
                          flower.flower_photos[0] && flower.flower_photos[0].url
                        }
                      />

                      <Card.Body>
                        <Card.Title>{flower.title}</Card.Title>
                        <Card.Text>${flower.price}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {loadingMessage()}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginStatusReducer.currentUser,
    flowers: state.flowerListReducer.flowers,
  };
};

FlowerList = connect(mapStateToProps)(FlowerList);
export default FlowerList;
