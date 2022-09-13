import React from "react";  
//import { Link } from "react-router-dom";

function CardItem(props){
    return ( 
        <div>
            <li className="card-item"> 
                <div className="card">
              
              <img className="card_item_img" src={props.src} alt='travel-img'/>
           
              <div className="card_item_info">
                <h2>{props.title}</h2>
                <p className="card_item_text">{props.text}</p>
              </div> 
               </div>
               

            </li>
        </div>

    )
} 
export default CardItem