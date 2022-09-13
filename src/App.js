import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Navbar from './components/Navbar'; 
import Home from './components/pages/Home'; 
import Products from './components/pages/Products'; 
import Services from './components/pages/Services'; 
import Signup from './components/pages/Signup'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">  
    <Router>  
      <Navbar/>
     
      <Routes>  
      <Route path='/' element={ <Home/>}/> 
      <Route path='/products' element={ <Products/>}/> 
      <Route path='/services' element={ <Services/>}/> 
      <Route path='/sign-up' element={ <Signup/>}/>
     


      </Routes> 
      <Footer/>
     
      </Router>
      
   
      
     
    </div>
  );
}

export default App;
