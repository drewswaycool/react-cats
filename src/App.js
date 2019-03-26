import React, { Component } from 'react';
import logo from './logo.svg';
import Cat from './components/Cat';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Cat type="gif" text='clarissa' fontSize='50' color='green' size="400" filter="grayscale" />
      </div>
    );
  }
}

export default App;
