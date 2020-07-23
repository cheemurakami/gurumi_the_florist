import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import * as a from '../actions';


function FlowerCreateForm(props) {
  const [direct, setDirect] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

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
        const { id, title, description, price } = responseData;
        // const action = {
        //   type: "ADD_FLOWER",
        //   id,
        //   title,
        //   description,
        //   price
        // }
        const action = a.addFlower(responseData);
        dispatch(action);
        setShowMsg(true);
        setDirect(true);
      });

  }
  const directToHome = () => {
    if (direct) {
      return <Redirect to="/" />;
    }
  };

  const msgOrForm = () => {
    if(showMsg){
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
            <textarea type="text" name="description" placeholder="Description" />
            <br />
            <input type="text" name="price" placeholder="Price" />
            <br />
          <button type="submit">Submit</button>
          </form>
        </React.Fragment>
      )
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

FlowerCreateForm = connect()(FlowerCreateForm);

export default FlowerCreateForm;
