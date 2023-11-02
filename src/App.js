import React from 'react' 
import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
 

const App = () => {
  return (
    <div>
      <Router>
         
        <Routes>
          <Route path="/" element={<Home/>  } />
          <Route path='*' element={<h1 className='text-3xl sm:text-5xl lg:text-7xl text-center mt-4 sm:mt-28 dark:text-white text-neutral-800 font-bold'>Page not found</h1>} />
          {/* <Route path="/sign" element={<Signin/>  } /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
