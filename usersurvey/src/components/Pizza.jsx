import React from 'react'
import { useState, useEffect } from 'react';

const Pizza = () => {

  const [pizzaPerc, setPizzaPerc] = useState('');
  
    
  useEffect(() => {
    fetch('http://127.0.0.1:5000/pizza',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
       
      },
    })
      .then(response => response.json())
      .then(data => {
        setPizzaPerc(data['Percentage of people who like Pizza']);
      })
      .catch(error => console.log(error))
  }, []);
  return (
    <div>
      {pizzaPerc ? (
        <p>Percentage of people who like Pizza: {pizzaPerc} %</p>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  )
}

export default Pizza