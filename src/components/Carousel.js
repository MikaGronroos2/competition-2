import React from 'react'

const Carousel = (props) => {
    const { images } = props;
    const [carouselIndex, setCarouselIndex] = React.useState(0);
    
    const indexUp = () => {
        setCarouselIndex(carouselIndex === images.length - 1 ? 0 : carouselIndex + 1)
    }

    const indexDown = () => {
        setCarouselIndex(carouselIndex === 0 ? images.length - 1 : carouselIndex - 1)
    }

  return (
    <div className='carousel'>
        <button onClick={indexDown}>Previous</button>
      <img src={images[carouselIndex]}></img>
      <button onClick={indexUp}>Next</button>
    </div>
  )
}

export default Carousel