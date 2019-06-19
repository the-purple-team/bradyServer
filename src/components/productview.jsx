import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

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

          <ReactImageMagnify {...{
            smallImage: {
              src: this.state.mainImage.src || this.props.images[0].link,
              // width: 280,
              // height: 280,
              isFluidWidth: true,
            },
            largeImage: {
              src: this.state.mainImage.src || this.props.images[0].link,
              width: 1500,
              height: 1500
            },
            className: 'a-image-zoom-conatainer',
            enlargedImageContainerClassName: 'large-image-container',
            enlargedImageClassName: 'large-image'
          }} />
        </div>
      )

    }
  }
}

export default ProductDisplay;