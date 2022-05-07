import React from 'react'
import './team.css'
import chef from './santosh.jpeg'

function Teamcard() {
  return (
    <>
    <div className='team-member'>
        <img className='team-img' src={chef}/>
             <div className='teaminfo'>
                <h3>Santosh Shah</h3>
                
                <p>Santosh worked at some of famous Indian restaurants in London including Dishoom and Michelin-starred Benares,[9] before becoming a sous-chef at Chef Vivek Singh’s Westminster hot spot, The Cinnamon Club.[2] Santosh worked at The Cinnamon Club for several years, before eventually becoming Head Chef at its sister restaurant, Cinnamon Kitchen, in the City.[11]
                </p>
                </div>
            </div>
    </>
  )
}

export default Teamcard