import React from 'react'
import Cards from './Cards'

function Cardcontainer() {
  return (
   <>
   <div className='card-container'>
     <h1>Popular food</h1>
     <div className='cards'> 
     <Cards/>

     </div>
   </div>
   </>
  )
}

export default Cardcontainer