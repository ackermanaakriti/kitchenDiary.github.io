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
              <li>Home
                <Link to='./home' className='nav-links'/>
              </li>
              <li>Recipes
                <Link to='./home' className='nav-links'/>
              </li>
              <li>Features
                <Link to='./home' className='nav-links'/>
              </li>
              <li>About Us
                <Link to='./home' className='nav-links'/>
              </li>
            </ul>
    
          </div>
         
        </div>
      );
    }



export default Navbar