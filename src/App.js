// App.js
import React, { useEffect, useState } from 'react';
import DragableDiv from './components/DragableDiv';
import DropZone from './components/DropZone';
import './App.css'
import DiscoveredMolecules from './components/DiscoveredMolecules';

const App = () => {
  const [combinedDiv, setCombinedDiv] = useState('');

  const handleCombine = (name) => {
    setCombinedDiv(name);
  };

  useEffect(() => {
    if (!localStorage.getItem('discovered')) {
      localStorage.setItem('discovered', '')
    }
  }, [])

  return (
    <div>
      <div className='elements'>
        <DragableDiv name="O" />
        <DragableDiv name="C" />
        <DragableDiv name="H" />
        {/* <DragableDiv name="F" /> */}
        <DragableDiv name="Cl" />
        <DragableDiv name="Na" />
        {/* <DragableDiv name="K" /> */}
        {/* <DragableDiv name="Mg" /> */}
        <DragableDiv name="S" />
      </div>
      {/* Add more draggable divs for other elements here */}
      <br />
      <DropZone onCombine={handleCombine} />
      <br />
      {combinedDiv && <div>Combined: {combinedDiv}</div>}
      <br />
      <DiscoveredMolecules />
    </div>
  );
};

export default App;
