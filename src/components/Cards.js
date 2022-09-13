import React from 'react'  
import CardItem from './CardItem' 
import './Cards.css'




function Cards(){ 
    const CARD_DETAILS = [{
        title: 'beach area', 
        src: 'images/boats.jpg',
        text: 'enjoy destinations with boats' 
        
    }, 
    {
        title: 'Snowy area',
        src: 'images/christmas.jpg',
        text: 'enjoy snowey destinations'
    }, 
    {
        title: 'Hot Air Ballon',
        src: 'images/hot-air-balloon.jpg',
        text: 'enjoy hot air rides' 
    }, 
    {
        title: 'Nature',
        src: 'images/nature2.jpg',
        text: 'enjoy nature areas'
    }, 
    {
        title: 'Savannah area',
        src: 'images/nature.jpg',
        text: 'enjoy savanah areas drstinations'
    }
]
    return (
        <div className='cards-content'> 
            <h1>Check out Epic Destinations</h1> 
             
               
             <ul className='cards'> 

               {
                CARD_DETAILS.map((detail) => (
                    <CardItem title={detail.title}
                      text={detail.text} 
                      src={detail.src} />
                ))
               }

             </ul>
            
           

        </div>
    )

} 
export default Cards