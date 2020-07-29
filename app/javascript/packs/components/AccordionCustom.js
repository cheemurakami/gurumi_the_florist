import React from 'react'
import { useAccordionToggle } from "react-bootstrap";

  function AccordionCustom({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
    return (
      <p style={{cursor: "pointer"}}
        onClick={decoratedOnClick}
      >
        {children}
      </p>
    );
  }

export default AccordionCustom
