import React from 'react'
import languageData from './sub-component/QualificationData'

const Qualification = () => {
    console.log(languageData)


    return (
        <section className='bg-pink-400/40 max-w-[1440px] mx-auto  my-12 py-12 rounded-md '>
            <h3 className='text-xl md:text-center text-indigo-800 font-semibold px-2  mb-4 md:text-3xl' >My Qualification</h3>
            <div>

                <div className='    justify-between flex flex-col  md:flex-row px-3'>

                    {/* right  */}
                    <div className='w-full h-full'>
                        <h4 className='text-xl md:text-2xl mb-3 text-blue-700 '> Languages i Know  </h4>


                        {/* myLanguages  */}



                        <div className='flex  flex-col space-y-3 text-neutral-600 font-bold'>

                            {
                                languageData.map(tech => {
                                    return (
                                        <>
                                            <div>
                                                <p>{tech.lang}</p>

                                                <div class="flex-start flex h-4 w-full overflow-hidden rounded border-2 border-gray-400 font-sans  text-xs font-medium">
                                                    <div
                                                        class="flex h-full items-baseline justify-center overflow-hidden break-all   text-indigo-800"
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



                        {/* left  */}
                        <div className='h-full w-full mt-4 md:mt-0 md:pl-8 text-neutral-700'>
                            <h5 className='text-xl mt-3 mb-1   md:text-2xl text-blue-700 '>Skills </h5>
                            <p className=' ps-2 leading-normal text-neutral-700 '>Front End web Developer</p>

                            <h5 className='text-xl mt-3 mb-1   md:text-2xl text-blue-700 '>Qualification </h5>
                            <ul className='px-2 leading-[1.3]'>
                                <li>12th pass</li>
                                <li>Pursuing BCA in 1st Year</li>
                            </ul>

                            <h5 className='text-xl mt-3 mb-1  md:text-2xl text-blue-700 '>Experince </h5>
                            <p className=' ps-2 leading-normal text-neutral-700 '>I am fresher</p>


                        </div>

                    </div>
                </div>
</div>
        </section>
    )
}

export default Qualification
