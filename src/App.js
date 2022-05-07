import { Routes, Router } from 'react-router-dom';
import './App.css';
import Cardcontainer from './components/Cardcontainer';
import Container from './components/Container';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
    
    <Navbar/>
  <Container/>
  <Cardcontainer/>
     <Routes>
    
     </Routes>
     </>
  );
}

export default App;
