import React, { useEffect } from 'react'
import myProject from './sub-component/ProjectData' 
import { myProjectVid } from './sub-component/ProjectData'
import 'aos/dist/aos.css'
import Aos from 'aos'
import ProjectBox from './sub-component/ProjectBox'

import ProjectBoxVid from './sub-component/ProjectBoxVid'

console.log(myProject)


const Projects = () => {

    useEffect(() => {
        Aos.init({ duration: 500 })
    })
    return (
        <section id='project' className=' ' >

            <h3 className='text-xl md:text-center text-indigo-800  dark:text-amber-200 font-semibold px-2  mb-4 md:text-3xl '>My Projects <small>on react js</small></h3>
            {/* Row 1 */}
            <div className='flex items-center justify-center flex-wrap pt-3 space-y-12  lg:space-y-0 md:space-x-6 relative '>
                {/* box  */}

                {
                    myProject.map(proj => {
                        return (
                    <ProjectBox proj={proj}  key={proj.description}/>
                        )
                    })

                }


            </div>
            {/* row 2  */}
            <div id='reactPojs' className='flex items-center justify-center flex-wrap pt-6 space-y-12  lg:space-y-0 md:space-x-6  '>
                {/* box  */}
                    {
                        myProjectVid.map(proj => {
                            return <ProjectBoxVid proj={proj} key={proj.title} />
                        })
                    }
                    
           

            </div>
        </section>
    )
}

export default Projects
