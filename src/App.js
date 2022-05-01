import React ,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
const[click, Setclick]= useState(false);
  return (
    <div className="nav">
      <div className='navbar-container'>
        <img className='nav-img' src=''/>
        <div className='menu-logo' onClick=''>
          <i className={click?}


        </div>

      </div>
     
    </div>
  );
}

export default App;
