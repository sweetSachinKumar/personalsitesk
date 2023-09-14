import React from 'react'
import Post from '../image/post.jpg'
import {AiFillFacebook ,AiFillTwitterSquare,AiOutlineSearch,  AiFillInstagram, AiFillGithub, AiOutlineMenu} from 'react-icons/ai'

const SideNav = () => {
  return (
    <div className='  bg-slate-500/10 mt-2 pb-6'>
      
      <div className=' w-[80%] md:w-full mx-auto p-3'>
        <div>
          <h2 className='border-t-2 border-b-2 border-gray-400/60 font-bold text-sm text-center text-neutral-800 uppercase p-1'>About me</h2>
          
          <div className='my-6 w-full h-full'>
            <img src={Post} className='w-full h-full object-cover object-center rounded-md' alt="" />
          </div>
          <p className='font-roboto leading-5 text-sm mb-9'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, aspernatur, voluptatibus fugit voluptatum consectetur cum rem temp.</p>
          </div>

          <div>
            <h2 className='border-t-2 border-b-2  border-gray-400/60 font-bold text-sm text-center text-neutral-800  uppercase p-1 mb-2'>Categories </h2>
            <div className='grid grid-cols-2 gap-2 py-2 px-2'>
              <span>Life</span>
              <span>Music</span>
              <span>Style</span>
              <span>Sport</span>
              <span>Tech</span>
              <span>Cinema</span>
             
            </div>
          </div>

          <div className='  mt-9 w-full h-24'>
            <h2 className='border-t-2 border-b-2  border-gray-400/60 font-bold text-sm text-center text-neutral-800  uppercase p-1 '>Follow Us</h2>
            <div className='flex space-x-2 mt-5 justify-center'>
            <i><AiFillFacebook className='text-2xl hover:text-3xl duration-300 transition-all  cursor-pointer text-cyan-600'/></i>
            <i><AiFillTwitterSquare className='text-2xl hover:text-3xl duration-300 transition-all  cursor-pointer text-cyan-600'/></i>
            <i><AiFillInstagram className='text-2xl hover:text-3xl duration-300 transition-all  cursor-pointer text-cyan-600'/></i>
            <i><AiFillGithub className='text-2xl hover:text-3xl duration-300 transition-all  cursor-pointer text-cyan-600'/></i>
        </div>
          </div>
      </div>
    </div>
  )
}

export default SideNav
