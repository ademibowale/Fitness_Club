import React from 'react'
import "./Testimonials.css";
import {testimonialsData} from "../../data/testimonialsData";
import {useState} from 'react';
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion"

const Testimonials = () => {
const transition={type: 'string',duration :3}
const[selected , setselected] = useState(0);
const tLenght= testimonialsData.length;
  return (
    <div className='Testimonials'>
      <div className='left-t'>
      <span>Testimonials</span>
      <span className='stroke-text'>What they</span>
      <span>say about us</span>
      <motion.span key={selected}
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
        transition={transition}>{testimonialsData[selected].review}</motion.span>
      
      <span>
      <span style={{color:'var(--orange)'}}>{testimonialsData[selected].name}</span>{""}
      - {testimonialsData[selected].status}
      </span>
      {/* <span></span> */}
      </div>
      <div className='right-t'>
        {/* Testimonials images animations */}
        <motion.div  initial={{opacity:0,x:-100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{...transition,duration:2}} className=''></motion.div>
        <motion.div  initial={{opacity:0,x:100}}
                    whileInView={{opacity:1,x:0}}
                    transition={{...transition,duration:2}}></motion.div>
       {/* testimonials arrow animation */}
        <motion.img key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}        
        src={testimonialsData[selected].image} alt='testimonials'/>
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
