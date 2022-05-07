import React from 'react'
import Teamcard from './teamcard'
import './team.css'

function Team() {
  return (
    <>
    <div className='wrapper'>
        <h2>Our team</h2>
        <div className='team'>
            <Teamcard/>
            <Teamcard/>
            <Teamcard/>
            
        </div>
    </div>
    </>
  )
}

export default Team