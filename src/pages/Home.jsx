import React from 'react'

import NavBar from '../component/NavBar'
import Hero from '../component/Hero'
import Service from '../component/Service'
import Qualification from '../component/Qualification'
import Projects from '../component/Projects'
import Footer from '../component/Footer'
import ProjectMERN from '../component/ProjectMERN'
import ProjectBackend from '../component/ProjectBackend'
const Home = () => {
  return (
    <div>
         <NavBar/>
    
     <Hero/>
     <Service/>
     <Qualification/>
     <ProjectMERN/>
     <Projects/>
     <ProjectBackend/>
     <Footer/>
    </div>
  )
}

export default Home
