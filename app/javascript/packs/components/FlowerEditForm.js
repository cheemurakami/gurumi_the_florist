import React, { useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";


function FlowerEditForm() {
  const { id } = useParams();  
  const [direct, setDirect] = useState(false);

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
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
      .then((resposeData) => {
        console.log("Success:", resposeData);
      });
    setDirect(true);
  }
  const directToHome = () => {
    if(direct){
      return <Redirect to="/" />
    }
  }

  return (
    <React.Fragment>
      {directToHome()}
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
