import React from 'react'
import './container.css'
import food from './food.jpeg'

function Cards() {
  return (
    <div>
        <div className='mycards'>
         <div className='img-container'>
         <img className='food-image' src={food}/>
         </div>
         <h2>Pancake</h2>
         <h4></h4>
       </div>
    </div>
  )
}

export default Cards