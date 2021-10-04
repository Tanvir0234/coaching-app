import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';




const Navbar = () => {
    return ( 
        <div className="row back">
            <div className="col-md-2">
                <div className="container">
                <div className="logo-img d-flex">
                  
                    <h3 className="pt-3 text-white">edu</h3>
                </div>
                </div>
                
            </div>
            <div className="col-md-10">
                <div className="container">
                <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="links">
                  <li>Home</li>
                </Link>
                <Link to="/services" className="links">
                  <li>Services</li>
                </Link>
                <Link to="/about" className="links">
                  <li>About us</li>
                </Link>
                <Link to="/contact" className="links">
                  <li>Contact Us</li>
                </Link>
              </ul>
                </div>
            
            </div>

        </div>
    );
};

export default Navbar;