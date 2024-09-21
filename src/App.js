import React, { useEffect } from 'react';
import GoldSilverRate from './GoldSilverRate';
import './App.css'; // Include your main CSS here

function App() {
  useEffect(() => {
    const audio = new Audio(); // Ensure to provide a correct path to your sound file
    audio.play();
  }, []);

  return (
    <div className="App">
      <h1>Gold and Silver</h1>
      <GoldSilverRate />
    </div>
  );
}

export default App;
