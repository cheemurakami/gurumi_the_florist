import React from 'react'

function FlowerCreateForm() {
  return (
    <React.Fragment>
      <p>hello this is flower create form</p>
      <h2 className='text-center'>Add new flower</h2>
      <form className='text-center'>
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
        <button type='submit'>Submit</button>
        <br />
      </form>
    </React.Fragment>
  )
}

export default FlowerCreateForm
