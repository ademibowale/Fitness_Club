import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'
import { motion } from "framer-motion"
import Counter from 'react-number-counter'



const transition={type: 'string',duration :3}
const mobile = window.innerWidth<=768 ? true : false
const Hero = () => {
    return (
        <div className='hero' id='home'>
            <div className='blur hero-blur'></div>
            <div className='left-h '>
                <Header />
                <div className='the-best-ad'>
                    <motion.div initial={{left: mobile?'178px':'238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition,type:'tween'}}></motion.div>
                    <span>The best fitness club in the town</span>
                </div>
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape</span>
                        <span>Your</span>
                    </div>
                    <div><span>Ideal Body</span></div>
                    <div>
                        <span>in here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                <div className='figures'>
                    <div>
                        <span >
                        +140           
                        </span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+878
                        
                        </span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>
                 +65          
                        </span>
                        <span>Fitness Programs</span>
                    </div>
                </div>
                {/*Hero Button  */}
                <div className='hero-btn'>
                    <buttons className='btn'>Get Started</buttons>
                    <buttons className='btn'>Learn More</buttons>
                </div>
            </div>
            <div className='right-h '><button className="btn">Join Now</button>
            <motion.div initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition} className='heart-rate'>
                <img src={Heart} alt="heart" />
                <span>Heart Rate</span>
                <span>115bpm</span>
            </motion.div>
            {/* Hero images*/}
<img src={hero_image} alt="hero_image" className='hero-image' />
<motion.img initial={{right:'13rem'}}
whileInView={{right:'21rem'}}
transition={transition} src={hero_image_back} alt="hero_image_back" className='hero-image_back' />        
  
  {/* calories image page */}

<motion.div 
initial={{left:'-7rem'}}
whileInView={{left:'8rem'}}
transition={transition} className='calories' >
<img src={calories} alt="calories" />
<div>
<span>Calories burned</span>
<span>420 Kcl</span>
</div>   
</motion.div>       
</div>
</div>

    )
}

export default Hero
