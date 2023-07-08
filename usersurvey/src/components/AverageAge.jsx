import React from 'react'
import { useState, useEffect } from 'react';

const AverageAge = () => {

    const [averageAge, setAverageAge] = useState('');
  
    
    useEffect(() => {
      fetch('http://127.0.0.1:5000/AverageAge',{
        method:'GET',
        
        headers:{
          'Content-Type': 'application/json',
          
        },
      })
        .then(res => res.json())
        .then(averageAge => {
          setAverageAge(averageAge);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }, []);

  return (
    <div>

      { !averageAge ? (
            <p>Loading....</p>
        ) : (
           averageAge.AverageAge.map((AverageAge, i) => (
            <p key={i}>Average Age: {AverageAge}</p>
           ))
        )}

    

    </div>
  )
}

export default AverageAge