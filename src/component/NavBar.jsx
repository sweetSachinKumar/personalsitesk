import React, { useState } from 'react'
import {HiMenu} from 'react-icons/hi'
import { navOps } from './sub-component/NavbarLink'
const NavBar = () => {
  const [isOpen, setIsOpen ] = useState(false)
  const [darkBG, setDarkBG] = useState(false)
  const closeAllBar = () => {
setDarkBG(false)
setIsOpen(false)
  }
  const handleNav =() => {
    setIsOpen(!isOpen)
    isOpen ?  setDarkBG(false) : setDarkBG(true)
  }
 
  return (
    <>
      <nav className=" z-50 bg-indigo-700 fixed top-0 left-0 right-0  ">
        <div className="flex justify-between items-center px-4 py-2 max-w-[1140px] m-auto">
          <div className="text-2xl text-white hover:ms-1  transition-all active:ms-0 cursor-pointer duration-150 ease-in font-poppins ">
            <span className='text-3xl tracking-wide text-indigo-200'>S</span>achin <span className='text-3xl tracking-wide text-indigo-200'>K</span>umar
          </div>

          <div className="absolute right-5">
            <button onClick={handleNav}
              className="  px-2 text-neutral-300   hover:shadow-blue-700 hover:text-indigo-200  dark:text-neutral-200 md:hidden
              cursor-pointer outline-none "
              type="button"
            >
              <HiMenu size={30} className='outline-none'/>
            </button>
          </div>
          <div>
            <ul className={`md:flex md:static md:h-auto md:w-auto  md:py-0  md:space-x-4 text-base  text-indigo-50  absolute top-full ${!isOpen? "-right-full" :"right-0"}  transition duration-500 bg-indigo-800 md:bg-transparent h-[100vh] w-[260px] py-8 z-30  `}>
 

             {
             navOps.map((navOp,i)=>{
              return(
                <li key={i+35} className="hover:text-indigo-200 md:m-0  hover:bg-white/10 m-2 px-4 ">
                <a href={`#${navOp.toLowerCase()}`}> 
                {navOp}
                 </a>
                 </li>
              )
             }) }
            </ul>
          </div>
        </div>
      </nav>
      <div onClick={closeAllBar} className={`layer bg-gray-800/20 ${darkBG? "block": "hidden"}   w-[100vw] z-10  fixed top-0 left-0 right-0  h-[100vh]`}></div>





    </>
  )
}

export default NavBar
