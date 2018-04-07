import React, { Component } from 'react';
import { WordList } from './WordList';
import { Parent } from './exam1';
import { Root } from './learn-redux/Root';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        {/* <WordList /> */}
        {/* <MyInput /> */}
        <Root />
      </div>
    );
  }
}

export default App;
