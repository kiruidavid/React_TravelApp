import React from "react"; 
import {Link} from "react-router-dom" 
import './Footer.css'

function Footer(){ 
    return (
    <div className="footer-container"> 
        <div className="footer-links">  
           <div className="footer-link-wrapper">
            <div className="footer-links-items">
             <h2>About Us</h2> 
             <Link to='/'>Testimonials</Link> 
             <Link to='/'>Careers</Link> 
             <Link to='/'>Investors</Link> 
             <Link to='/'>Terms and Service</Link> 
            
            </div> 
            <div className="footer-links-items">
             <h2>Contact Us</h2> 
             <Link to='/'>Contact</Link> 
             <Link to='/'>Support</Link> 
             <Link to='/'>Destinations</Link> 
             <Link to='/'>Sponsorships</Link> 
            
            </div>

        </div> 
        <div className="footer-link-wrapper">
            <div className="footer-links-items">
             <h2>Videos</h2> 
             <Link to='/'>Submit Video</Link> 
             <Link to='/'>Ambassadors</Link> 
             <Link to='/'>Agency</Link> 
             <Link to='/'>Influencer</Link> 
            
            </div> 
            <div className="footer-links-items">
             <h2>Social Media</h2> 
             <Link to='/'>Instagram</Link> 
             <Link to='/'>Facebook</Link> 
             <Link to='/'>Youtube</Link> 
             <Link to='/'>Twitter</Link> 
            
            </div>

        </div> 
        </div> 
        <section className="social-media"> 
            <div className="social-media-wrap"> 
                <div className="footer-logo"> 
                    <Link to='/' className="social-logo"> 
                    MyTravel <i className="fa fa-ravelry"/>
                    </Link>

                </div> 
                <small className="website-rights">MyTravel &copy; 2022</small>
                <div className="social-icons"> 
                    <Link
                    className="social-icon-link facebook"
                    to="/" 
                    target="_blank"
                    aria-label="Facebook"> 
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    </Link> 
                    <Link
                    className="social-icon-link instagram"
                    to="/" 
                    target="_blank"
                    aria-label="Instagram"> 
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    </Link> 
                    <Link
                    className="social-icon-link twitter"
                    to="/" 
                    target="_blank"
                    aria-label="Twitter"> 
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    </Link> 
                    <Link
                    className="social-icon-link youtube"
                    to="/" 
                    target="_blank"
                    aria-label="Youtube"> 
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </Link>

                </div>

            </div>

        </section>

    </div>
    )

} 
export default Footer