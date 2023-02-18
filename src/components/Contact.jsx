import React from 'react'

const Contact = () => {
  return <div className='contact' id='contact'>

    <main>
    <h1>Contact Us</h1>

    <form>
        <div>
            <label>Name</label>
            <input type='text' required placeholder='ABC'/>
        </div>

        <div>
            <label>Email</label>
            <input type='email' required placeholder='Email.com'/>
        </div>

        <div>
            <label>Phone</label>
            <input type='number' required placeholder='+1-1111111'/>
        </div>

        <div>
            <label>Message</label>
            <input type='text' required placeholder='Tell Us About Your inquiry'/>
        </div>

        <button type='submit'>Send</button>
    </form>

    </main>
  </div>
}

export default Contact;