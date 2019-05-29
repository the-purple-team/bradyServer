import React from 'react';
import ReactDOM from 'react-dom';
import ProductView from './components/productview.jsx';

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesData: [],
      keyword: 'volleyball'
    }
  }

  componentDidMount() {
    fetch('/data/grab', {
      method: 'GET',
      headers: {
        "Content-Type": "application/jason"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        let imageSet = [];
        for(let i = 0; i < data.length; i++) {
          if(data[i].productTag === this.state.keyword) {
            imageSet.push(data[i])
          }
        }
        console.log(imageSet);
        this.setState({
          imagesData: imageSet
        })
      })
  }

  render() {
    return (
      <div>
        <div className="nav"> I am a nav bar and I do nav bar things like search and home</div>
        <ProductView images={this.state.imagesData}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));