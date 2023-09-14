import React from 'react'
import { Link } from 'react-router-dom'
import { BsCodeSlash } from 'react-icons/bs'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

const ProjectBoxVid = ({ proj }) => {
  return (
    <div id={proj.id} className='w-[350px] m-4 z-10 group shadow-2xl dark:shadow-indigo-700/20 shadow-indigo-600/50 self-start  '  >

      <div
        target='_sachin'
        className="block rounded-lg bg-white dark:bg-transparent shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  relative  ">
        <div
          className="  overflow-hidden bg-cover bg-no-repeat"
        >

          <Video
            loop
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster={proj.imgUrl}
          >
            <source src={proj.videoUrl} type='video/webm' />
          </Video>




        </div>
        <div className="pt-6 pb-20 px-6 bg-white dark:bg-neutral-800" >
          <h5 data-aos="fade-down" data-aos-anchor-placement="bottom-bottom"
            className="mb-2 text-medium md:text-xl  font-medium leading-tight text-neutral-800 dark:text-slate-50 ">
            {proj.title}
          </h5>
          <p data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" className=" text-sm leading-relaxed md:text-base text-neutral-600 dark:text-slate-200 ">
            {proj.description}
          </p>

        </div>
        <div className='absolute bottom-2  right-3 flex justify-between  '>

          <Link to={proj.linkToCode} target='_sachin' className='group/icon border-2 dark:border-indigo-600 dark:text-white hover:border-transparent dark:hover:bg-indigo-600 border-amber-600/60 font-bold text-neutral-800 hover:text-white hover:bg-amber-600/80 transition text-sm lg:text-base px-2 py-1  rounded-sm space-x-2 lg:space-x-3 flex items-center '>
            <i className='text-amber-900 dark:text-indigo-300 group-hover/icon:text-white'> <BsCodeSlash /> </i>
            <span> view code </span>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default ProjectBoxVid
