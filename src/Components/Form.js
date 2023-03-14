import './Form.css'
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form action="">
            <label>Your Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className='btn'>Submit</button>
        </form>
      </div>
  )
}

export default Form