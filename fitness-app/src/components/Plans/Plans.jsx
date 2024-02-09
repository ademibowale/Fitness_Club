import React from 'react'
import './Plans.css'
import {plansData} from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png'


const Plans = () => {
  return (
<div className='plans-container'>
<div className='programs-header' style={{gap:'4rem'}}>
<span className='stroke-text'>READY TO START</span>
<span>YOUR JOURNEY</span>
<span className='stroke-text'>NOW WITH US</span>

</div>
     {/* Plans Cards          */}
      
<div className='plans'>
  {plansData.map((plan,  i )=>(
    <div className='plan' key={i}>
{plan.icon}
<span>{plan.name}</span>
<span>${plan.price}</span>
<div className='features'>
  {plan.features.map((feature, i)=>(
    <div className='feature'>
      <img src={whiteTick} alt=''/>
      <span key={i}>{feature}</span>
    </div>
  ))}

</div>
<div><span>See more benefit   </span></div>
<button className='btn'>Join Us</button>

</div>
  ))}
</div>      
</div>
  )
}

export default Plans
