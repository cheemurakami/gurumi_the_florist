import React from 'react'

function FlowerEditForm() {
  return (
    <React.Fragment>
      <form>
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

export default FlowerEditForm
