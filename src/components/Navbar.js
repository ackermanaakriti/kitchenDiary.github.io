import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import navlogo from './logo.png'
import './navbar.css'


function Navbar() {
  
    const [click, Setclick]= useState(false);
    const handleClick=()=>
    {
      Setclick(!click)
    }
      return (
        <div className="nav">
          <div className='navbar-container'>
            <img className='nav-img' src={navlogo}/>
            <p className='logo-p'>KitchenDiary</p>
            
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
            <div className='menu-logo' onClick={handleClick}>
              <i className={click?'fas fa-times':'fas fa-bars'}/>
            </div>
    
          </div>
         
        </div>
      );
    }



export default Navbar