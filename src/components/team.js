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
    <div className='contactus'>
        <h3> ASK US ANYTHING</h3>
        <input type='text' placeholder='your question or feedback'></input>
        <button type='submit'> Submit</button>
    </div>
    </div>
    </>
  )
}

export default Team