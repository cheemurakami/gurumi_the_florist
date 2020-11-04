import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SelectAddressBtn(props) {
  const { addressId } = props;
  const selectedAddress = () => {
    console.log(addressId);
  };

  return (
    <React.Fragment>
      <Link to={"/payments"}>
        <Button
          variant="outline-secondary"
          className="btn"
          onClick={() => selectedAddress()}
        >
          <FontAwesomeIcon icon={faTruck} className="icon" /> <span className="delivery-btn">Select</span>
        </Button>
      </Link>
    </React.Fragment>
  );
}

export default SelectAddressBtn;
