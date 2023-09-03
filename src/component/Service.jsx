import React from 'react'
import serviceImg from '../img/headerImg.svg'
const Service = () => {
  return (
    <section className='bg-blue-600/30  max-w-[1440px] mx-auto   justify-between flex flex-col  md:flex-row px-5 rounded-md my-12 py-8 '>
    
    {/* info */}
   <div className='  py-4 px-2' >
    <h3 className='text-xl md:text-3xl text-indigo-800 font-semibold  mb-4'>Frontend Web Developer</h3>
    <p className='text-medium leading-normal text-neutral-800 '>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
    <h5 className='text-xl mt-3 text-blue-700 '>Languages I use</h5>
    <p className='mt-1 leading-normal text-neutral-800 '>HTML, CSS, Java Script</p>
    <h5 className='text-xl mt-3 text-blue-700'>Frameworks I use</h5>
    <p className='mt-1 font-semibold leading-normal text-neutral-800 '>Tailwind css, React js </p>

   </div>
    
    
    <div className='sm:w-[400px] max-w-sm md:max-w-none md:w-[500px]    shadow-xl shadow-sky-500/20 m-auto md:border-4 md:border-white flex items-center justify-center '>
        <img src={serviceImg} className=' w-full h-full' alt="" />
        {/* <h3>my name is sachin </h3> */}
    </div>
    
    
    
</section>
  )
}

export default Service
