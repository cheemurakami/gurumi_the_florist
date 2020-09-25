import React, { useState } from "react";
import { Nav, Accordion, Form } from "react-bootstrap";
import AccordionCustom from "./AccordionCustom";
import * as a from "../actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";

function CheckBoxNav(props) {
  const { dispatch } = props;

  const [searchWords, setSearchWords] = useState({});

  const occasions = [
    "Anniversary",
    "Birthday",
    "Romance",
    "Thank You",
    "Congratulations",
  ];
  const flowerTypes = ["Daisy", "Lily", "Rose", "Tulip", "Sunflower"];
  const colors = ["Red", "Pink", "Yellow", "Puple", "Orange"];

  const changeHandler = (event) => {
    let checked = event.target.checked;
    let word = event.target.id;
    if (checked) {
      const newSearchWords = Object.assign({}, searchWords, { [word]: null });
      let newSearchWordsArr = Object.keys(newSearchWords);
      let newSearchWordsStr = newSearchWordsArr.join(",");
      console.log(newSearchWordsStr);

      fetch(`/api/flowers?search=${newSearchWordsStr}`)
        .then((response) => response.json())
        .then((jsonifiedResponse) => {
          const action = a.loadedFlowers(jsonifiedResponse);
          dispatch(action);
        });
      setSearchWords(newSearchWords);
    } else {
      delete searchWords[word];
      fetch(`/api/flowers`)
        .then((response) => response.json())
        .then((jsonifiedResponse) => {
          const action = a.loadedFlowers(jsonifiedResponse);
          dispatch(action);
        });
      setSearchWords(searchWords);
    }
  };

  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Accordion defaultActiveKey="0">
        <AccordionCustom
          eventKey="0"
          accordionTitle="Occasion"
        ></AccordionCustom>
        <Accordion.Collapse eventKey="0">
          <Form>
            {occasions.map((name) => {
              return (
                <Form.Group controlId={name} key={name}>
                  <Form.Check
                    type="checkbox"
                    label={name}
                    onChange={changeHandler}
                  />
                </Form.Group>
              );
            })}
          </Form>
        </Accordion.Collapse>
      </Accordion>

      <Accordion defaultActiveKey="0">
        <AccordionCustom eventKey="0" accordionTitle="Flower Type">
          <FontAwesomeIcon icon={faAngleDoubleDown} className="icon" />
        </AccordionCustom>
        <Accordion.Collapse eventKey="0">
          <Form>
            {flowerTypes.map((type) => {
              return (
                <Form.Group controlId={type} key={type}>
                  <Form.Check
                    type="checkbox"
                    label={type}
                    onClick={changeHandler}
                  />
                </Form.Group>
              );
            })}
          </Form>
        </Accordion.Collapse>
      </Accordion>

      <Accordion defaultActiveKey="0">
        <AccordionCustom eventKey="0" accordionTitle="Color">
          <FontAwesomeIcon icon={faAngleDoubleDown} className="icon" />
        </AccordionCustom>
        <Accordion.Collapse eventKey="0">
          <Form>
            {colors.map((color) => {
              return (
                <Form.Group controlId={color} key={color}>
                  <Form.Check
                    type="checkbox"
                    label={color}
                    onClick={changeHandler}
                  />
                </Form.Group>
              );
            })}
          </Form>
        </Accordion.Collapse>
      </Accordion>
    </Nav>
  );
}

CheckBoxNav = connect()(CheckBoxNav);
export default CheckBoxNav;
