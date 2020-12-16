import React from "react";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";

export const SelectDate = () => {

  return (
    <React.Fragment>
      <Row>
        <h4>Choose your date</h4>
        <hr />
      </Row>

    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(SelectDate);
