import React from 'react'
import { Link } from 'react-router-dom'
import EcomerImg from '../img/ecomerce.webp'
import BeachImg from '../img/beach.webp'

const Projects = () => {
    return (
        <section id='project' className='bg-indigo-400/70 py-16 my-12 max-w-[1440px] mx-auto rounded-md' >

            <h3 className='text-xl md:text-center text-indigo-800 font-semibold px-2  mb-4 md:text-3xl'>My Projects <small>on react js</small></h3>
            {/* Row 1 */}
            <div className='flex items-center justify-center flex-wrap pt-3 space-y-5  md:space-y-0 md:space-x-6 '>
                {/* box  */}
                <div className='w-[350px] m-4 group '>
                    <Link to="https://myecomercestore.netlify.app/"
                    target='_sachin'
                        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div
                            className="relative overflow-hidden bg-cover bg-no-repeat"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <img
                                className="rounded-t-lg w-full h-full"
                                src={EcomerImg}
                                alt="" />
                            <Link to="https://myecomercestore.netlify.app/" target='_sachin' >
                                <div
                                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"></div>
                            </Link>
                        </div>
                        <div className="p-6">
                            <h5
                                className="mb-2 text-medium md:text-xl  font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                mini E-Comerce Website 
                            </h5>
                            <p className="mb-4 text-sm leading-relaxed md:text-base text-neutral-600 dark:text-neutral-200">
                                its feature is that you can store products on cart. increase and decrease functionality of no. of products. 
                                product also can deleted on cart  
                            </p>
                        </div>
                    </Link>
                </div>

                <div className='w-[350px] m-4 group '>
                    <Link to="https://beachtraval.netlify.app/"
                    target='_sachin'
                        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div
                            className="relative overflow-hidden bg-cover bg-no-repeat" >
                            <img

                                className="rounded-t-lg h-full w-full "
                                src={BeachImg}
                                alt="" />
                            <Link to="https://beachtraval.netlify.app/"  target='_sachin' >
                                <div
                                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-100"></div>
                            </Link>
                        </div>
                        <div className="p-6">
                            <h5
                                className="mb-2 md:text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-base">
                               Trip website 
                            </h5>
                            <p className="mb-4 md:text-base text-neutral-600 dark:text-neutral-200 text-sm leading-relaxed">
                                Just website design. there is no any functionality of this website. i foucs on website design.
                            </p>
                           
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Projects
