import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className = "services-body">
                <h1 className="services-header col-12" id = "service-header">Our Services</h1>
                <h3 className="tintService">TINT SERVICE COMING SOON!</h3>
                <div className="service-list">
                    <div className="service-info-body col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="service-level text-center">Bronze Detail</div>
                        <div className="service-pricing">
                            <h2 className = "service-pricing-number text-center" id = "detail-cost"></h2>
                            <div className = "service-detail"></div>
                            <div className = "service-info">The Bronze Detail Package is designed for routine cleaning of the internal / external components of the vehicle.</div>
                        </div>
                        <div className="service-info">
                            <h5>Pre Wash / Dry Wash</h5>
                            <h5>Clean / Vacuum Interior Compartments and Apply Dressing on Dashboard & Center Console</h5>
                            <h5>Clean Windows</h5>
                        </div>
                        <div className="service-appt">
                            <Link className="service-appt text-center" to = "/appointment">Get Appointment Now!</Link>
                        </div>
                    </div>
                    <div className="service-info-body col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="service-level text-center">Siliver Detail</div>
                        <div className="service-pricing">
                            <h2 className = "service-pricing-number text-center" id = "detail-cost"></h2>
                                <div className = "service-detail"></div>
                                <div className = "service-info">The Silver Detail Package is designed for routine cleaning of the internal / external components of the vehicle and decontamination of the external paint system. This option provides 3 to 6 months of paint protection. This package is recommended for vehicles that does not require major paint correction. For more severe paint defects, Gold or Platinum Detail Package is highly recommended.</div>
                            </div>
                        <div className="service-info text-left">
                            <h5>Pre Wash / Dry Wash</h5>
                            <h5>Clay Treatment - Exterior Paint Decontamination</h5>
                            <h5>Wax Treatment Exterior Paint for short term paint protection</h5>
                            <h5>Clean Wheels & Apply Dressing on Tires</h5>
                            <h5>Clean / Vacuum Interior Compartments and Apply Dressing on Dashboard & Center Console</h5>
                            <h5>Clean Windows</h5>
                        </div>  
                        <div className="service-appt">
                            <Link className="service-appt" to = "/appointment">Get Appointment Now!</Link>
                        </div>
                    </div>
                    <div className="service-info-body col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="service-level text-center">Gold Detail</div>
                        <div className="service-pricing">
                            <h2 className = "service-pricing-number text-center" id = "detail-cost"></h2>
                                <div className = "service-detail"></div>
                                <div className = "service-info">The Gold Detail Package is designed for neutralization and decontamination of the internal / external components of the vehicle, which concentrates more on the external paint system. This package is recommended to remove mild to moderate contamination and oxidation of the carpet fibers (carpet extraction) and to tone down paint defects to significantly enhance, restore, and protect exterior surfaces of your vehicle. This is the ultimate paint protection for your vehicle which last 6 to 12 months.</div>
                            </div>
                        <div className="service-info">
                            <h5>Pre Wash / Dry Wash</h5>
                            <h5>2 Stage Polish and Paint Correction to remove mild to moderate scratches and blemishes, swirls and marring, which provides a deeper gloss, and smoother paint surface.</h5>
                            <h5>Wax Treatment Exterior Paint for short term paint protection</h5>
                            <h5>Wax treatment and apply paint sealant to exterior paint for long-term paint protection.</h5>
                            <h5>Clean Wheels & Apply Dressing on Tires</h5>
                            <h5>Clean / Vacuum Interior Compartments and Apply Dressing on Dashboard & Center Console</h5>
                            <h5>Hot Water Carpet Extraction or Steam Carpet Extraction to remove deep contamination from the carpet and apply dressing on Dashboard & Center Console</h5>
                            <h5>Clean Windows</h5>
                        </div>  
                        <div className="service-appt">
                            <Link className="service-appt" to = "/appointment">Get Appointment Now!</Link>
                        </div>
                    </div>
                    <div className="service-info-body col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="service-level text-center">Platinum Detail</div>
                        <div className="service-pricing">
                            <h2 className = "service-pricing-number text-center" id = "detail-cost"></h2>
                                <div className = "service-detail"></div>
                                <div className = "service-info">The Platinum Detail Package is highly recommended for multi-stage paint correction to remove to moderate to severe contamination and oxidation of the vehicle’s paint system. This requires the vehicle to be in an isolated and controlled environment to complete corrections on any paint defects and restore vehicles natural shine. In addition, this package will provide extreme protection and facilitate the restoration of the vehicle’s paint. This is the ultimate paint protection (6 to 12 months). This will necessitate the preparation for ceramic coating (if applicable). Furthermore, complete interior detail will be provided which includes carpet decontamination / extraction, re-conditioning, and protection of all internal compartments.</div>
                        </div>
                        <div className="service-info">
                            <h5>Pre Wash / Dry Wash</h5>
                            <h5>Clay Treatment - Exterior Paint Decontamination</h5>
                            <h5>Multi Stage Polish & Paint Correction to remove moderate to severe scratches and blemishes, swirls and marring, which provides a deeper gloss, and smoother paint surface.</h5>
                            <h5>Apply wax treatment and paint sealant to exterior paint for long-term paint protection.</h5>
                            <h5>Clean Wheels & Apply Dressing on Tires</h5>
                            <h5>Hot Water Carpet Extraction or Steam Carpet Extraction to remove deep contamination from the carpet and apply dressing on Dashboard & Center Console</h5>
                            <h5>Clean Windows</h5>
                        </div>  
                        <div className="service-appt">
                            <Link className="service-appt" to = "/appointment">Get Appointment Now!</Link>
                        </div>
                    </div>
                </div>
                <h2 className = "custom-work col-12 text center">Custom Work</h2>
                <table className = "text-left col-12 col-sm-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
                    <tbody>
                        <tr>
                            <td><strong>Other Services</strong></td>
                            <td>Pricing Starting @</td>
                        </tr>
                        <tr>
                            <td>Engine Detail</td>
                            <td>$55.00</td>
                        </tr>
                        <tr>
                            <td>Headlight Restoration</td>
                            <td>$55.00</td>
                        </tr>
                        <tr>
                            <td>Aluminum and/or Chrome Polish</td>
                            <td>$35.00/Wheel</td>
                        </tr>
                        <tr>
                            <td>Concentrated Scratch Correction</td>
                            <td>$55.00/Panel</td>
                        </tr>
                        <tr>
                            <td>Water Spots Removal</td>
                            <td>$55.00/Panel</td>
                        </tr>
                        <tr>
                            <td>Trim & Plastic Coating</td>
                            <td>$55.00</td>
                        </tr>
                        <tr>
                            <td>Fabric & Leather Protection & Restoration (Interior & Exterior)</td>
                            <td>$55.00</td>
                        </tr>
                        <tr>
                            <td>Ozone Decontamination</td>
                            <td>$75.00</td>
                        </tr>
                        <tr>
                            <td>Glass Polishing and Restoration</td>
                            <td>$75.00</td>
                        </tr>
                        <tr>
                            <td><strong>R1 Ceramic Coating</strong></td>
                            <td><strong>$650</strong></td>
                        </tr>    
                    </tbody>
                </table>
                <h6 className = "table-note">(Note: ALL prices may change depending on the Interior & Exterior condition, Size, Color, and Make of the vehicle).</h6>
                <Link className = "disclaimer-link col-12 text-center" to = "/disclaimer">guarantees & disclaimer</Link>
            </div>
        )
    }
}

export default Services;