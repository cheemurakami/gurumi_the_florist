import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as a from "../actions";

function DefaultBtn(props) {
  const id = props.addressId;
  const { dispatch } = props;

  const changedAddressesStateBtn = (id) => {
    fetch(`/api/addresses/${id}/set_default`, {
      method: "PUT",
    })
      .then((resp) => resp.json())
      .then((respData) => {
        const action = a.changedAddressesState(respData);
        dispatch(action);
      });
  };

  return (
    <React.Fragment>
      <span>
        <Button
          variant="outline-secondary"
          className="mb-1"
          onClick={() => changedAddressesStateBtn(id)}
        >
          Set as default
        </Button>
      </span>
    </React.Fragment>
  );
}

DefaultBtn = connect()(DefaultBtn);
export default DefaultBtn;
