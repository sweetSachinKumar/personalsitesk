import React from 'react'
import BlogHero from './BlogHero'
import BlogNav from './BlogNav'
import BlogCard from './BlogCard'
import BlogProvider from '../ContextBlog'
import SideNav from './SideNav'
const BlogHome = () => {
  return (
    <BlogProvider>
      <div>
        <BlogNav />
        <BlogHero />
        <div className='grid md:grid-cols-5 lg:grid-cols-7 m-2 '>

          <div className="  md:col-span-4 lg:col-span-5 xl:col-span-6 lg:grid-cols-4 md:grid-cols-3  grid grid-cols-2 gap-x-2 md:gap-x-4 gap-y-3 md:gap-y-6 xl:grid-cols-5 ">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className=' md:col-span-1 lg:col-span-2 xl:col-span-1 '>
            <SideNav />
          </div>
        </div>

      </div>
    </BlogProvider>
  )
}

export default BlogHome
