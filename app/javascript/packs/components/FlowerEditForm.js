import React from "react";

function FlowerEditForm() {
  function formSubmissionHandler(event) {
    event.preventDedault();
    const data = {
      title: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
    };

    fetch("/flowers/data.id", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
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
    </React.Fragment>
  );
}

export default FlowerEditForm;
