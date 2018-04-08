import React, { Component } from 'react';
import { WordList } from './WordList';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Provider store={store}>
          <WordList />
        </Provider>
      </div>
    );
  }
}

export default App;
