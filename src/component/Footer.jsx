import React, {useEffect} from 'react'
import {FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

import 'aos/dist/aos.css'
import Aos from 'aos'

const Footer = () => {

  
useEffect(()=>{
  Aos.init({duration:2000})
})

  return (
    <footer id='connect' className='bg-indigo-800/50 py-4 md:py-9'>
 
 <div className=' flex items-center justify-center'>
  <a data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000 " data-aos-anchor-placement="bottom-bottom"  href="https://www.facebook.com/profile.php?id=100047787969877" target='_sachin' className=' p-2 bg-indigo-500 mr-4 rounded-3xl text-white hover:bg-indigo-600 transition duration-300'>
    <FaFacebookF size={20}/>
  </a>

  <a data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000 " data-aos-anchor-placement="bottom-bottom"  href="https://www.instagram.com/sachin_mernstack/" target='_sachin'  className=' p-2 bg-indigo-500 mr-4 rounded-3xl text-white hover:bg-indigo-600 transition duration-300'>
    <FaInstagram size={20}/>
  </a>

  <a data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000 " data-aos-anchor-placement="bottom-bottom"  href="https://www.linkedin.com/in/sachin-kumar-2728b4287/"  target='_sachin' className=' p-2 bg-indigo-500 mr-4 rounded-3xl text-white hover:bg-indigo-600 transition duration-300'>
    <FaLinkedinIn size={20}/>
  </a>
  <a data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000 " data-aos-anchor-placement="bottom-bottom"  href="https://github.com/sweetSachinKumar" target='_sachin'  className=' p-2 bg-indigo-500 mr-4 rounded-3xl text-white hover:bg-indigo-600 transition duration-300'>
    <FaGithub size={20}/>
  </a>
 </div>

    </footer>
  )
}

export default Footer
