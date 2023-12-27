import { useState, useEffect } from 'react'

import './App.css'



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [apiData, setApiData] = useState('');

  useEffect(() => {
    // Fetch data from the Spring Boot API
    fetch('http://localhost:8080/api/data')
      .then(response => response.text())
      .then(data => setApiData(data))
      .catch(error => console.error('Error fetching data:', error));

    // Implement logic to toggle dark mode and save it to localStorage
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    // Apply dark mode changes
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Raz</h1>
        <p>Code Daily</p>
    {darkMode == true ?     <button onClick={() => setDarkMode(!darkMode)}>
          Toggle light Mode
        </button> : <button onClick={() => setDarkMode(!darkMode)}>dark mode</button>}
        <p>{apiData}</p>
      </header>
    </div>
  );
}

export default App;