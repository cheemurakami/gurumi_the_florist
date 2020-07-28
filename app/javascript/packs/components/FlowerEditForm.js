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
    
    const submittedImages = event.target.flower_photos.files
    const fileListAsArray = Array.from(submittedImages)
    let formData = new FormData();
    formData.append("title", event.target.title.value)
    formData.append("description", event.target.description.value)
    formData.append("price", event.target.price.value)
    fileListAsArray.map((image) => {
      formData.append("flower_photos[]", image) // atode each?
    })

    // const data = {
    //   title: event.target.title.value,
    //   description: event.target.description.value,
    //   price: event.target.price.value,
    // };

    fetch(`/api/flowers/${id}`, {
      method: "PUT",
      body: formData,
      // body: JSON.stringify(data),
      // headers: {
      //   "Content-Type": "application/json",
      // },
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

  const deleteImgHandler = (id) => {
    console.log("deleteImgHandler CLICKED =>", id)
    fetch(`/api/delete_image/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log("DELETE IMAGE:", response);
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
              {flower.flower_photos && flower.flower_photos.map((image) => {
             return (
               <div key={image.id}>
               <img
                 className="mr-3"
                 src={image.url}
                 alt="Generic placeholder"
                 
               />

               {/* when onClick, onSubmit needs argument, need this: () =>  */}
               <Button variant="outline-secondary"
                    className="btn" onClick={() => deleteImgHandler(image.id)}>delete</Button>
               </div>
             )
           })} 
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

                  <Form.Group controlId="files-input">
                  <div className="text-left">
                    <Form.Label>Image</Form.Label>

                    <input
                      id="custom-file"
                      label="Custom file input"
                      type="file"
                      accept="image/png, image/jpeg"
                      name="flower_photos"
                      multiple="multiple"
                    />

                  </div>
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
