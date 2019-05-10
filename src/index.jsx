import React from 'react';
import ReactDOM from 'react-dom';

import "./styles.css";

class App extends React.component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <div id="all-image-container">
          <div id="image-album-column">
            <div id="one-image"> imageOne</div>
            <div id="one-image"> imageTwo</div>
            <div id="one-image"> imageThree</div>
            <div id="one-image"> imageFour</div>
            <div id="one-image"> imageFive</div>
          </div>
          <div id="selected-image-display"> i'm over here</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));