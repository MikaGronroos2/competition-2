import React from 'react'

const LikeButton = () => {
    const colorArray = ['purple','blue','green','yellow','orange','red']
    const [colorIndex, setColorIndex] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const handleLike = () => {
        setCount(count+1);
        setColorIndex((colorIndex + 1) % colorArray.length);
    }

    const buttonStyle = { background: colorArray[colorIndex]};
  return (
    <div className='like--button'>
      <button style={buttonStyle} className="like-button" onClick={handleLike}>{count} Likes</button>
    </div>
  )
}

export default LikeButton
