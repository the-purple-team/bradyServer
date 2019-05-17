import React from 'react';
import ReactDOM from 'react-dom';
import ProductView from './components/productview.jsx';

import "./styles.css";

class App extends React.component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>hello world</div>
        <ProductView />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));