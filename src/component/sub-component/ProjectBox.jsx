import React from 'react'
import { Link } from 'react-router-dom'
import { BsCodeSlash } from 'react-icons/bs'


const ProjectBox = ({ proj }) => {
    return (
        <div className='w-[350px] m-4 z-10 group shadow-2xl dark:shadow-indigo-700/20 shadow-indigo-600/50   relative '  >

            <div
                target='_sachin'
                className="block rounded-lg bg-white dark:bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  ">
                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat"
                >
                    <img
                        className="rounded-t-lg w-full h-full" data-aos="fade-down" data-aos-anchor-placement="bottom-bottom"
                        src={proj.imgUrl}
                        alt="" />
                    <Link to={proj.linkToSite} target='_sachin' >
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"></div>
                    </Link>
                </div>
                <div className="pt-6 pb-20 px-6 bg-white border-t-2 border-slate-400/60 dark:bg-neutral-800" >
                    <h5 data-aos="fade-down" data-aos-anchor-placement="bottom-bottom"
                        className="mb-2 text-medium md:text-xl  font-medium leading-tight text-neutral-800 dark:text-slate-50 ">
                        {proj.title}
                    </h5>
                    <p data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" className=" text-sm leading-relaxed md:text-base text-neutral-600 dark:text-slate-200 ">
                        {proj.description}
                    </p>

                </div>
                <div className='absolute bottom-2 left-3 right-3 flex justify-between  '>
                    <Link target='_sachin' to={proj.linkToSite} className=' text-sm lg:text-base px-2 py-1  rounded-sm  group/icon border-2 dark:border-indigo-600 dark:text-white hover:border-transparent dark:hover:bg-indigo-600 border-amber-600/60 font-semibold text-neutral-800 hover:text-white hover:bg-amber-600/80 transition'>go to Website</Link>
                    <Link to={proj.linkToCode} target='_sachin' className='group/icon border-2 dark:border-indigo-600 dark:text-white hover:border-transparent dark:hover:bg-indigo-600 border-amber-600/60 font-bold text-neutral-800 hover:text-white hover:bg-amber-600/80 transition text-sm lg:text-base px-2 py-1  rounded-sm space-x-2 lg:space-x-3 flex items-center '>
                        <i > <BsCodeSlash /> </i>
                        <span> view code </span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ProjectBox
