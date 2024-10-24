import React, { useEffect } from 'react'
import AboutUs from '../components/AboutPage/AboutUs/AboutUs'
import MissionVision from '../components/AboutPage/MissionVision/MissionVision'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div>
        <AboutUs/>
        <MissionVision/>
    </div>
  )
}

export default About