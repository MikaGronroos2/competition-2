import React from 'react'

const ClickablePicture = (props) => {
    const imgPath = "../images/" + props.img;
    const imgShadePath = "../images/" + props.imgClicked;
    const imgArray = [imgPath,imgShadePath];

    //State for picture change on click
    const [pictureIndex, setPicture] = React.useState(0);

    const handlePicture = () => {
        setPicture((pictureIndex + 1) % imgArray.length);
    };

  return (
    <div className='clickable-picture'>
      <img src={imgArray[pictureIndex]} onClick={handlePicture} className="click-pic"/>
    </div>
  )
}

export default ClickablePicture
