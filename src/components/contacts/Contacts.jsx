import React from 'react'
import './contacts.css';
import {AiOutlineMail} from 'react-icons/ai';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';




const Contacts = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>koushikghosh6077@gmail.com</h5>
            <a href="mailto:koushikghosh6077 at gmail">Send a messege</a>
          </article>
          <article className="contact__option">
          <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>facebook.com</h5>
            <a href="mailto:joushikghosh6077@gmail.com">Send a messege</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+917003383676</h5>
            <a href="https://api.whatsapp.com/send?phone=917003383676">Send a messege</a>
          </article>
        </div>
        <form >
          <input type="text" name='name' palceholder='your full name' required />
          <input type="email" name='email' palceholder='Your Email' required />
          <textarea name="messege"  rows="7" placeholder='your messege' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Messege</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts