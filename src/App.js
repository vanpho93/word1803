import React, { Component } from 'react';
import { WordList } from './WordList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <WordList />
      </div>
    );
  }
}

export default App;
