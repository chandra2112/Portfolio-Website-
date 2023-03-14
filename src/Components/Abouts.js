import './Abouts.css'
import React from 'react'
import { Link } from 'react-router-dom'
import react1 from '../assets/react1.jpg'
import react2 from '../assets/react2.webp'

const Abouts = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Im a full stack Developer</p>
            <Link to = '/contact' >
                <button className='btn'>Contact</button>
            </Link> 
        </div>

        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img className='img' src={react1} alt="true" />
                </div>
                <div className='img-stack bottom'>
                    <img className='img' src={react2} alt="true" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Abouts