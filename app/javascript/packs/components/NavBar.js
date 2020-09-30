import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import gurumiIcon from "./images/gurumi_icon.png";
import gurumiSignInIcon from "./images/gurumi_signin_icon.png";
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
      });
  };

  const userLoginStatus = () => {
    if (props.currentUser && props.currentUser.email) {
      return (
        <React.Fragment>
          <Nav.Item>
            <Nav.Link className="link" as={Link} to="/account">
              <img
                className="ml-2"
                height={25}
                src={gurumiSignInIcon}
                alt="gutumiAccIcon"
              />
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title={props.currentUser.email} id="basic-nav-dropdown">
            <NavDropdown.Item className="link" as={Link} to="/favorites">
              Your Favorites
            </NavDropdown.Item>
            <NavDropdown.Item className="link" as={Link} to="/cart">
              Your Cart
            </NavDropdown.Item>
            <NavDropdown.Item onClick={signOut}>Sign Out</NavDropdown.Item>
          </NavDropdown>
        </React.Fragment>
      );
    } else {
      return (
        <Nav.Item>
          <Nav.Link className="link" as={Link} to="/users/log_in">
            <img
              className="mr-2"
              height={25}
              src={gurumiSignInIcon}
              alt="gutumiAccIcon"
            />
            {props.currentUser && props.currentUser.email}
            Sign In
          </Nav.Link>
        </Nav.Item>
      );
    }
  };
  return (
    <>
      <Navbar bg="light" fixed="top">
        <Navbar.Brand as={Link} to="/">
          <img height={50} src={gurumiIcon} alt="gutumiIcon" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link className="link" as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="mr-auto">
            <Nav.Link className="link" as={Link} to="/aboutus">
              About us
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav.Item>
          <Form
            inline
            className="justify-content-between"
            onSubmit={searchHandler}
          >
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
        <Nav>{userLoginStatus()}</Nav>
      </Navbar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.loginStatusReducer.currentUser,
  };
};

NavBar = connect(mapStateToProps)(NavBar);
export default NavBar;
