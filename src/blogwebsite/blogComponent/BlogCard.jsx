import React from 'react'
import blogImg from '../image/post.jpg'
const BlogCard = () => {
  return (
    <div className='mt-1 w-full'>
      <div>
        <img src={blogImg} className='w-full h-full object-cover object-center rounded-md' alt="" />
      </div>
      {/* info  */}
      <div className='ps-5 pe-1'>
        <div className='text-center text-xs my-2 text-yellow-700 font-roboto'>
          <span className='mr-1.5'>Music</span>
          <span>Life</span>
        </div>
        <p className='sm:text-xl leading-4 font-poppines font-bold sm:leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos.
        </p>
        <p className='text-center text-xs my-2 font-lora text-gray-400'>1 hour ago</p>
        <p className='text-sm  sm:leading-5 font-roboto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia similique, voluptas enim esse doloremque in praesentium sunt accusamus veniam at illo et libero!</p>

      </div>
    </div>
  )
}

export default BlogCard
