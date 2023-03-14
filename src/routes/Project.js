import React from 'react'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'

import NavBar from '../Components/NavBar'
import WorkCard from '../Components/WorkCard'

const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading='PROJECT' text='Some of my most recent works'/>
      <WorkCard/>
      <Footer/>
      
      
    
    </div>
  )
}

export default Project