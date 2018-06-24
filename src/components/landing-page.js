import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {


    render() {
        return(
            <div className="landing-page">
                <div className="landing-image"></div>
                <div className="appt row">
                    <h3 className="make-appt">MAKE AN APPOINTMENT NOW WITH OUR ONLINE FORM</h3>
                    <Link className="nav-link nav-link-text boldLink" to = "/appointment">MAKE AN APPOINTMENT</Link>
                </div>
                    
                
            </div>
        )
    }
}

export default LandingPage;