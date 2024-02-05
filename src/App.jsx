import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './StarshipCard.css'; 

import StarshipCard from './StarshipCard';

const App = () => {
 
  const swapiStarshipsEndpoint = 'https://swapi.dev/api/starships/';

 
  const [starships, setStarships] = useState([]);

  useEffect(() => {

    const fetchStarships = async () => {
      try {
        const response = await axios.get(swapiStarshipsEndpoint);
        
        setStarships(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStarships();
  }, []); 

  return (
    <div className="app">
      <h1> Welcome Starship Lovers!!</h1>
      {starships.map((starship, index) => (
        
        <StarshipCard key={index} starship={starship} />
      ))}
    </div>
  );
};

export default App;
