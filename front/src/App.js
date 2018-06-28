import React, { Component } from 'react';
import './App.css';
import MapPark from './Components/MapPark';
import Filters from './Components/Filters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filters/>
        <MapPark/>
      </div>
    );
  }
}

export default App;
