import React, { useState } from "react";
import { useAccordionToggle } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown, faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons";

function AccordionCustom({ eventKey, accordionTitle }) {
  const [icon, setIcon] = useState(faAngleDoubleUp);
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    if (icon == faAngleDoubleUp) {
      setIcon(faAngleDoubleDown);
    } else {
      setIcon(faAngleDoubleUp);
    }
  });
  return (
    <p style={{ cursor: "pointer" }} onClick={decoratedOnClick}>
      {accordionTitle} <FontAwesomeIcon icon={icon} className="icon" />
    </p>
  );
}

export default AccordionCustom;
