import React, { useEffect } from 'react'
import languageData from './sub-component/QualificationData'
import 'aos/dist/aos.css'
import Aos from 'aos'


const Qualification = () => {
    console.log(languageData)

useEffect(()=>{
    Aos.init({duration:2000})
})
    return (
        <section id='qualification' className='  '>
            <h3 className='text-xl md:text-center text-indigo-800 font-semibold pt-4 pb-8  mb-4 md:text-3xl dark:text-amber-200' >My Qualification</h3>
            <div>

                <div className='justify-between flex flex-col  md:flex-row px-3'>

                    {/* right  */}
                    <div className='w-full h-full'>
                        <h4 className='text-xl md:text-2xl mb-3 text-blue-700 dark:text-yellow-200 '> Languages i Know  </h4>


                        {/* myLanguages  */}

                        <div className='flex  flex-col  space-y-3 text-neutral-600  dark:text-slate-200 font-bold'>

                            {
                                languageData.map((tech,i) => {
                                    return (
                                        <>
                                            <div key={i+2000} >
                                             
                                                <p className='flex space-x-2 items-center'> <span className='text-xl md:text-2xl' style={{color:tech.iconColor}}  >{tech.icon}</span> <span> {tech.lang} </span>  </p>

                                                <div className="flex-start flex h-4 w-full overflow-hidden rounded border-2 border-gray-400 font-sans  text-xs font-medium">
                                                    <div  data-aos="zoom-in-right" data-aos-anchor-placement="bottom-bottom"
                                                        className="flex h-full items-baseline justify-center overflow-hidden break-all   text-indigo-800"
                                                        style={{ width: tech.complited, background: tech.bgColor }}
                                                    >

                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            } 
                        </div>
                        </div>


                        {/* left  */}
                        <div className='h-full w-full mt-4 md:mt-0 md:pl-8 text-neutral-800  dark:text-slate-200'>
                            <h5 className='text-xl mt-3 mb-1   md:text-2xl text-blue-700  dark:text-yellow-200'>Skills </h5>
                            <p  data-aos-anchor-placement="bottom-bottom" data-aos="zoom-in-right"  className=' ps-2 leading-normal '>Front End web Developer</p>
                            <p  data-aos-anchor-placement="bottom-bottom" data-aos="zoom-in-right"  className=' ps-2 leading-normal '>Back End web Developer</p>
                            <p  data-aos-anchor-placement="bottom-bottom" data-aos="zoom-in-right"  className=' ps-2 leading-normal '>Full stack web Developer</p>

                            <h5 className='text-xl mt-3 mb-1   md:text-2xl text-blue-700  dark:text-yellow-200'>Qualification </h5>
                            <ul className='px-2 leading-[1.3]'>
                                <li data-aos-anchor-placement="bottom-bottom" data-aos="zoom-in-right"  >12th pass</li>
                                <li data-aos-anchor-placement="bottom-bottom" data-aos="zoom-in-right" data-aos-duration="2200" >Pursuing BCA in 1st Year</li>
                            </ul>

                            <h5 className='text-xl mt-3 mb-1  md:text-2xl text-blue-700  dark:text-yellow-200 '>Experince </h5>
                            <p   data-aos="zoom-in-right" data-aos-anchor-placement="bottom-bottom" className=' ps-2 leading-normal  '>I am fresher</p>


                        </div>

                  
                </div>
</div>
        </section>
    )
}

export default Qualification
