import React, { Component } from 'react';

import Navigation from "./components/Navigation"
import Main from "./components/Main"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
