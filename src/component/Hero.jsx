import React from 'react'
import {GoDownload} from 'react-icons/go'
import myCv from './skCV.pdf'
    import HeaderImg from '../img/img2.svg'
const Hero = () => {
    return (
        <header id='home' className='bg-indigo-600 text-white max-w-[1440px] mx-auto items-center justify-around flex flex-col  md:flex-row  h-[80vh] py-16 rounded-md'>
            <div className='max-w-sm md:max-w-none md:w-[500px]    shadow-xl shadow-sky-500/20 flex items-center justify-center   '>
                <img src={HeaderImg} className=' w-full h-full' alt="" />
                {/* <h3>my name is sachin </h3> */}
            </div>
            {/* info */}
            <div className=' flex-   flex items-center    justify-center py-4 text-center flex-col px-2'>

                <h2 className='text-2xl md:text-4xl font-semibold text-indigo-200'> <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-300      to-yellow-300 '>I CREATE MODERN WEBSITE</span> 
                </h2>

                <p className='text-sm font-normal md:text-lg py-5'>I design and code beautifully simple things, and I love what I do.</p>
                <a download href={myCv} className='bg-yellow-500 transition  md:hover:bg-yellow-600/80 active:opacity-75 font-bold tracking-wide rounded-lg px-4 py-2 text-white flex items-center space-x-2 '> <span>download cv</span>   <i> <GoDownload size={20}/> </i> </a>
            </div>
        </header>
    )
}

export default Hero
