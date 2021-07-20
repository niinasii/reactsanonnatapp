import React from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sanonnat App</h1>
        <h2>Lisää suosikkisi</h2>
      </header>
      <main>
        <QuoteBox />
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
