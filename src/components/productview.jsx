import React from 'react';

class ProductDisplay extends React.component {
  constructor() {
    super()
    this.state = {
      images: []
    }
  }

  

  render () {
    return (
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
    )
  }
}

export default ProductDisplay;