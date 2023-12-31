import React, { useEffect } from 'react'
import serviceImg from '../img/headerImg.svg'
import 'aos/dist/aos.css'
import Aos from 'aos'
const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <section id='service' className=' '>
      <div className='   justify-between flex flex-col  md:flex-row'>
        {/* info */}
        <div className=' space-y-5 py-4 px-2' >
          <div>
            <h3 data-aos-anchor-placement="bottom-bottom" data-aos="zoom-out-right" className='text-xl md:text-3xl text-indigo-800 font-semibold  dark:text-amber-200 '>Frontend Web Developer</h3>
            <p data-aos-anchor-placement="bottom-bottom" data-aos="fade-right" className='sm:text-xl px-2 ext-base  text-neutral-800 dark:text-slate-200   leading-tight '>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
          </div>
          <div>
            <h5 data-aos-anchor-placement="bottom-bottom" data-aos="zoom-out-right" className='text-xl  text-blue-700   dark:text-amber-200'>Languages I use</h5>
            <p data-aos-anchor-placement="bottom-bottom" data-aos="fade-right" className='px-2 leading-normal text-sm sm:text-base text-neutral-80 font-semibold text-xs sm:text-base dark:text-slate-200 '>  HTML 5, CSS 3, JavaScript, node.js</p>
          </div>
          <div>
            <h5 data-aos-anchor-placement="bottom-bottom" data-aos="zoom-out-right" className='text-xl  text-blue-700  dark:text-amber-200'>Frameworks I use</h5>
            <p data-aos-anchor-placement="bottom-bottom" data-aos="fade-right" className='ps-2 font-semibold leading-normal text-neutral-800 dark:text-slate-200 text-sm sm:text-base '>Tailwind CSS, react.js, react-redux, espress.js, mongoose </p>
          </div>
          <div>
            <h5 data-aos-anchor-placement="bottom-bottom" data-aos="zoom-out-right" className='text-xl  text-blue-700  dark:text-amber-200'>Database I use</h5>
            <p data-aos-anchor-placement="bottom-bottom" data-aos="fade-right" className='ps-2 font-semibold leading-normal text-neutral-800 dark:text-slate-200 text-sm sm:text-base'>mongoDB </p>
          </div>

          <div>
            <h5 data-aos-anchor-placement="bottom-bottom" data-aos="zoom-out-right" className='text-xl  text-blue-700  dark:text-amber-200'>other </h5>
            <p data-aos-anchor-placement="bottom-bottom" data-aos="fade-right" className='ps-2 font-semibold leading-normal text-neutral-800 dark:text-slate-200 text-sm sm:text-base'>JWT, Bcrypt </p>
          </div>

        </div>


        <div className='sm:w-[400px] max-w-sm md:max-w-none md:w-[500px]    shadow-xl shadow-sky-500/20 dark:shadow-md dark:shadow-sky-900 m-auto md:border-4 md:border-white dark:md:border-slate-600 flex items-center justify-center '>
          <img src={serviceImg} data-aos-anchor-placement="bottom-bottom" data-aos="fade-down" className=' w-full h-full' alt="" />
          {/* <h3>my name is sachin </h3> */}
        </div>


      </div>
    </section>
  )
}

export default Service
