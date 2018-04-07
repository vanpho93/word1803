import React, { Component } from 'react';
import { WordList } from './WordList';
import { Parent } from './exam1';
// import { MyInput } from './MyInput';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        {/* <WordList /> */}
        {/* <MyInput /> */}
        <Parent />
      </div>
    );
  }
}

export default App;
