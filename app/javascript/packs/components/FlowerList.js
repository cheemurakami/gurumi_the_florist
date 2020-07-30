import React, { useEffect, useState } from "react";
import gurumiHeader from "./images/gurumi_header.png";
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
  Spinner,
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
      return (
        <Spinner className='mx-auto' animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
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

  const changeHandler = (event) => {
    let checked = event.target.checked
    if (checked){
      fetch(`/api/flowers?search=${event.target.id}`)
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        const action = a.loadedFlowers(jsonifiedResponse);
        dispatch(action);
      })
    } else {
      fetch(`/api/flowers`)
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        const action = a.loadedFlowers(jsonifiedResponse);
        dispatch(action);
      })
    }
  }


  const occasionNames = ["Anniversary", "Birthday", "Romance", "Thank You", "Congratulations"]
  const flowerTypes = ["Daisy", "Lily", "Rose", "Tulip", "Sunflower"]
  const colors = ["Red", "Pink", "Yellow", "Puple", "Orange"]

  return (
    <React.Fragment>
      <Container fluid>
        
        <div className="header">
          <img
            src={gurumiHeader}
            width="100%"
            alt="header"
            className="headerImg"
          />
        </div>
        <Row>
          <Col md={3} style={{ textAlign: "left" }}>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Accordion defaultActiveKey="0">
                <AccordionCustom eventKey="0">
                  Occasion
                </AccordionCustom>
                
                  <Accordion.Collapse eventKey="0">
                    <Form>
                      {occasionNames.map((name) => {
                        return (
                          <Form.Group controlId={name} key={name}>
                            <Form.Check type="checkbox" label={name} onChange={changeHandler}/>
                          </Form.Group>
                        )
                      })}
                    </Form>
                  </Accordion.Collapse>
              </Accordion>

              <Accordion defaultActiveKey="0">
                <AccordionCustom eventKey="0">
                  Flower Type
                </AccordionCustom>
                  <Accordion.Collapse eventKey="0">
                    <Form>
                      {flowerTypes.map((type) => {
                        return(
                          <Form.Group controlId={type} key={type}>
                            <Form.Check type="checkbox" label={type} onClick={changeHandler} />
                          </Form.Group>
                        )
                      })}
                    </Form>
                  </Accordion.Collapse>
              </Accordion>

              <Accordion defaultActiveKey="0">
                <AccordionCustom eventKey="0">
                  Color
                </AccordionCustom>
                  <Accordion.Collapse eventKey="0">
                    <Form>
                      {colors.map((color) => {
                        return (
                          <Form.Group controlId={color} key={color}>
                            <Form.Check type="checkbox" label={color} onClick={changeHandler}/>
                          </Form.Group>
                        )
                      })}
                    </Form>
                  </Accordion.Collapse>
              </Accordion>
            </Nav>
          </Col>

          <Col md={9} style={{ textAlign: "center" }}>

            {addButton()}
            <Row>
              {loadingMessage()}
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
