import React from 'react'
import { useState, useEffect } from 'react';


const TotSurvey = () => {

    const [TotalSurvey, setTotalSurvey] = useState('');
  
    
    useEffect(() => {
      fetch('http://localhost:5000/TotalSurveys',{
        method:'GET',
    
        headers:{
          'Content-Type': 'application/json',
          
        },
      })
        .then(response => response.json())
        .then(TotalSurvey => {
          setTotalSurvey(TotalSurvey);
          console.log(TotalSurvey)
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);


  return (
    <div>
       { !TotalSurvey ? (
            <p>Loading....</p>
        ) : (
           TotalSurvey.TotalSurvey.map((TotalSurvey, i) => (
            <p key={i}>Total number of surveys: {TotalSurvey}</p>
           ))
        )}



    </div>
  )
}

export default TotSurvey