import React from 'react'
import Rating from './Rating'
const DriverCard = ({name,rating,img,car}) => {
  return (
    <div className="driver-card">
      <img src={img} alt="" className="driver-img"></img>
      <h2 className="driver">{name}</h2>
      <Rating>{rating}</Rating>
      <p className="car-details">{car.model} - {car.licensePlate}</p>
    </div>
  )
}

export default DriverCard
