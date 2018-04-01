import React, { Component } from 'react';
import { WordList } from './WordList';
import { MyInput } from './MyInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <WordList />
        {/* <MyInput /> */}
      </div>
    );
  }
}

export default App;
