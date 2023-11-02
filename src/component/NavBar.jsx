import React, { useEffect, useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { navOps, porjOps } from './sub-component/NavbarLink'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
// import {GoDeviceDesktop} from 'react-icons/go'
import Aos from 'aos'
import 'aos/dist/aos.css'


const NavBar = () => {
  const [theme, setTheme] = useState('light')
  const [isOpen, setIsOpen] = useState(false)
  const [darkBG, setDarkBG] = useState(false)


  useEffect(() => {
    Aos.init({ duration: 2000 })
  })


  const modeOps = [
    {
      icon: <BsFillSunFill />,
      text: 'light'
    },
    {
      icon: <BsMoonFill />,
      text: 'moon'
    }
  ]



  useEffect(() => {
    switch (theme) {

      case 'light':
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", theme)
        break;

      case 'moon':
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", theme)
        break;

      default:
        localStorage.removeItem("theme")

        break;

    }

  }, [theme])



  const closeAllBar = () => {
    setDarkBG(false)
    setIsOpen(false)
  }
  const handleNav = () => {
    setIsOpen(!isOpen)
    isOpen ? setDarkBG(false) : setDarkBG(true)
  }




  return (
    <>
      <nav className="p-1 sm:p-0 z-50 bg-indigo-700 dark:bg-indigo-900 fixed top-0 left-0 right-0  ">
        <div className="flex justify-between items-center px-4 py-2 max-w-[1140px] m-auto">
          <div className=" text-sm sm:text-xl text-white hover:ms-1  transition-all active:ms-0 cursor-pointer duration-150 ease-in font-poppins ">
            <span className=' sm:text-3xl text-base tracking-wide text-indigo-200'>S</span>achin <span className=' text-base sm:text-3xl tracking-wide text-indigo-200'>K</span>umar
          </div>




          <div>
            <ul className={`md:flex md:static md:h-auto md:w-auto  md:py-0  md:space-x-4 lg:space-x-8 text-base  text-indigo-50  absolute top-full ${!isOpen ? "-right-full" : "right-0"}  transition duration-500 bg-indigo-800 dark:bg-indigo-950 dark:md:bg-transparent  md:bg-transparent h-[100vh] w-[260px] py-8 z-30 px-1  `}>


              {
                navOps.map((navOp, i) => {
                  return (
                    <li key={i * 35} className=' w-full  ' >

                      <a className="md:hover:text-indigo-200 md:m-0 msd:hover:bg-transparent hover:bg-white/10 m-2 dark:text-slate-200  px-4 py-1 w-full block md:hover:bg-white/20  " href={`#${navOp.toLowerCase()}`}>
                        {navOp}
                      </a>

                    </li>
                  )
                })
              }

              <li className='w-full'>
                <a className="md:hover:text-indigo-200 md:m-0 group/proj msd:hover:bg-transparent hover:bg-white/10 m-2 dark:text-slate-200  px-4 py-1 w-full block md:hover:bg-white/20 relative " href={`#project`}>
                  Project
                  <div className='md:absolute   group-hover/proj:pointer-events-auto group-hover/proj:block group-hover/proj:mt-0 transition-all duration-500 top-full -left-16 pointer-events-none mt-4 md:w-[300px] opacity-0 group-hover/proj:opacity-100  '>

                    <div className="md:bg-indigo-200/95  md:dark:bg-indigo-700/95  rounded shadow-xl px-4 relative mt-3">

                     

                      <div>
                        <ul className='flex flex-col'>
                          {
                            porjOps.map(op => <li key={op.pathTo} className='md:text-black md:dark:text-slate-200 py-1  w-full'><a className='hover:bg-black/30   flex  py-2 px-1 ' href={op.pathTo}>{op.name}</a></li>)
                          }
                          
                        </ul>
                      </div>

                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {/* mode butons */}
          <div className='flex space-x-2 bg-slate-200/10  md:p-2 p-1 text-sm md:text-base  absolute right-24 md:static rounded-sm'>
            {modeOps.map(op => {
              return <button data-aos="zoom-in-left" onClick={() => setTheme(op.text)} key={op.text} className={` ${theme === op.text && "bg-sky-600 dark:bg-slate-900/80"}  sm:text-base text-xl p-2 rounded-lg text-white md:p-2 `}>{op.icon}</button>
            })
            }
          </div>
          {/* menubar butons  */}
          <div className="absolute right-5 ">

            <button onClick={handleNav}
              className="  px-2 text-neutral-300   hover:shadow-blue-700 hover:text-indigo-200  dark:text-neutral-200 md:hidden
               cursor-pointer outline-none "
              type="button"
            >
              <HiMenu size={30} className='outline-none' />
            </button>

          </div>






        </div>
      </nav>
      <div onClick={closeAllBar} className={`layer bg-gray-800/20 ${darkBG ? "block" : "hidden"}   w-[100vw] z-10  fixed top-0 left-0 right-0  h-[100vh]`}></div>





    </>
  )
}

export default NavBar
