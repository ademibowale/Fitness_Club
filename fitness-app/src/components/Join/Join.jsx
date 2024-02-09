import React from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Join = () => {
   const form = useRef()
    const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hv4jt5m', 'template_xg6nlxi', form.current, {
        publicKey: 'Nd2dHNR1SNbnoOZQY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='Join' id='Join-Us'>
        <div className='left-j'>
            <hr/>
     <div>
        <span className='stroke-text'> READY TO</span>
        <span> LEVEL UP</span>
     </div>
     <div>
        <span> YOUR BODY</span>
        <span className='stroke-text'> WITH US ?</span>
     </div> 
     </div>
    <div className='right-j'>
    <form  ref={form}  className='email-container' onSubmit={sendEmail}>
        <input type='email' name='user_email' placeholder='Enter your email address to join us'/>
        <textarea className='email-container'  name='message' placeholder='Enter your message'></textarea>
        <button className='btn-j'>JOIN US</button>
    </form>

    </div>
    </div>
  )
}

export default Join
