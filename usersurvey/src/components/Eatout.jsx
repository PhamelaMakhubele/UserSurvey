import React from 'react'
import { useState, useEffect } from 'react';

const Eatout = () => {

    const [eatoutRating, setEatoutRating] = useState('');
  
    
    useEffect(() => {
      fetch('http://127.0.0.1:5000/eatout',{
        method:'GET',
        
        headers:{
          'Content-Type': 'application/json',
          
        },
      })
        .then(response => response.json())
        .then(data => {
          setEatoutRating(data['People like to eat out']);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }, []);

  return (
    <div>

        {eatoutRating? (
        <p>People like to eat out:{eatoutRating}</p>
      ) : (
        <p>Loading...</p>
      )}


    </div>
  )
}

export default Eatout