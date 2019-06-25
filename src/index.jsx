import React from 'react';
import ReactDOM from 'react-dom';
import ProductView from './components/productview.jsx';

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesData: [],
      keyword: 'Computer',
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3005/product${window.location.href.split('/')[4] || 1}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, 'this is from component did mount in index.jsx');
        this.setState({
          imagesData: data
        })
        // console.log(data[0].productTag);
        // let imageSet = [];
        // for (let i = 0; i < data.length; i++) {
        //   if (data[i].productTag === this.state.keyword) {
        //     imageSet.push(data[i])
        //   }
        // }
        // console.log(imageSet);
        // this.setState({
        //   imagesData: imageSet
        // })
      })
  }

  // componentDidUpdate() {
  //   fetch('http://localhost:3005/data/grab', {
  //     method: 'GET',
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let imageSet = [];
  //       for (let i = 0; i < data.length; i++) {
  //         if (data[i].productTag === this.state.keyword) {
  //           imageSet.push(data[i])
  //         }
  //       }
  //       if (this.state.keyword != this.state.imagesData[0].productTag) {
  //         this.setState({
  //           imagesData: imageSet
  //         })
  //       }
  //     })
  // }

  handleSubmit(e) {
    this.setState({
      keyword: this.state.value
    })
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="nav"> I am a nav bar and I do nav bar things like search and home
          <form onSubmit={this.handleSubmit}>
            <label>
              Search
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
          </form>
        </div>
        <ProductView images={this.state.imagesData} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('photoapp'));