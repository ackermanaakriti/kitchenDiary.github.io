import React from 'react'
import './container.css'
import foodb from './bodyfood.jpeg'
import {LoremIpsum} from 'react-lorem-ipsum'

import Cards from './Cards'

function Container() {
  return (
   <>
   <div className='div-container'>
     <div className='mycard-container'>
       <div className='food-info'>
         <h1>FOOD AND RECIPES</h1>
         <h2>Best food for your test</h2>
     
       <div className='search-container'>
         <input className='search-input' placeholder='search everything you want'/>
       <button className='recipe-btn'  type='search'>SEARCH</button> 
       </div>
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