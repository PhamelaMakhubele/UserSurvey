import React from 'react'
//import {/*BrowserRouter as Router,*/ Routes, Route} from 'react-router-dom'
import OldestPerson from './OldestPerson'
import AverageAge from './AverageAge'
import TotSurvey from './TotSurvey'
//import YoungestPerson from './YoungestPerson'
//import Pizza from './Pizza'
/*import Pasta from './Pasta'
import PapWors from './PapWors'
import Eatout from './Eatout'
import WatchMovie from './WatchMovie'
import WatchTv from './WatchTv'
import ListenRadio from './ListenRadio'*/
import { useNavigate } from 'react-router-dom'
//import FoodRating from './FoodRating'
//import TableRating from './TableRating'

const ViewResults = () => {

  const navigate= useNavigate()
  const HandleOk=() => navigate("/", {replace:true})
  return (
    <div  className='form-container'>

  
      
       <TotSurvey/>
       <AverageAge/>
       <OldestPerson/>


       
      
  
        <button onClick={HandleOk}>Ok</button>
        
    </div>
  )
}

export default ViewResults
