import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {


    render() {
        return(
            <div className="landing-page">
                <div className="landing-image"></div>
                <div className="appt">
                    <h3 className="make-appt text-center">MAKE AN APPOINTMENT NOW WITH OUR ONLINE FORM:</h3>
                    <Link className="make-appt-link nav-link nav-link-text boldLink" to = "/appointment">MAKE AN APPOINTMENT</Link>
                </div>
                <div className="why-choose col-10 offset-1">
                    <h2>WHY CHOOSE US?</h2>
                    <p>We are Certified Advance Auto Detailing and Auto Reconditioning Professionals.  We have extensive training and experience in the field of auto detailing, paint correction and R1 Ceramic Coatings.  We use eco-safe products and commercial grade equipment to ensure optimum results without harming the environment.  As an Auto Reconditioning Professional, we provide a systematic and efficient appropact to rejuvenate and protect various surfaces / components of your vehicle.</p>
                    <Link className = "about-link btn" to = "/about-us">READ MORE...</Link> 
                </div>
                <div className="vehicles-serviced col-10 offset-1">
                    <h2>VEHICLES SERVICED</h2>
                    <p className = "text-center">We provide top notch auto detailing and reconditioning services for all types of vehicles.</p>
                    <h4 className = "text-center">We cater to all types of vehicles...</h4>
                    <ul className = "text-center">
                        <li>Audi</li>
                        <li>Acura</li>
                        <li>BMW</li>
                        <li>Ford</li>
                        <li>GMC</li>
                    </ul>
                    <ul>
                        <li>Land Rover</li>
                        <li>Lexus</li>
                        <li>Lincoln</li>
                        <li>Mazda</li>
                        <li>Mercedes-Benz</li>
                    </ul>
                    <ul>
                        <li>Mercury</li>
                        <li>Mitsubishi</li>
                        <li>Nissan</li>
                        <li>Tesla</li>
                        <li>Toyota</li>
                    </ul>
                    <h4 className = "text-center">And more...</h4>
                </div>
                <div className= "services-landing col-1- offset-1 text-center">
                    <h2>OUR SERVICES</h2>
                    <p>We offer a full range of Auto Detailing and Auto Reconditioning to vehicle owners. Our professionals know how to handle a wide range of services.</p>
                    <div className="service-images">
                    </div>
                    <Link className = "about-link btn" to = "/services">VIEW ALL SERVICES</Link> 
                </div>
                <div className="disclaimer-landing">
                    <h2>The Works Auto Detailing And Reconditioning LLC</h2>
                    <Link className = "disclaimer-link text-center" to = "/disclaimer">guarantees & disclaimer</Link>
                </div>

            </div>
        )
    }
}

export default LandingPage;