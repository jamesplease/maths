import React, { Component } from 'react';
import './app.css';
import Markdown from './common/markdown';
import introductionUrl from './guides/introduction.md';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Markdown markdownUrl={introductionUrl} />
      </div>
    );
  }
}

export default App;
