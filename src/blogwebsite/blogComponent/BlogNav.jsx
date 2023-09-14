import React, {  useState } from 'react'
import {AiFillFacebook ,AiFillTwitterSquare,AiOutlineSearch,  AiFillInstagram, AiFillGithub, AiOutlineMenu} from 'react-icons/ai'
import userImg from '../image/user.jpg' 

const BlogNav = () => {
  
const [showSearch, setShowSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
  return (
<>

<div className='flex justify-between px-5 z-10 py-2 space-x-3 items-center max-w-[1140px] mx-auto'>
        <div className='flex space-x-2'>
            <i><AiFillFacebook className='text-2xl hover:text-3xl duration-300 transition-all  cursor-pointer text-cyan-600'/></i>
            <i><AiFillTwitterSquare className='text-2xl hover:text-3xl duration-300 transition-all  cursor-pointer text-cyan-600'/></i>
            <i><AiFillInstagram className='text-2xl hover:text-3xl duration-300 transition-all  cursor-pointer text-cyan-600'/></i>
            <i><AiFillGithub className='text-2xl hover:text-3xl duration-300 transition-all  cursor-pointer text-cyan-600'/></i>
        </div>

        <div className='md:flex-1 md:justify-center md:flex'>
            <ul  className={`md:flex md:space-x-3  z-20 md:static absolute top-12 ${isOpen? "right-0 block": "-right-5 hidden"} -right-full w-[150px] md:w-auto bg-slate-400/80 md:shadow-none md:bg-transparent shadow-md shadow-neutral-600/90 py-3 transition-all duration-200`}>
                {
                    ["home","about","contact", "write","Login"].map(navItem => <li key={navItem} className='text-xl hover:font-semibold  cursor-pointer   my-2 w-full px-4  ' >{navItem.toUpperCase()}</li>)
                }
            </ul>
        </div>

        <div  className='flex space-x-2 items-center'>
            <img src={userImg} className='w-8 cursor-pointer h-8 rounded-[30px] object-cover ' alt="/" />
            <div className='relative'>
            <i><AiOutlineSearch  onClick={()=>setShowSearch(!showSearch)}  className='text-2xl hover:text-3xl duration-300 transition-all  cursor-pointer text-cyan-600'/></i>
            <input   type="search" placeholder='search...' name="" className={`absolute  border border-gray-950 top-8 right-6 w-[80vw] mx-auto px-4 py-2 text-xl bg-white  rounded-3xl ${showSearch? "scale-100" : "scale-0"}  focus:border-0  transition-all  duration-100 origin-left `} id="" />
                </div>

                <i className='md:hidden'><AiOutlineMenu onClick={()=> setIsOpen(!isOpen)} className='text-xl hover:shadow-md cursor-pointer  shadow-neutral-600/60 duration-300 transition-all  '/></i>

           
        </div>
 {/* active layer  */}
      
    </div>
 {/* <div className='bg-gray-900/10 fixed top-0 left-0 right-0 w-screen h-screen'> </div> */}
    </>
  )
}

export default BlogNav
