import React, { useEffect } from 'react'

import { GoDownload } from 'react-icons/go'
import myCv from '../assets/CV3.pdf'
import HeaderImg from '../img/img2.svg'
import 'aos/dist/aos.css'
import Aos from 'aos'


const Hero = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })


    return (
        <>
            <header id='home' className='text-white w-full '>

                <div className='bg-indigo-600 dark:bg-indigo-900/90  '>
                    <div className=' items-center   justify-around flex flex-col py-16  md:flex-row max-w-[1440px] mx-auto'>

                        <div className='max-w-sm md:max-w-none md:w-[500px]    shadow-xl shadow-sky-600/20 dark:shadow-sky-900 dark:shadow-sm flex items-center justify-center   '>
                            <img src={HeaderImg} className='  w-full h-full' data-aos="fade-right" alt="" />
                            {/* <h3>my name is sachin </h3> */}
                        </div>
                        {/* info */}
                        <div className=' flex-   flex items-center    justify-center pt-14 md:pt-0 text-center flex-col px-2'>

                            <h2 data-aos="fade-left" className='text-2xl md:text-4xl font-semibold text-indigo-200'> <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-300      to-yellow-300 '   >I CREATE MODERN WEBSITE</span>
                            </h2>

                            <p className='text-sm font-normal md:text-lg py-5' data-aos="zoom-out"  >I design and code beautifully simple things, and I love what I do.</p>
                            <a download href={myCv} data-aos="fade-left" className='bg-yellow-500 dark:bg-yellow-400/80  dark:hover:bg-yellow-600/90  transition dark:active:bg-yellow-400/80   hover:bg-yellow-600/90 active:bg-yellow-600/60 font-bold tracking-wide rounded-lg px-4 py-2 text-white flex items-center space-x-2 '> <span>download cv</span>   <i> <GoDownload size={20} /> </i> </a>
                        </div>


                    </div>
                </div>
                {/* #4f46e5 */}
                <div>
                    {/* <svg id="wave"  style={{transform:"rotate(180deg)", transition: "0.3s"}} viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(79, 70, 229, 1)" offset="0%"></stop><stop stop-color="rgba(79, 70, 229, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform:"translate(0, 0px)", opacity:"1"}}  fill="url(#sw-gradient-0)"  d="M0,105L30,92.5C60,80,120,55,180,57.5C240,60,300,90,360,92.5C420,95,480,70,540,50C600,30,660,15,720,27.5C780,40,840,80,900,90C960,100,1020,80,1080,70C1140,60,1200,60,1260,72.5C1320,85,1380,110,1440,105C1500,100,1560,65,1620,50C1680,35,1740,40,1800,37.5C1860,35,1920,25,1980,25C2040,25,2100,35,2160,55C2220,75,2280,105,2340,102.5C2400,100,2460,65,2520,45C2580,25,2640,20,2700,22.5C2760,25,2820,35,2880,42.5C2940,50,3000,55,3060,47.5C3120,40,3180,20,3240,20C3300,20,3360,40,3420,45C3480,50,3540,40,3600,50C3660,60,3720,90,3780,95C3840,100,3900,80,3960,62.5C4020,45,4080,30,4140,25C4200,20,4260,25,4290,27.5L4320,30L4320,150L4290,150C4260,150,4200,150,4140,150C4080,150,4020,150,3960,150C3900,150,3840,150,3780,150C3720,150,3660,150,3600,150C3540,150,3480,150,3420,150C3360,150,3300,150,3240,150C3180,150,3120,150,3060,150C3000,150,2940,150,2880,150C2820,150,2760,150,2700,150C2640,150,2580,150,2520,150C2460,150,2400,150,2340,150C2280,150,2220,150,2160,150C2100,150,2040,150,1980,150C1920,150,1860,150,1800,150C1740,150,1680,150,1620,150C1560,150,1500,150,1440,150C1380,150,1320,150,1260,150C1200,150,1140,150,1080,150C1020,150,960,150,900,150C840,150,780,150,720,150C660,150,600,150,540,150C480,150,420,150,360,150C300,150,240,150,180,150C120,150,60,150,30,150L0,150Z"></path></svg> */}

                    {/* <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 150" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,105L30,92.5C60,80,120,55,180,57.5C240,60,300,90,360,92.5C420,95,480,70,540,50C600,30,660,15,720,27.5C780,40,840,80,900,90C960,100,1020,80,1080,70C1140,60,1200,60,1260,72.5C1320,85,1380,110,1440,105C1500,100,1560,65,1620,50C1680,35,1740,40,1800,37.5C1860,35,1920,25,1980,25C2040,25,2100,35,2160,55C2220,75,2280,105,2340,102.5C2400,100,2460,65,2520,45C2580,25,2640,20,2700,22.5C2760,25,2820,35,2880,42.5C2940,50,3000,55,3060,47.5C3120,40,3180,20,3240,20C3300,20,3360,40,3420,45C3480,50,3540,40,3600,50C3660,60,3720,90,3780,95C3840,100,3900,80,3960,62.5C4020,45,4080,30,4140,25C4200,20,4260,25,4290,27.5L4320,30L4320,150L4290,150C4260,150,4200,150,4140,150C4080,150,4020,150,3960,150C3900,150,3840,150,3780,150C3720,150,3660,150,3600,150C3540,150,3480,150,3420,150C3360,150,3300,150,3240,150C3180,150,3120,150,3060,150C3000,150,2940,150,2880,150C2820,150,2760,150,2700,150C2640,150,2580,150,2520,150C2460,150,2400,150,2340,150C2280,150,2220,150,2160,150C2100,150,2040,150,1980,150C1920,150,1860,150,1800,150C1740,150,1680,150,1620,150C1560,150,1500,150,1440,150C1380,150,1320,150,1260,150C1200,150,1140,150,1080,150C1020,150,960,150,900,150C840,150,780,150,720,150C660,150,600,150,540,150C480,150,420,150,360,150C300,150,240,150,180,150C120,150,60,150,30,150L0,150Z"></path></svg> */}
                </div>

            </header>
        </>
    )
}

export default Hero
