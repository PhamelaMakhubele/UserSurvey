import React, { useState, useEffect } from 'react';
//import YoungestPerson from './YoungestPerson';
//import TotSurvey from './TotSurvey';


const OldestPerson = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/oldestperson',{
      method:'GET',
      
      headers:{
        'Content-Type' : 'application/json'
      },
      
    } 
    )
    .then(res => res.json())
    .then(data => {
      setData(data);
      console.log(data)
    })
    .catch(error => {
      console.error('Errror fetching oldest person', error)
    })
  },[])


  return (
    <div>
      
      { !data ? (
            <p>Loading....</p>
        ) : (
           data.OldestPerson.map((OldestPerson, i) => (
            <p key={i}>Oldest person who participated in a survey: {OldestPerson}</p>
           ))
        )}
  
    </div>
  );
};

export default OldestPerson;