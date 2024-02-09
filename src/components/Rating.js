import React from 'react'


const Rating = (props) => {
    const zeroRating = ["☆","☆","☆","☆","☆"];
    let newArray = [...zeroRating];
    const star = "★";
    const roundedRating = Math.round(props.children);
    for (let i = 0; i < roundedRating; i++) {
         newArray[i] = star;
    }

  return (
    <div className="stars">
        {newArray.map((item, index) => (
            <span className='star-font' key={index}>{item}</span>
        ))}
    </div>
  )
}

export default Rating
