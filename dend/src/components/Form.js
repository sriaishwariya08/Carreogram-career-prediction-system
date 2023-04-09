import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <h1 className="project-heading">Contact Us</h1>
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Messages</label>
            <textarea row="6" placeholder="Type your text here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form