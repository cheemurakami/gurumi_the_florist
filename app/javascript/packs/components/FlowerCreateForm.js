import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

function FlowerCreateForm() {
  const [direct, setDirect] = useState(false);

  function formSubmissionHandler(event) {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
    };

    fetch("/flowers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
    setDirect(true);
    // location.replace("/");

  }
  const directToHome = () => {
    if (direct) {
      return <Redirect to="/" />;
    }
  };

  return (
    <React.Fragment>
      {directToHome()}
      <p>hello this is flower create form</p>
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

      <Link to="/">
        <button>Back to List</button>
      </Link>
    </React.Fragment>
  );
}

export default FlowerCreateForm;
