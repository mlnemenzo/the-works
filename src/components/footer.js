import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
            <div className="footer-body row">
                <div className="contact-email col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <h5>busines email</h5>
                    <Link className = "contacdt-link text-center" to = "/contact">theworkscardetail@gmail.com</Link>
                </div>
                <div className="social-media col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <h5 className="contact-us">hours</h5>
                        <ul>
                            <li>Mon-Thurs: 9am - 5pm</li>
                            <li>Fri-Sat: By appointment only</li>
                            <li>Sunday: Closed</li>
                        </ul>
                </div>
                <div className="footer-number col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <h5 className="number">business number</h5>
                    <h5>(951)449-6383</h5>
                </div>
                
            </div>
        )
    }
}

export default Footer;