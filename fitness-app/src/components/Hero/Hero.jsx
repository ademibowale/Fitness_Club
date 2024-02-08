import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import Heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='left-h '>
                <Header />
                <div className='the-best-ad'>
                    <div></div>
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
                        <span>+180</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>+65</span>
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
            <div className='heart-rate'>
                <img src={Heart} alt="heart" />
                <span>Heart Rate</span>
                <span>115bpm</span>
            </div>
            </div>
        </div>

    )
}

export default Hero
