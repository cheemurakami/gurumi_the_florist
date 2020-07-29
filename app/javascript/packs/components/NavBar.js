import React from "react";
import { Nav, Navbar, Form, FormControl, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import gurumiIcon from "./images/gurumi_icon.png";
import gurumiHeader from "./images/gurumi_header.png";
import gurumiSignInIcon from "./images/gurumi_signin_icon.png";
import gurumiSignOutIcon from "./images/gurumi_signout_icon.png";
import { connect } from "react-redux";
import * as a from "../actions";

function NavBar(props) {

  const { dispatch } = props;
  
  const signOut = () => {
    fetch("/users/sign_out", {
      method: "DELETE",
    }).then(() => {
      const action = a.checkedLoginStatus();
      dispatch(action);
    });
  };

  const searchHandler = (event) => {
    event.preventDefault();
 
    fetch(`/api/flowers?search=${event.target.search.value}`)
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      const action = a.loadedFlowers(jsonifiedResponse);
      dispatch(action);
    })
  }

  const userLoginStatus = () => {
    if (props.currentUser && props.currentUser.email) {
      return (
        <React.Fragment>
          <Nav.Item>
            <Nav.Link className="link" onClick={signOut}>
              Signed in as {props.currentUser.email}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link" onClick={signOut}>
              <img src={gurumiSignOutIcon} alt="gutumiSignoutIcon" />
              Sign Out
            </Nav.Link>
          </Nav.Item>
        </React.Fragment>
      );
    } else {
      return (
        <Nav.Item>
          <Nav.Link className="link" as={Link} to="/users/log_in">
            <img src={gurumiSignInIcon} alt="gutumiAccIcon" />
            {props.currentUser && props.currentUser.email}
            Sign In
          </Nav.Link>
        </Nav.Item>
      );
    }
  };
  return (
    <>
      <Navbar bg="light" variant="dark">
        <Navbar.Brand as={Link} to="/">
          <img src={gurumiIcon} alt="gutumiIcon" />
        </Navbar.Brand>

        <Nav.Item>
          <Nav.Link className="link" as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mr-auto">
          <Nav.Link className="link" eventKey="About us">
            About us
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Form inline className="justify-content-between" onSubmit={searchHandler}>
            <FormControl
              type="text"
              name="search"
              placeholder="Search Flowers"
              className=" mr-sm-2"
            />
            <Button className="btn" variant="outline-secondary" type="submit">
              Search
            </Button>
          </Form>
        </Nav.Item>

        {userLoginStatus()}
      </Navbar>


      <div className="header">
        <img
          src={gurumiHeader}
          width="100%"
          alt="header"
          className="header2"
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentUser: state.loginStatusReducer.currentUser,
  };
};

NavBar = connect(mapStateToProps)(NavBar);
export default NavBar;
