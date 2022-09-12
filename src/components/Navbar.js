import { Link } from "react-router-dom"; 
import { useState, useEffect } from "react"; 
import Button from "./Button"; 
import './Navbar.css'

function Navbar(){
    const [click, setClick] = useState(false) 
    const [button, setButton] = useState(true)
    function handleClick(){
        setClick(!click)
    } 
    function closeMobileMenu(){
        setClick(false)
    } 
    function showButton(){
        if (window.innerWidth <= 960){ 
            setButton(false)

        } else {
            setButton(true)
        }
    } 
    useEffect(() => {
        showButton()
    }, [])
    window.addEventListener('resize', showButton)
 return(
    <nav className="navbar"> 
        <div className="navbar-container"> 
            <Link to='/' className="navbar-logo" > 
             MyTravel <i className="fa fa-ravelry" aria-hidden="true"></i>
            </Link> 
            <div className="menu-icon" onClick={handleClick}> 
                <i className={ click ? 'fa fa-times':'fa fa-bars'}></i>

            </div> 
            <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                <li className="nav-item"> 
                    <Link to='/' className="nav-link" onClick={closeMobileMenu}> 
                    Home
                    </Link>

                </li> 
                <li className="nav-item"> 
                    <Link to='/services' className="nav-link" onClick={closeMobileMenu}> 
                    Services
                    </Link>

                </li> 
                <li className="nav-item"> 
                    <Link to='/products' className="nav-link" onClick={closeMobileMenu}> 
                    Products
                    </Link>

                </li> 
                <li className="nav-item"> 
                    <Link to='/sign-up' className="nav-link-mobile" onClick={closeMobileMenu}> 
                    Signup
                    </Link>

                </li>

            </ul> 
            {button && <Button  
                         buttonStyle='btn-outline'
                         >SIGN UP</Button>}

        </div>

    </nav>
 )
} 
export default Navbar