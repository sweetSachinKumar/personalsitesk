import React from 'react'

const SideBar = () => {
  return (
    <div className='fixed top-[53px] -left-full transition-all duration-500 shadow-sm' >
       <aside
  id="sidenav-8"
  className="bg-indigo-800 w-64 h-full text-white ">

<a href="# " className="flex items-center py-6 justify-center ">
  <img src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.png" className="w-6 mr-4" alt="" />
  <span>Sachin kumar sir </span>
</a>

<ul className="pb-6 px-1">
  <li>
    <a href="" className="flex items-center  text-gray-300 py-2 px-6 text-[.85rem] ">
       <span
          className="[&>svg]:w-4 [&>svg]:h-4 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3.5 w-3.5">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </span>
        <span className="" >overview</span>
    </a>
  </li>
  <li className="pt-4">
    <span className="text-[.7rem] font-bold text-indigo-100 tracking-wider px-4 py-4  "> Create</span>
    <ul>
      <li>
        <a href="#" className="flex items-center px-6 py-2 text-[.85rem] transition duration-300 ease-linear  hover:bg-gray-900/60 rounded-lg ">
           <span
          className="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-5 w-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
        <span>Project</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-900/60 text-[.85rem]  transition duration-300 ease-linear rounded-lg ">
           <span
          className="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-5 w-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
        <span>Database</span>
        </a>
      </li>
    </ul>
  </li>

  {/* <!-- 2nd  --> */}

  <li className="pt-4">
    <span className="text-[.7rem] font-bold text-indigo-100 tracking-wider px-4 py-4  "> Manage</span>
    <ul>
      <li>
        <a href="#" className="flex items-center px-6 py-2  transition duration-300 ease-linear text-[.85rem]  hover:bg-gray-900/60 rounded-lg ">
          <span
          className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3.5 w-3.5">
            <path
              d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
          </svg>
        </span>
        <span>Projects</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-900/60  text-[.85rem]  transition duration-300 ease-linear rounded-lg ">
           <span
          className="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3.5 w-3.5">
            <path
              d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
            <path
              d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
            <path
              d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
            <path
              d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
          </svg>
        </span>
        <span>Database</span>
        </a>
      </li>
    </ul>
  </li>

{/* <!-- 3rd --> */}
<li className="pt-4">
    <span className="text-[.7rem] font-bold text-indigo-100 tracking-wider px-4 py-4  "> Create</span>
    <ul>
      <li>
        <a href="#" className="flex items-center px-6 py-2 text-[.85rem] transition duration-300 ease-linear  hover:bg-gray-900/60 rounded-lg ">
           <span
          className="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-5 w-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
        <span>Project</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-900/60 text-[.85rem]  transition duration-300 ease-linear rounded-lg ">
           <span
          className="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-5 w-5">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
        <span>Database</span>
        </a>
      </li>
    </ul>
  </li>
</ul>

 </aside>
    </div>
  )
}

export default SideBar
