import React from 'react'
import { useState, useEffect } from 'react';

const Pasta = () => {

  const [pastaPerc, setPastaPerc] = useState('');
  
    
  useEffect(() => {
    fetch('http://127.0.0.1:5000/pasta',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
       
      },
    })
      .then(response => response.json())
      .then(data => {
        setPastaPerc(data['Percentage of people who like Pizza']);
        console.log(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <div>

      {pastaPerc ? (
        <p>Percentage of people who like Pizza: {pastaPerc}%</p>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  )
}

export default Pasta