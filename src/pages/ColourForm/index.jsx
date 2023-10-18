import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ColourForm({ onAddColour }) {
  const [newColour, setNewColour] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddColour(newColour);
    setNewColour('');
    navigate('/Colours'); // Redirect to the Colours index
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new Colour"
        value={newColour}
        onChange={(e) => setNewColour(e.target.value)}
      />
      <button type="submit">Add Colour</button>
    </form>
  );
}

export default ColourForm;
