import React from 'react'
import './container.css'
import food from './food.jpeg'

function Container() {
  return (
   <>
   <div className='div-container'>
     <div className='card-container'>
       <div className='mycards'>
         <img className='food-image' src={food}/>
         <h2>Pancake</h2>
         <h4></h4>
       </div>

     </div>
   </div>
   </>
  )
}

export default Container