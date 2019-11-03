import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Filterbar from './components/layout/filterbar';
import Dashboard from './components/layout/Dashboard';

function App() {
  return (
    <div className="App">
      <Filterbar></Filterbar>
      <div className="container"><Dashboard></Dashboard></div>
    </div>
  );
}

export default App;
