import React from 'react'
import heroImg from '../image/user.jpg'
const BlogHero = () => {
  return (
    <div className='relative'>
      <div>
        <img src={heroImg} className='md:h-[400px] h-[260px] mt-[120px] object-cover w-full object-center' alt="" />
      </div>
      <div className='absolute lg:-top-[32%] md:-top-[24%]   -top-[24%] left-0 flex justify-center text-center flex-col font-lora w-full'>
        <p className='text-2xl font-bold text-neutral-900 md:text-5xl lg:text-7xl font-roboto  uppercase'>Our</p>

        <h3 className='text-5xl font-bold text-neutral-950 md:text-7xl lg:text-9xl   uppercase'>Ocen blog</h3>
      </div>
    </div>
  )
}

export default BlogHero
