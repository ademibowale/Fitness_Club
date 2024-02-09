import React from 'react'
import './Join.css'

const Join = () => {
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
    <div className='right-j'></div>
    <form action='' className='email-container'>
        <input type='email' name='user_email' placeholder='Enter your email address to join us'/>
        <button className='btn-j'>JOIN US</button>
    </form>

      
    </div>
  )
}

export default Join
