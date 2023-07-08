import React from 'react'
import { useState, useEffect } from 'react';

const PapWors = () => {

  const [papworsPerc, setPapworsPerc] = useState('');
  
    
  useEffect(() => {
    fetch('http://127.0.0.1:5000/papwors',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
       
      },
    })
      .then(response => response.json())
      .then(data => {
        setPapworsPerc(data['Percentage of people who like Pizza']);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <div>

      {papworsPerc ? (
        <p>Percentage of people who like Pap and Wors: {papworsPerc}%</p>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  )
}

export default PapWors