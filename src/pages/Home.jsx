import React from 'react'

import NavBar from '../component/NavBar'
import SideBar from '../component/SideBar'
import Hero from '../component/Hero'
import Service from '../component/Service'
import Qualification from '../component/Qualification'
import Projects from '../component/Projects'
import Footer from '../component/Footer'
const Home = () => {
  return (
    <div>
         <NavBar/>
     <SideBar/>
     <Hero/>
     <Service/>
     <Qualification/>
     <Projects/>
     <Footer/>
    </div>
  )
}

export default Home