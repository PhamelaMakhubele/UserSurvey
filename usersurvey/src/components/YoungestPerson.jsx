import React, { useState, useEffect } from 'react';

const YoungestPerson= () => {
    const [data, setData] = useState('');
  
    
    useEffect(() => {
      fetch('http://127.0.0.1:5000/youngestperson',{
        method:'GET',
      
        headers:{
          'Content-Type': 'application/json',
          
        },
      })
        .then(res => res.json())
        .then(youngestPerson => {
          setData(youngestPerson);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);
  
    return (
      <div>

        { !data ? (
            <p>Loading....</p>
           ) : (
           data.YoungestPerson.map((YoungestPerson, i) => (
            <p key={i}>Youngest person who participated in a survey: {YoungestPerson}</p>
           ))
        )}

        
      
      </div>
        
        
      
    );
  }
  



export default YoungestPerson;