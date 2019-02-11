import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import landing from '../assets/images/landing_banner.jpg';
import tesla from '../assets/images/tesla.jpg'


class LandingPage extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <div className="landing-page">
                <div className="landing-image justify-content-center">
                    <img src={landing} alt = "img not available"/>
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
                    <ul className = "text-center col-6 col-sm-6 col-md-3 col-lg-3">
                        <li>Audi</li>
                        <li>Acura</li>
                        <li>BMW</li>
                        <li>Chevorlet</li>
                        <li>Corvette</li>  
                    </ul>
                    <ul className="text-center col-6 col-sm-6 col-md-3 col-lg-3">
                        <li>Dodge</li>
                        <li>Ford</li>
                        <li>General Motors</li>
                        <li>GMC</li>
                        <li>Infiniti</li>     
                    </ul>
                    <ul className = "text-center col-6 col-sm-6 col-md-3 col-lg-3">
                        <li>Land Rover</li>
                        <li>Lexus</li>
                        <li>Lincoln</li> 
                        <li>Mazda</li>
                        <li>Mercedes-Benz</li>
                    </ul>
                    <ul className = "text-center col-6 col-sm-6 col-md-3 col-lg-3">
                        <li>Mitsubishi</li>
                        <li>Nissan</li>
                        <li>Tesla</li>
                        <li>Toyota</li>
                        <li>Volkswagon</li>
                    </ul>
                    <h4 className = "text-center col-12">And more...</h4>
                </div>
                <div className= "services-landing col-10 offset-1 text-center">
                    <h2 className= "col-12 text-center">OUR SERVICES</h2>
                    <h3 className="tint-service">TINT SERVICE COMING SOON</h3>
                    <div className ="secondImage">
                        <img className = "landingImage2" src = {tesla} alt = "img not available"/>
                        <div className="carousel-caption">Tesla Ceramic Coating</div>
                    </div>
                    <div className = "description">
                        <p className = "d-flex justify-content-center">We offer a full range of Auto Detailing and Auto Reconditioning to vehicle owners. Our professionals know how to handle a wide range of services.</p>
                        <Link className = "about-link nav-link" to = "/services">VIEW ALL SERVICES</Link> 
                    </div> 
                    
                </div>
                <div className="appt col-10 offset-1">
                    <h4 className="make-appt text-center"><Link className="make-appt-link nav-link nav-link-text boldLink" to = "/appointment">MAKE AN APPOINTMENT NOW WITH  OUR ONLINE FORM.</Link></h4>
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