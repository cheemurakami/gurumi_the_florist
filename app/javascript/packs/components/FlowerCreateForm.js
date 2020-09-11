import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as a from "../actions";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' 

function FlowerCreateForm(props) {
  const [tags, setTags] = useState([]);

  const { dispatch } = props;
  useEffect(() => {
    const action = a.loadedForm();
    dispatch(action);
    return () => {};
  }, []);

  function formSubmissionHandler(event) {
    event.preventDefault();

    console.log(event.target.flower_photos.files);

    let formData = new FormData();
    
    formData.append("title", event.target.title.value);
    formData.append("description", event.target.description.value);
    formData.append("price", event.target.price.value);
    formData.append("tag_list", tags.join(", "));
    const submittedImages = event.target.flower_photos.files;
    const fileListAsArray = Array.from(submittedImages);
    fileListAsArray.map((image) => {
      formData.append("flower_photos[]", image); // atode each?
    });

    // const data = {
    //   title: event.target.title.value,
    //   description: event.target.description.value,
    //   price: event.target.price.value,
    //   flower_photos: event.target.flower_photos.files[0],
    // };

    fetch("/api/flowers", {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data", //fetch does this by itself
      // },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Success:", responseData);
        const action = a.addedFlower();
        dispatch(action);
        // setShowMsg(true);
        // setDirect(true);
      });
  }

  const handleChange = (tags) => {
    setTags(tags);
  }

  const msgOrForm = () => {
    if (props.showMsg) {
      return (
        <React.Fragment>
          <div style={{ textAlign: "center", margin: "auto" }}>
            <p>Successfully Created!</p>
            <Link to="/">
              <Button variant="outline-secondary" className="btn">
                Back to List
              </Button>
            </Link>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Container>
            <div
              style={{ textAlign: "center", margin: "auto", width: "350px" }}
            >
              <Form className="text-center" onSubmit={formSubmissionHandler}>
                <Form.Group controlId="title-input">
                  <div className="text-left">
                    <Form.Label>Title</Form.Label>
                  </div>
                  <Form.Control 
                    type="text" 
                    name="title" 
                    placeholder="Title" />
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

                <Form.Group controlId="tags-input">
                  <div className="text-left">
                    <Form.Label>Tags</Form.Label>
                  </div>
                  <TagsInput name="tags" value={tags} placeholder="Tags" onChange={handleChange}/>
                </Form.Group>

                <Button
                  variant="outline-secondary"
                  className="btn mb-3"
                  type="submit"
                >
                  Save
                </Button>
              </Form>

              <Link to="/">
                <Button variant="outline-secondary" className="btn mb-3">
                  Back to flower list
                </Button>
              </Link>
            </div>
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
    showMsg: state.flowerListReducer.showMsg,
  };
};

FlowerCreateForm = connect(mapStateToProps)(FlowerCreateForm);

export default FlowerCreateForm;
