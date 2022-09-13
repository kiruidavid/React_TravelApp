import React from "react"; 
import Button from "./Button";
import './HeroSection.css' 
import '../App.css'
function HeroSection(){
    return(
    <div className="hero-container"> 
        <h3>ADVENTURE AWAITS</h3> 
        <p>What are you waiting for</p> 
        <div className="hero-btns">
        <Button buttonStyle='btn-outline' buttonSize='btn-large'>GET STARTED</Button> 
        <Button buttonStyle='btn-primary' buttonSize='btn-large'>PLAY TRAILER</Button> 
        </div>
        

    </div> 
    )

} 
export default HeroSection;