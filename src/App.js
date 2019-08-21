import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './App.css';

function App() {
  return (
    <div className="App">
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
        <Box component="span" m={1}>
          <Button />
        </Box>
        <Box color="text.primary" clone>
          <Button variant="contained" color="primary">
            你好，世界
          </Button>
        </Box>
      </header>  
    </div>
  );
}

export default App;
