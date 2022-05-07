import { Routes, Router } from 'react-router-dom';
import './App.css';
import Cardcontainer from './components/Cardcontainer';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Team from './components/team';
import Footer from './components/footer'

function App() {
  return (
   <>
    
    <Navbar/>
  <Container/>
  <Cardcontainer/>
 <Team/>
 <Footer/>
     <Routes>
    
     </Routes>
     </>
  );
}

export default App;
