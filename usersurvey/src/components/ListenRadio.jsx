import React from 'react'
import { useState, useEffect } from 'react';

const ListenRadio = () => {

    const [radioRating, setRadioRating] = useState('');
  
    
    useEffect(() => { 
      fetch('http://127.0.0.1:5000/listenRadio',{
        method:'GET',
        
        headers:{
          'Content-Type': 'application/json',
          
        }
      })
        .then(response => response.json())
        .then(data => {
          setRadioRating(data['People like to watch movies ']);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }, []);

  return (
    <div>

        {radioRating? (
        <p>People like to Watch Movies:{radioRating}</p>
      ) : (
        <p>Loading...</p>
      )}


    </div>
  )
}

export default ListenRadio