import React from "react";
import { connect } from "react-redux";
import { Container, Image } from "react-bootstrap";
import Addresses from "./Addresses";
import userImage from "./images/userImage.png";

export const Profile = () => {
  return (
    <React.Fragment>
      <Container>
        <Image className="ml-3" src={userImage} roundedCircle  width={150}
            height={150}/>
        <div>
          <Addresses />
        </div>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Profile);
