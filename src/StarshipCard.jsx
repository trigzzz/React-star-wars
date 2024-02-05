import React from 'react';

const StarshipCard = ({ starship }) => {
  const { name, model, manufacturer, passengers, crew, hyperdrive_rating } = starship;

  return (
    <div className="starship-card-container">
      <div className="starship-card">
        <h3>{name}</h3>
        <p><strong>Model:</strong> {model}</p>
        <p><strong>Manufacturer:</strong> {manufacturer}</p>
        <p><strong>Passengers:</strong> {passengers}</p>
        <p><strong>Crew:</strong> {crew}</p>
        <p><strong>Hyperdrive Rating:</strong> {hyperdrive_rating}</p>
       
      </div>
    </div>
  );
};

export default StarshipCard;
