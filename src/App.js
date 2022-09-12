import { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App"> 
      <Router> 
      <Navbar/>  
      <Routes>
        <Route path='/' exact>

        </Route>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
