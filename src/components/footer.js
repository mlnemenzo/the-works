import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="footer-body row">
                <div className="contact-email col-4">business email</div>
                <div className="social-media col-4">media links</div>
                <div className="footer-number col-4">business number</div>
            </div>
        )
    }
}

export default Footer;