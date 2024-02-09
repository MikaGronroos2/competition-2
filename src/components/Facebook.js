import React from 'react'
import profiles from '../data/berlin.json'

const Facebook = () => {
    console.log(profiles)
  return (
    <div className="Facebook-container">
        {profiles.map((item, index) => (
            <div className='facebook' key={index}>
                <img className='facebook-img' src={item.img} />
                <p><b><strong>First Name: </strong></b>{item.firstName}</p>
                <p><b>Last Name: </b>{item.lastName}</p>
                <p><b>Country </b>{item.country}</p>
                <p><b>Type: </b>{item.isStudent === true ? 'Student' : 'Teacher'}</p>

            </div>
        ))}
    </div>
  )
}

export default Facebook
