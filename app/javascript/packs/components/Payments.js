import React from 'react'
import Store from './Store.js'
import { Container, Row, Col } from "react-bootstrap";
import CheckOutInfo from "./CheckOutInfo";

function Payments() {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={8}>
           <Store />
          </Col>
          <Col md={4}>
            <CheckOutInfo />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Payments
