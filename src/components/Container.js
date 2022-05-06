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
       <p>

lorem
       </p>
       <div className='img-container'>
      <img className='body-img' src={foodb}/>
      </div>

     </div>
   </div>
   </>
  )
}

export default Container