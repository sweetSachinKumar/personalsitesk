import React from 'react'

const NavBar = () => {
  return (
    <>
      <nav className=" z-50 bg-indigo-700 fixed top-0 left-0 right-0  ">
        <div className="flex justify-between items-center px-4 py-2 max-w-[1140px] m-auto">
          <div className="text-2xl text-white hover:ms-1  transition-all active:ms-0 cursor-pointer duration-150 ease-in font-poppins ">
            <span className='text-3xl tracking-wide text-indigo-200'>S</span>achin <span className='text-3xl tracking-wide text-indigo-200'>K</span>umar
          </div>

          <div className="absolute right-5">
            <button
              className="  px-2 text-neutral-300   hover:shadow-blue-700 hover:text-indigo-200  dark:text-neutral-200 md:hidden"
              type="button"
            >
              <span className="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7">
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
          <div>
            <ul className="md:flex md:static md:h-auto md:w-auto  md:py-0  md:space-x-4 text-base  text-indigo-50  cursor-pointer  absolute top-full -right-full transition duration-500 bg-indigo-800 md:bg-transparent h-[100vh] w-[260px] py-8   ">

              <li className="hover:text-indigo-200 md:m-0    m-2 px-4 ">Home</li>
              <li className="hover:text-indigo-200   m-2 px-4 md:m-0  " >Service</li>
              <li className="hover:text-indigo-200 md:m-0    m-2 px-4 ">Qualification</li>
              <li className="hover:text-indigo-200 md:m-0   m-2 px-4 ">Service</li>
              <li className="hover:text-indigo-200 md:m-0   m-2 px-4 ">project</li>
              <li className="hover:text-indigo-200 md:m-0   m-2 px-4 ">Contact</li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="layer bg-gray-800/20 hidden w-[100vw] z-0  absolute top-0 left-0  h-[100vh]"></div>





    </>
  )
}

export default NavBar
