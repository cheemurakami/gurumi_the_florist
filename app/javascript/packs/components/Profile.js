import React from "react";
import { connect } from "react-redux";
import Addresses from "./Addresses";

export const Profile = () => {
  return (
    <React.Fragment>
      <div>Profile</div>
      <div>
        <Addresses />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Profile);
