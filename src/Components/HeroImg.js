import './HeroImgStyles.css';
import React from 'react';
import IntroImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';



const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt="IntroImg" />
        </div>
        <div className='content'>
            <p>HI, I'M A FULL STACK DEVELOPER</p>
            <h1>React Developer</h1>
            <div>
                <Link to = '/project' className='btn'>Project</Link>
                <Link to = '/about' className='btn btn-light'>About</Link>
            
            </div>
        </div>
    </div>
  )
}

export default HeroImg

