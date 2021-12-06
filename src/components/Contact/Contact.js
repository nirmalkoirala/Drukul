import React from 'react'
import './ContactStyles.css'

const Contact = () => {
    return (
        <div className='form'>
            <form>
                <label>Your Name</label>
                <input    
                type="text"></input>
                <label>Email</label>
                <input
                 type="text"></input>
                <label>Phone</label>
                <input
                 type="text"></input>
                <label>Your Message</label>
                <textarea
                 rows='6' placeholder='Type a short message here' />
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Contact
