import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";


function FlowerEditForm() {
  const { id } = useParams();  
  const history = useHistory();

  function formSubmissionHandler(event) {
    event.preventDefault();
    const data = {
      title: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
    };

    fetch(`/flowers/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
      .then((resposeData) => {
        console.log("Success:", resposeData);
      });
      return history.push('/')
  }

  return (
    <React.Fragment>
      <p>hello this is flower edit form</p>
      <h2 className="text-center">Edit this flower</h2>
      <form className="text-center" onSubmit={formSubmissionHandler}>
        <input type="text" name="title" placeholder="Title" />
        <br />
        <textarea type="text" name="description" placeholder="Description" />
        <br />
        <input type="text" name="price" placeholder="Price" />
        <button type="submit">Submit</button>
        <br />
      </form>
      <Link to="/">
        <button>Back to List</button>
      </Link>
    </React.Fragment>
    
  );
}

export default FlowerEditForm;
