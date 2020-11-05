import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import * as a from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SelectAddressBtn from "./SelectAddressBtn";

function SelectAddress(props) {
  const { dispatch } = props;

  useEffect(() => {
    fetch("/api/addresses")
      .then((resp) => resp.json())
      .then((jsonResp) => {
        const action = a.changedAddressesState(jsonResp);
        dispatch(action);
      });
    return () => {};
  }, []);

  return (
    <div>
      <Row className="mt-5">
        <h4>Select a shipping address</h4>
        <hr />
        <Row className="mt-3">
          <Col xs={12} sm={12} md={3} lg={3}>
            <Link to={"/newaddress"}>
              <div className="address-add-btn">
                <p>Add Address</p>
              </div>
            </Link>
          </Col>
          {props.addresses &&
            props.addresses
              .sort((a, b) => (a.default < b.default ? 1 : -1))
              .map((address) => {
                return (
                  <Col xs={12} sm={12} md={4} lg={4} key={address.id}>
                    <div className="address">
                      <p>
                        {address.first_name} {address.last_name}
                      </p>
                      <p>
                        <span>{address.street} </span>
                        {address.apt_ste_unit && (
                          <span>#{address.apt_ste_unit}</span>
                        )}
                      </p>
                      <p>
                        {address.city}, {address.state} {address.zip}
                      </p>
                      <p>
                        <span>
                          <SelectAddressBtn
                            addressId={address.id}
                          ></SelectAddressBtn>
                        </span>
                      </p>
                    </div>
                  </Col>
                );
              })}
        </Row>
      </Row>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    showMsg: state.addressListReducer.showMsg,
    addresses: state.addressListReducer.addresses,
  };
};
SelectAddress = connect(mapStateToProps)(SelectAddress);
export default SelectAddress;
