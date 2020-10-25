import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

function SelectAddressBtn(props) {
  const { addressId } = props;
  const selectedAddress = () => {
    console.log(addressId);
  };

  return (
    <React.Fragment>
      <FontAwesomeIcon icon={faTruck} className="icon" onClick={() => selectedAddress()}/>
     
    </React.Fragment>
  );
}

export default SelectAddressBtn;
