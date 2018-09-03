import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
            <div className="footer-body row">
                <div className="contact-email col-4">business email</div>
                <div className="social-media col-4">
                    <h5 className="contact-us">contact us:</h5>
                    <Link className = "contacdt-link text-center" to = "/contact">theworkscardetail@gmail.com</Link>
                </div>
                <div className="footer-number col-4">business number</div>
            </div>
        )
    }
}

export default Footer;