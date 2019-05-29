import React from 'react';

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.onHover = this.onHover.bind(this)
    this.state = {
      firstInstance: false,
      mainImage: {
        src: '',
        tag: ''
      }
    }
  }

  itemZoom() {

  }
  onHover(tag, link) {
    console.log(link, tag)
    this.setState({
      firstInstance: true,
      mainImage: {
        src: link,
        tag: tag
      }
    })
    console.log(this.state)
  }

  render() {
    if (!this.props.images.length) {
      return (
        <div>Loading...</div>
      )
    } else if (!this.state.firstInstance){
      return (
        <div id="all-image-container">
          <div id="image-album-column">
            {this.props.images.map((imageData, index) => {
              return (
                <img id="one-image" src={imageData.link} alt={imageData.productTag} key={index} onMouseOver={()=>this.onHover(imageData.productTag, imageData.link)}/>
              )
            })}
          </div>
          <img id="selected-image-display" src={this.props.images[0].link} alt={this.props.images[0].productTag} />
        </div>
      )
    } else {
      return (
        <div id="all-image-container">
          <div id="image-album-column">
            {this.props.images.map((imageData, index) => {
              return (
                <img id="one-image" src={imageData.link} alt={imageData.productTag} key={index} onMouseOver={()=>this.onHover(imageData.productTag, imageData.link)}/>
              )
            })}
          </div>
          <img id="selected-image-display" src={this.state.mainImage.src} alt={this.state.mainImage.tag} />
        </div>
      )

    }
  }
}

export default ProductDisplay;