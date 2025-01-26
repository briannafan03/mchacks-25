/* global chrome */
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Fetch initial counter value from background or storage
    chrome.runtime.sendMessage({ action: 'getCounter' }, (response) => {
      if (response && response.count !== undefined) {
        setCounter(response.count);
      }
    });
  }, []);

  const incrementCounter = () => {
    chrome.runtime.sendMessage({ action: 'incrementCounter' }, (response) => {
      if (response && response.count !== undefined) {
        setCounter(response.count);
      }
    });
  };

  return (
    <div className="App">
      <h1>EcoCompute 🌿</h1>
      <p>Track your search activity efficiently!</p>
    </div>
  );
}

export default App;
