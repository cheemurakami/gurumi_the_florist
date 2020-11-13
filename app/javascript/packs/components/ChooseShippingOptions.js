import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { Redirect } from "react-router-dom";
import CheckOutInfo from "./CheckOutInfo";
import SelectAddress from "./SelectAddress";

function ChooseShippingOptions() {
  const [radioValue, setRadioValue] = useState("");
  const radios = [
    { name: "Pick up", value: "pickup" },
    { name: "Delivery", value: "delivery" },
  ];

  const showSelectAddress = () => {
    if (radioValue === "delivery") {
      return <SelectAddress />;
    } else if (radioValue === "pickup") {
      return <Redirect to="/payments" />;
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={9}>
            <h4>Choose your shipping options</h4>
            <hr />
            <Row className="mb-5 mt-5 pl-5">
              <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    type="radio"
                    variant="secondary"
                    name={radio.name}
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    style={{ paddingLeft: 50, paddingRight: 50 }}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              {showSelectAddress()}
            </Row>
          </Col>
          <Col md={3}>
            <CheckOutInfo />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ChooseShippingOptions;
