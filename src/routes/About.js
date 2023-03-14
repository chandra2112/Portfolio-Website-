import React from 'react'
import Abouts from '../Components/Abouts'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import NavBar from '../Components/NavBar'

const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading='ABOUT' text = 'Im a friendly Front End Developer'/>
      <Abouts/>
      <Footer/>
    </div>
  )
}

export default About