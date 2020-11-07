import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as a from "../actions";

function SelectAddressBtn(props) {
  const { dispatch, address } = props;

  const selectedAddress = () => {
    const action = a.selectedAddressState(address);
    dispatch(action);
  };

  return (
    <React.Fragment>
      <Link to={"/payments"}>
        <Button
          variant="outline-secondary"
          className="btn"
          onClick={() => selectedAddress()}
        >
          <FontAwesomeIcon icon={faTruck} className="icon" />{" "}
          <span className="delivery-btn">Select</span>
        </Button>
      </Link>
    </React.Fragment>
  );
}
SelectAddressBtn = connect()(SelectAddressBtn);
export default SelectAddressBtn;
