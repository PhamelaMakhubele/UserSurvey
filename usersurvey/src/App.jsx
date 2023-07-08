import React from 'react'
import Home from './components/Home'
import TakeSurvey from './components/TakeSurvey'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import { useState } from 'react'
import ViewResults from './components/ViewResults'
//import YoungestPerson from './components/YoungestPerson'
//import Users from './components/Users'


const App = () => {
  

  
  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/TakeSurvey' element={<TakeSurvey/>}/>
          <Route path='/ViewResult/*' element={<ViewResults/>}/>
        </Routes>
      </Router>
      
      
    
  
    </div>
  )
}

export default App
