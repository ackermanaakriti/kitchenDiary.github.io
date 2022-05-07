import React from 'react'
import './container.css'
import food from './food.jpeg'

function Cards() {
  return (
    <div>
        <div className='mycard-container'>
        <div className= 'cards'>
            <div className='img-container'>
            <img  className='card-img' src={''}/>
            </div>
            <div className='cardinfo'>
            <h4>Chicken Curry </h4>
            <p>kdfkf kfjoif sdkjf dksfjidfj kdsf jlskjf sdjf lkjdfdsjkf</p>
            </div>
            <button className='btn'>Read more</button>

        </div>
        </div>
    </div>
  )
}

export default Cards