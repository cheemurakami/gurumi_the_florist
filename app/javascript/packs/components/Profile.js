import React from "react";
import { connect } from "react-redux";
import { Container, Image } from "react-bootstrap";
import Addresses from "./Addresses";
import userImage from "./images/userImage.png";

export const Profile = (props) => {
  const { currentUser } = props;
  const showUser = () => {
    if(currentUser){
      return (
        <h4>{currentUser.email}</h4>
      )
    }
  }
  return (
    <React.Fragment>
      <Container>
        <Image
          className="ml-3"
          src={userImage}
          roundedCircle
          width={150}
          height={150}
        />
        {showUser()}
        <Addresses />
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginStatusReducer.currentUser,
  };
};

export default connect(mapStateToProps)(Profile);
