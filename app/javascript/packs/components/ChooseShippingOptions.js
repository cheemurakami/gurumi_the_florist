import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import CheckOutInfo from "./CheckOutInfo";

function ChooseShippingOptions() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={8}>
            <h4>Choose your shipping options</h4>
            <hr />
            <ButtonGroup>
              <Row>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Text>Shipping to: </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <Card>
                  <Card.Body>
                    <Card.Text>Store pickup: </Card.Text>
                  </Card.Body>
                </Card>
              </Row>
            </ButtonGroup>
          </Col>
          <Col md={4}>
            <CheckOutInfo />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ChooseShippingOptions;
