import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as a from "../actions";
import DefaultBtn from "./DefaultBtn";

function Addresses(props) {
  const [addresses, setAddresses] = useState([]);
  const { dispatch } = props;

  useEffect(() => {
    fetch("/api/addresses")
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        setAddresses(jsonifiedResponse);
      });
  }, []);

  const showMessage = () => {
    if (props.showMsg) {
      setTimeout(() => {
        const action = a.resetMessage();
        dispatch(action);
      }, 3000);

      return (
        <div className="address-msg">
          <h5>{props.showMsg}</h5>
        </div>
      );
    }
  };

  const deleteHandler = (id) => {
    fetch(`/api/addresses/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((respData) => {
        setAddresses(respData);
        const action = a.deletedAddress();
        dispatch(action);
      });
  };

  const ifDefault = (boolean) => {
    if (boolean) {
      return (
        <React.Fragment>
          <p>Default</p>
          <hr />
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <Container>
        <h4>Your Addresses</h4>
        <Row>{showMessage()}</Row>
        <Row className="mt-3">
          <Col xs={12} sm={12} md={3} lg={3}>
            <Link to={"/newaddress"}>
              <div className="address-add-btn">
                <p>Add Address</p>
              </div>
            </Link>
          </Col>
          {addresses
            .sort((a, b) => (a.default < b.default ? 1 : -1))
            .map((address) => {
              return (
                <Col xs={12} sm={12} md={4} lg={3} key={address.id}>
                  <div className="address">
                    {ifDefault(address.default)}
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
                    <p>Phone: {address.phone}</p>
                    <p>
                      <span>
                        <Link to={`/editaddress/${address.id}`}>
                          <Button variant="outline-secondary" className="mb-1">
                            Edit
                          </Button>
                        </Link>
                      </span>{" "}
                      <span onClick={() => deleteHandler(address.id)}>
                        <Button variant="outline-secondary" className="mb-1">
                          Remove
                        </Button>
                      </span>
                      {!address.default && (
                        <DefaultBtn 
                          addressId={address.id}
                        ></DefaultBtn>
                      )}
                    </p>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    showMsg: state.addressListReducer.showMsg,
  };
};
Addresses = connect(mapStateToProps)(Addresses);
export default Addresses;
