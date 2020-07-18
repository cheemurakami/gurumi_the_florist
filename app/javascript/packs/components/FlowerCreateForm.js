import React from 'react'
import { Link, useHistory } from "react-router-dom";

function FlowerCreateForm() {
  const history = useHistory();
  function formSubmissionHandler (event) {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
    }
    
    fetch('/flowers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    return history.push('/')
  }

  return (
    <React.Fragment>
      <p>hello this is flower create form</p>
      <h2 className='text-center'>Add new flower</h2>
      <form className='text-center' onSubmit={formSubmissionHandler}>
        <input 
          type='text' 
          name='title' 
          placeholder='Title' />
        <br />
        <textarea 
          type='text' 
          name='description' 
          placeholder='Description' />
        <br />
        <input 
          type='text' 
          name='price' 
          placeholder='Price' />
        <br />
        <button type='submit'>Submit</button>
      </form>
      
      <Link to="/">
        <button>Back to List</button>
      </Link>
      
    </React.Fragment>
  )
}

export default FlowerCreateForm
