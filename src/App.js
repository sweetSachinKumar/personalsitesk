import React from 'react' 
import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
 

const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <Router>
         
        <Routes>
          <Route path="/" element={<Home/>  } />
          {/* <Route path="/sign" element={<Signin/>  } /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
