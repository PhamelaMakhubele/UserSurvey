import React from 'react'
import { useState, useEffect } from 'react';

const WatchMovie = () => {

    const [watchMovies, setWatchMovies] = useState('');
  
    
    useEffect(() => {
      fetch('http://127.0.0.1:5000/watchMovies',{
        method:'GET',
        
        headers:{
          'Content-Type': 'application/json',
          
        }
      })
        .then(response => response.json())
        .then(data => {
          setWatchMovies(data['People like to watch movies ']);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }, []);

  return (
    <div>

        {watchMovies ? (
        <p>People like to Watch Movies:{watchMovies}</p>
      ) : (
        <p>Loading...</p>
      )}


    </div>
  )
}

export default WatchMovie