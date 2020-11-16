import React from "react";
import { Button } from "react-bootstrap";

function ProceedOrder() {
  const proceedOrder = () => {
    console.log("proceed order");
  };
  return (
    <Button
      variant="outline-secondary"
      className="btn"
      onClick={() => proceedOrder()}
    >
      Proceed Order
    </Button>
  );
}

export default ProceedOrder;
