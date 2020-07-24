import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as a from "../actions";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function FlowerEditForm(props) {
  const { id } = useParams();
  // const [direct, setDirect] = useState(false);
  // const [showMsg, setShowMsg] = useState(false);

  const { dispatch } = props;
  const [flower, setFlower] = useState({});

  useEffect(() => {
    const action = a.loadedForm();
    dispatch(action);
    fetch(`/api/flowers/${id}`)
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        setFlower(jsonifiedResponse);

        console.log(jsonifiedResponse);
      });
    // get all flowers
    // then set all flowers to my state
    return () => {};
  }, []);

  function formSubmissionHandler(event) {
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
    };

    fetch(`/api/flowers/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((resposeData) => {
        console.log("Success:", resposeData);
        const action = a.updatedFlower();
        dispatch(action);
        //setShowMsg(true);
        //setDirect(true);
      });
  }
  // const directToHome = () => {
  //   if (direct) {
  //     return <Redirect to="/" />;
  //   }
  // };

  const msgOrForm = () => {
    if (props.showMsg) {
      return (
        <React.Fragment>
          <p>Successfully updated!</p>
          <Link to="/">
            <Button variant="outline-secondary" className="btn">
              Back to List
            </Button>
          </Link>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Container>
            <Row>
              <Col md={7} style={{ textAlign: "center", padding: "auto" }}>
                <img
                  className="mr-3"
                  src="https://s7img.ftdi.com/is/image/ProvideCommerce/C12-4400D_LOL?$proflowers-tile-wide-sv-new$&qlt=80,0&resMode=trilin"
                  alt="Generic placeholder"
                />
              </Col>

              <Col md={5} style={{ textAlign: "center", padding: "auto" }}>
                <Form className="text-center" onSubmit={formSubmissionHandler}>
                  <Form.Group controlId="title-input">
                    <div className="text-left">
                      <Form.Label>Title</Form.Label>
                    </div>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Title"
                      defaultValue={flower.title}
                    />
                  </Form.Group>

                  <Form.Group controlId="formControlsTextarea">
                    <div className="text-left">
                      <Form.Label>Description</Form.Label>
                    </div>
                    <Form.Control
                      className="textarea"
                      type="textarea"
                      name="description"
                      placeholder="Description"
                      defaultValue={flower.description}
                    />
                  </Form.Group>

                  <Form.Group controlId="price-input">
                    <div className="text-left">
                      <Form.Label>Price</Form.Label>
                    </div>
                    <Form.Control
                      type="number"
                      name="price"
                      placeholder="Price"
                      defaultValue={flower.price}
                    />
                  </Form.Group>

                  <Button
                    variant="outline-secondary"
                    className="btn"
                    type="submit"
                  >
                    Save
                  </Button>
                  <br />
                </Form>
                <Link to={`/flower/${id}`}>
                  <Button variant="outline-secondary" className="btn">
                    Back to this flower detail
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      );
    }
  };
  return (
    <React.Fragment>
      {/* {directToHome()} */}
      {msgOrForm()}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    showMsg: state.showMsg,
  };
};
FlowerEditForm = connect(mapStateToProps)(FlowerEditForm);

export default FlowerEditForm;
