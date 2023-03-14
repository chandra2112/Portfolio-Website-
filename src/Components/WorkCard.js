import './WorkCardStyles.css'

import React from 'react'
import pro1 from '../assets/project1.png'
import { NavLink } from 'react-router-dom'

const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Project</h1>
        <div className='project-heading'>
            <div className='project-card'>
                <img src={pro1} alt="pro1" />
                <h2 className='project-title'>Ecommerce Website Design </h2>
                <div className='pro-details'>
                    <p>Thriving Facebook Community and Top-ranked podcast, amy inspires a grounded, tangible and self-affirming sense of WOW! I really can do this for over 100,000 online entrepreneurs.Best-selling marking courses</p>
                    <div className='pro-btns'>
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard