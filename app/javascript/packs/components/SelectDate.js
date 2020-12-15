import React from "react";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";

export const SelectDate = () => {
  return (
    <div>
      <h5>Choose your date</h5>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(SelectDate);
