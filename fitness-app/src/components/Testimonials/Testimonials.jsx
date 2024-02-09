import React from 'react'
import "./Testimonials.css";
import {testimonialsData} from "../../data/testimonialsData";
import {useState} from 'react';
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";


const Testimonials = () => {
const[selected , setselected] = useState(0);
const tLenght= testimonialsData.length;
  return (
    <div className='Testimonials'>
      <div className='left-t'>
      <span>Testimonials</span>
      <span className='stroke-text'>What they</span>
      <span>say about us</span>
      <span>{testimonialsData[selected].review}</span>
      
      <span>
      <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name}</span>{""}
      - {testimonialsData[selected].status}
      </span>
      {/* <span></span> */}
      </div>
      <div className='right-t'>
        <div className=''></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt='testimonials'/>
      <div className='Arrows'>
        <img src={leftArrow} alt=''/>
        <img src={rightArrow} alt=''/>
      </div>
      </div>
    </div>
  )
}

export default Testimonials
