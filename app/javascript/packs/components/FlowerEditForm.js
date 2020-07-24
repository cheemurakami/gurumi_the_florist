import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as a from "../actions"

function FlowerEditForm(props) {
  const { id } = useParams();
  // const [direct, setDirect] = useState(false);
  // const [showMsg, setShowMsg] = useState(false);

  const { dispatch } = props;

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
        <p>Successfully updated!</p>
      )
    } else {
      return (
        <React.Fragment>
          <h2 className="text-center">Edit this flower</h2>
          <form className="text-center" onSubmit={formSubmissionHandler}>
            <input type="text" name="title" placeholder="Title"/>
            <br />
            <textarea
              type="text"
              name="description"
              placeholder="Description"
            />
            <br />
            <input type="text" name="price" placeholder="Price" />
            <button type="submit">Submit</button>
            <br />
          </form>
        </React.Fragment>
      );
    }
  };
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
  }
}
FlowerEditForm = connect(mapStateToProps)(FlowerEditForm);

export default FlowerEditForm ;
