import Nav from './Nav';
import { Home, About, Colours, Colour } from './pages';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';

function App() {
  const [colours, setColours] = useState([
    {
      id: 1,
      name: "red",
    },
    {
      id: 2,
      name: "blue",
    },
    {
      id: 3,
      name: "green",
    },
    {
      id: 4,
      name: "orange",
    },
    {
      id: 5,
      name: "purple",
    },
  ]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Colours" element={<Colours colours={colours} setColours={setColours}/>} />
          <Route path="/Colours/:name" element={<Colour colours={colours}/>} />
          <Route path="/Colours/new" element={<Colour colours={colours}/>} />
          <Route path='*' element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;