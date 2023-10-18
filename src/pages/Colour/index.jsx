import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Colour({ colours }) {
  const { name } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };
  useEffect(() => {
    if (name) {
      const selectedColor = colours.find(color => color.name === name);

      if (!selectedColor) {
        navigate('/colours');
      } else {
        setItem(selectedColor);
        changeBackgroundColor(selectedColor.name)
      }
    }
  }, [colours, name, navigate]);
  document.body.style.backgroundColor = item ? item.name : 'white';
  return (
    <div>
      <button onClick={() => {navigate('/colours'); changeBackgroundColor('white');}}>Back to Colours</button>
      {item && <h1>{item.name}</h1>}
    </div>
  );
}

export default Colour;
