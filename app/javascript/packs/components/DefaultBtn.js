import React from "react";
import { Button } from "react-bootstrap";

function DefaultBtn(props) {
  const id = props.addressId;

  const setDefaultBtn = (id) => {
    console.log(id);
    fetch(`/api/addresses/${id}/set_default`, {
      method: "PUT",
    })
      .then((resp) => resp.json())
      .then((respData) => {
        console.log("Success:", respData);
      });
  };

  return (
    <React.Fragment>
      <span>
        <Button
          variant="outline-secondary"
          className="mb-1"
          onClick={() => setDefaultBtn(id)}
        >
          Set as default
        </Button>
      </span>
    </React.Fragment>
  );
}

export default DefaultBtn;
