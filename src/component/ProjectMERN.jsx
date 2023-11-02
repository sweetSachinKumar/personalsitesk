import React from 'react'
import { Link } from 'react-router-dom'
import { BsCodeSlash } from 'react-icons/bs'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import MernThum from '../assets/merne-commerce.png'
import MernVideo from '../assets/storeMERN.mp4'

const ProjectMERN = () => {
    return (
        <div id='MernProject' className='lg:container max-w-[1800vw] mx-auto sm:w-[80vw] w-[90vw] py-24'>

            <h3 className='text-xl text-center py-8 md:text-center text-indigo-800  dark:text-amber-200 font-semibold  mb-4 md:text-3xl '>MERN Projects</h3>

            <div id="name" className='w-full max-w-xl mx-auto z-10 group shadow-xl dark:shadow-indigo-700/20 shadow-indigo-600/50 self-start'>

                <div target='_sachin'
                    className="block rounded-lg  bg-gray-100 dark:bg-neutral-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  relative   md:p-4">
                    <div className="  overflow-hidden bg-cover bg-no-repeat  flex-1">

                        <Video
                            loop
                            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                            poster={MernThum}
                        >
                            <source src={MernVideo} type='video/webm' />
                        </Video>

                    </div>
                    <div className=' flex-1 h-full w-full '>
                        <div className="mx-auto mt-5 h-full w-[90%] p-4">
                            <div className="flex flex-col sm:flex-row">
                                <h3 className="mb-1 text-base font-bold text-slate-700 dark:text-slate-200 sm:w-[66%] text-justify">This is e-comerce website. Fully responsive with all functionality. where you can add to cart and remove to cart after login or singin because without any token no one can some main functionality.</h3>
                                {/* <!-- Row 1 --> */}
                                <div className="sm:ps-5 ps-2 sm:mt-2 sm:ms-3">
                                    <h5 className="my-2 text-xl font-bold text-neutral-800 dark:text-neutral-100">Languages <span className="text-xs sm:text-base">I use in website</span> </h5>
                                    <div className="pb-2 ps-3">
                                        <h6 className="my-2 text-xl font-bold text-neutral-700 dark:text-neutral-200">FrontEnd:</h6>
                                        <ul className="space-y-1 px-5 text-xs dark:text-neutral-50">
                                            <li>HTML5</li>
                                            <li>CSS3</li>
                                            <li>JavaScript</li>
                                            <li>React js</li>
                                            <li>React redux</li>
                                            <li>Tailwind CSS</li>
                                        </ul>
                                    </div>
                                    <div className="py-2 ps-3">
                                        <h6 className="my-2 text-xl font-bold text-neutral-700 dark:text-neutral-200">BackEnd</h6>
                                        <ul className="space-y-1 px-5 text-xs  dark:text-neutral-50">
                                            <li>Nodejs</li>
                                            <li>Expressjs</li>
                                            <li>MongoDB</li>
                                            <li>Mongoose</li>
                                            <li>jwt</li>
                                            <li>Bycript</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='absolute bottom-2  right-3 flex justify-between  '>

                            <Link to='https://github.com/sweetSachinKumar/mystore' target='_sachin' className='group/icon border-2 dark:border-indigo-600 dark:text-white hover:border-transparent dark:hover:bg-indigo-600 border-amber-600/60 font-bold text-neutral-800 hover:text-white hover:bg-amber-600/80 transition text-sm lg:text-base px-2 py-1  rounded-sm space-x-2 lg:space-x-3 flex items-center '>
                                <i className='text-amber-900 dark:text-indigo-300 group-hover/icon:text-white'> <BsCodeSlash /> </i>
                                <span> view code </span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProjectMERN
