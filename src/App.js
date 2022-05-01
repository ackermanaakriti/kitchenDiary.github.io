import { Routes, Router,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
     </Router>
     <Routes>

     </Routes>
    </div>
  );
}

export default App;
