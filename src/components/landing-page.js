import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import landing from '../assets/images/landing_banner.jpg';


class LandingPage extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div className="landing-page">
                <div className="landing-image">
                    <img src={landing} alt = "img not available"/>
                </div>
                <div className="appt">
                    <h3 className="make-appt text-center">MAKE AN APPOINTMENT NOW WITH OUR ONLINE FORM:</h3>
                    <Link className="make-appt-link nav-link nav-link-text boldLink" to = "/appointment">MAKE AN APPOINTMENT</Link>
                </div>
                <div className="why-choose col-10 offset-1">
                    <h2>WHY CHOOSE US?</h2>
                    <p>We are Certified Advance Auto Detailing and Auto Reconditioning Professionals.  We have extensive training and experience in the field of auto detailing, paint correction and R1 Ceramic Coatings.  We use eco-safe products and commercial grade equipment to ensure optimum results without harming the environment.  As an Auto Reconditioning Professional, we provide a systematic and efficient appropact to rejuvenate and protect various surfaces / components of your vehicle.</p>
                    <Link className = "about-link nav-link" to = "/about-us">READ MORE...</Link> 
                </div>
                <div className="vehicles-serviced row col-10 offset-1">
                    <h2 className="text-center col-12">VEHICLES SERVICED</h2>
                    <p className = "text-center col-12">We provide top notch auto detailing and reconditioning services for all types of vehicles.</p>
                    <h4 className = "text-center col-12">We cater to all types of vehicles...</h4>
                    <ul className = "text-center col-3">
                        <li>Audi</li>
                        <li>Acura</li>
                        <li>BMW</li>
                        <li>Chevorlet</li>
                        <li>Corvette</li>  
                    </ul>
                    <ul className="text-center col-3">
                        <li>Dodge</li>
                        <li>Ford</li>
                        <li>General Motors</li>
                        <li>GMC</li>
                        <li>Land Rover</li>
                              
                    </ul>
                    <ul className = "text-center col-3">
                        <li>Lexus</li>
                        <li>Lincoln</li> 
                        <li>Mazda</li>
                        <li>Mercedes-Benz</li>
                        <li>Mitsubishi</li>
                    </ul>
                    <ul className = "text-center col-3">
                        <li>Nissan</li>
                        <li>Saab</li>
                        <li>Tesla</li>
                        <li>Toyota</li>
                        <li>Volkswagon</li>
                    </ul>
                    <h4 className = "text-center col-12">And more...</h4>
                </div>
                <div className= "services-landing col-10 offset-1 text-center">
                    <h2 className= "col-12 text-center">OUR SERVICES</h2>
                    <p className = "d-flex justify-content-center">We offer a full range of Auto Detailing and Auto Reconditioning to vehicle owners. Our professionals know how to handle a wide range of services.</p>
                    <div className="service-images">
                    </div>
                    <Link className = "about-link nav-link" to = "/services">VIEW ALL SERVICES</Link> 
                </div>
                <div className="disclaimer-landing">
                    <h6>The Works Auto Detailing And Reconditioning LLC</h6>
                    <Link className = "disclaimer-link text-center" to = "/disclaimer">guarantees & disclaimer</Link>
                </div>

            </div>
        )
    }
}

export default LandingPage;