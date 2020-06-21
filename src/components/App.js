import React from 'react';
import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';
import ErrorBoundary from '../errors'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </ErrorBoundary>
    </div>
  );
}

export default App;
