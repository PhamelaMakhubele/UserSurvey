import React from 'react'
import PropTypes from 'prop-types'
//import TakeSurvey from './TakeSurvey'
import { useNavigate } from 'react-router-dom'
//import { useState } from 'react'




const Home = ({color, label1, label2}) => {
  
  const navigate= useNavigate()
  const HandleSurvey= () => navigate("/TakeSurvey", {replace: true})
  const HandleResults=() => navigate("/ViewResult", {replace:true})


  

  return (
    <div className='button-container'>

    <button style={{background: color}} onClick={HandleSurvey} className='primary'>{label1}</button>
      <button style={{background: color}} onClick={HandleResults} className='primary'>{label2}</button>
       
    </div>
  )
}

Home.defaultProps={
  color: 'white',
  label1: 'Fill out survey',
  label2: "View survey results"

}
Home.propTypes={
  color:PropTypes.string,
  label1:PropTypes.string,
  label2:PropTypes.string,
  onClick:PropTypes.func
  

}





export default Home