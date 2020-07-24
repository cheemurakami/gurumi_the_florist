import React, { useState } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import * as a from '../actions';
import Dropzone from 'react-dropzone'

function FlowerCreateForm(props) {
  // const [direct, setDirect] = useState(false);
  // const [showMsg, setShowMsg] = useState(false);

  function formSubmissionHandler(event) {
    event.preventDefault();
   
    const { dispatch } = props;

    const data = {
      title: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
    };

    fetch("/api/flowers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
  // const directToHome = () => {
  //   if (direct) {
  //     return <Redirect to="/" />;
  //   }
  // };

  const msgOrForm = () => {
    if(props.showMsg){
      return (
        <p>Successfully created!</p>
      )
    } else {
      return (
        <React.Fragment>
          <h2 className="text-center">Add new flower</h2>
          <form className="text-center" onSubmit={formSubmissionHandler}>
            <input type="text" name="title" placeholder="Title" />
            <br />
            <textarea
              type="text"
              name="description"
              placeholder="Description"
            />
            <br />
            <input type="text" name="price" placeholder="Price" />
            <br />

            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>

            <button type="submit">Submit</button>
          </form>
        </React.Fragment>
      );
    }
  }

  return (
    <React.Fragment>
      {/* {directToHome()} */}
      {msgOrForm()}
      

      <Link to="/">
        <button>Back to List</button>
      </Link>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    showMsg: state.showMsg
  };
}

FlowerCreateForm = connect(mapStateToProps)(FlowerCreateForm);

export default FlowerCreateForm;
