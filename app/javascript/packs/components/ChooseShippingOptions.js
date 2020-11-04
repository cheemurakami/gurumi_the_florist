import React, { useState } from "react";
import { Container, Row, ButtonGroup, ToggleButton } from "react-bootstrap";

function ChooseShippingOptions() {
  const [radioValue, setRadioValue] = useState("pickup");
  const radios = [
    { name: "Pick up", value: "pickup" },
    { name: "Delivery", value: "delivery" },
  ];

  return (
    <React.Fragment>
      <h4>Choose your shipping options</h4>
      <hr />
      <Container>
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
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ChooseShippingOptions;
