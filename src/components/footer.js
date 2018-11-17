import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
            <div className="footer-body row">
                <div className="contact-email col-4">
                    <h5>busines email</h5>
                    <Link className = "contacdt-link text-center" to = "/contact">theworkscardetail@gmail.com</Link>
                </div>
                <div className="social-media col-4">
                    <h5 className="contact-us">contact us:</h5>
                    
                </div>
                <div className="footer-number col-4">
                    <h5 className="number">business number</h5>
                    <h5>(951)449-6383</h5>
                </div>
                
            </div>
        )
    }
}

export default Footer;