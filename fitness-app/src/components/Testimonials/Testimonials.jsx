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
     {/* Arows Logic Functions */}
      <div className='Arrows'>
        <img onClick={()=>
        selected===0 ? setselected(tLenght - 1) :
        setselected ((prev)=>prev-1)
        } src={leftArrow} alt=''/>
        <img onClick={()=>{
          selected===tLenght-1 ? setselected(0) :
          setselected((prev)=>prev+1)

        }
        
        } src={rightArrow} alt=''/>
      </div>
      </div>
    </div>
  )
}

export default Testimonials
