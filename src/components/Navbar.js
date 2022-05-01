import React,{useState} from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  
    const [click, Setclick]= useState(false);
    const handleClick=()=>
    {
      Setclick(!click)
    }
      return (
        <div className="nav">
          <div className='navbar-container'>
            <img className='nav-img' src=''/>
            <div className='menu-logo' onClick={handleClick}>
              <i className={click?"fa-solid fa-bars":'fa-solid fa-xmark'}/>
            </div>
            <ul>
              <li>
                <Link to='./home' className='nav-links'/>
              </li>
            </ul>
    
          </div>
         
        </div>
      );
    }



export default Navbar