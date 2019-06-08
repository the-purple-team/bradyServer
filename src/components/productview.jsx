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

  onHover(tag, link) {
    this.setState({
      firstInstance: true,
      mainImage: {
        src: link,
        tag: tag
      }
    })
  }

  render() {
    if (!this.props.images.length) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (
        <div id="all-image-container">
          <div id="image-album-column">
            {this.props.images.map((imageData, index) => {
              return (
                <img id="one-image" src={imageData.link} alt={imageData.productTag} key={index} onMouseOver={() => this.onHover(imageData.productTag, imageData.link)} />
              )
            })}
          </div>
          <img id="selected-image-display" src={this.state.mainImage.src || this.props.images[0].link} alt={this.state.mainImage.tag} />
        </div>
      )

    }
  }
}

export default ProductDisplay;