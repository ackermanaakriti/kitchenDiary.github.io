import React from 'react'
import './container.css'
import foodb from './bodyfood.jpeg'
import {LoremIpsum} from 'react-lorem-ipsum'

import Cards from './Cards'

function Container() {
  return (
   <>
   <div className='div-container'>
     <div className='card-container'>
       <div className='food-info'>
         <h1>Spaghetti with flavoured butter</h1>
       <p>
       Check the package directions of the spaghetti you plan to cook. On the box, there should be an approximate cook time for “al-dente,” which means the pasta will be tender, but not mushy. It will still have a bit of a bite, which is perfect.
   
       </p>
       <button className='recipe-btn'>FULL RECIPE..</button> 
       </div>
       <div className='img-container'>
      <img className='body-img' src={foodb}/>
      </div>
      
     </div>
    
   </div>
   </>
  )
}

export default Container