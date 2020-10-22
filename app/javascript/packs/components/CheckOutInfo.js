import React from "react";
import { Row, Card, Button } from "react-bootstrap";

function CheckOutInfo() {
  return (
    <React.Fragment>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>Order Subtotal:</Card.Text>
            <Card.Text>Estimated Tax:</Card.Text>
            <Card.Title>Estimated Subtotal:</Card.Title>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card className="mt-4" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Price</Card.Text>
            <Card.Text>Qty</Card.Text>
            <Button variant="outline-secondary" className="mb-1">
              Remove
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </React.Fragment>
  );
}

export default CheckOutInfo;
