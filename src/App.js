import React from 'react';
import logo from './Raspberry.svg';
import './App.css';
import QuoteBox from './components/QuoteBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Harjoitus</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <QuoteBox />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
