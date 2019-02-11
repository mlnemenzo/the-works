import React, { Component }from 'react';
import mike from '../assets/images/mike2.jpg'

class AboutUs extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="about-us-body row">
                <div className="about col-12">
                    <h3 className="about-us-header text-center">About us: </h3>
                    <p className= "about-statment justify-content-center">We are Certified Advance Auto Detailing and Auto Reconditioning Professionals.  We have extensive training and experience in the field of auto detailing, paint correction and R1 Ceramic Coatings.  We use eco-safe products and commercial grade equipment to ensure optimum results without harming the environment.  As an Auto Reconditioning Professional, we provide a systematic and efficient appropact to rejuvenate and protect various surfaces / components of your vehicle.</p>
                </div>
                <div className="about-img col-12 justify-content-center">
                    <img className="about-image" src={mike} alt="no img available"/>
                </div>
                <div className="mission-statement col-12">
                    <h3 className="statement text-center">Mission Statement: </h3>
                    <p className = "statment-text justify-content-center">The Mission of the The Works Auto Detailing & Reconditioning is to provide top-quality service and impeccable customer service to automobile owners in the Riverside County and surrounding areas.  The Works Auto Detailing & Reconditioning Company's philosophy is to Clean, Protect, and Restore (CPR) every vehicle that we service to ensure 100% customer satisfaction. </p>
                </div>
            </div>
        )
    }
}

export default AboutUs;