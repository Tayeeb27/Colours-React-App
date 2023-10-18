import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ColourForm from '../ColourForm';
function Colours({ colours, setColours }) {
  const addColour = (newColour) => {
    // Create a new Colour object and add it to the list
    const Colour = {
      id: colours.length + 1, // Generate a unique id
      name: newColour,
    };
    setColours([Colour, ...colours]); // Add the new Colour to the top of the list
  };

  return (
    <div>
      <h1>Colours Page</h1>
      <div>
        {colours.map((el) => (
          <p key={el.id} style={{ color: el.name }}>
            <Link to={`/Colours/${el.name}`}>{el.name}</Link>
          </p>
        ))}
      </div>
      <ColourForm onAddColour={addColour} /> {/* Render the NewColourForm */}
    </div>
  );
}

export default Colours;