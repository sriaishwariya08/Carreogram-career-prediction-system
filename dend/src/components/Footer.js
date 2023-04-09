import "./FooterStyles.css"
import React from 'react'

import { Link } from "react-router-dom";

import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
   return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight: "2rem"}}/>
                    <div><h4>
                        <p>Career Recommendation Service</p>
                        <p>Chennai</p></h4>
                    </div>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem"}}/>
                1-2323-343-23</h4>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{ color:"#fff", marginRight: "2rem"}}/>
                info@email.com</h4>
                </div>
            </div>
            
            <div className="right">
            <div className="About">
                <h4><Link to="/About">About Us</Link></h4>
            <h4>We "CAREOGRAM" assist students identify their ideal careers or professions based on their interests and skillsets possesed. Through our service we connect with students and help them have a better understanding on themselves.</h4>
            </div>
            <div className="social">
            <FaFacebook size={30} style={{ color:"#fff", marginRight: "1rem"}}/>
            <FaTwitter size={30} style={{ color:"#fff", marginRight: "1rem"}}/>
            <FaLinkedin size={30} style={{ color:"#fff", marginRight: "1rem"}}/>
            </div>
            </div>
        </div>
    </div>

   );
};

export default Footer