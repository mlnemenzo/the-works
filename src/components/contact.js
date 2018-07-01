import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email : "",
            phone : "",
            message : ""
        }
    }

    handleEvent(event) {
        event.preventDefault();
        this.props.add(this.state);
        

        this.setState({
            name : "",
            email : "",
            phone : "",
            message : ""
        })
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        const {name, email, phone, message} = this.state;

        return (
            <div className="contact-body">
                
                <form className = "contact-form container-fluid wrap animated fast fadeInUp" onSubmit = {this.handleEvent.bind(this)}>
                    <h1 className="contact-header">Contact Us</h1>
                    <div className="d-flex justify-content-center">
                        <div className="user-input">
                            <input value = {name} type = "text" onChange = { event => this.setState({name: event.target.value})} placeholder = "Your Name"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="user-input">
                            <input value = {email} type = "email" onChange = { event => this.setState({email: event.target.value})} placeholder = "Your Email"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="user-input">
                            <input value = {phone} type = "phone" onChange = { event => this.setState({phone: event.target.value})} placeholder = "Your Phone"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="user-input">
                            <textarea className = "" value = {message} type = "textarea" onChange = { event => this.setState({message: event.target.value})} placeholder = "Message"/>
                        </div>
                    </div>
                    <div className = "form-submit">
                        {/* <button className = "btn">Submit</button> */}
                    </div>
                    <h6 className = "text-center">We will contact you within one business day.</h6>
                </form>
                <div className = "contact-options row">
                    <div className = "call col-4">
                        <h3 className = "d-flex justify-content-center">Call Us Now At</h3>
                        <ul>
                            <li className = "text-center"><span className="glyphicons glyphicons-call-outgoing"></span>(951)449-6383</li>                       
                            <li className = "text-center">(951)368-4899</li>
                        </ul>
                    </div>
                    <div className = "email col-4">
                        <h3 className = "d-flex justify-content-center">Email Us</h3>
                        <ul>
                            <li className= "d-flex justify-content-center"><a href = "theworkscardetail@gmail.com">theworkscardetail@gmail.com</a></li>                       
                        </ul>
                    </div>
                    <div className = "availability col-4">
                        <h3>Availability</h3>
                        <ul>
                            <li className = "text-center"><strong>Mon-Wed: </strong>9AM-5PM</li>
                            <li className = "text-center"><strong>Thursday: </strong>9AM-7PM</li>
                            <li className = "text-center"><strong>Fri-Sat: </strong>By Appointment Only</li>
                            <li className = "text-center"><strong>Sunday: </strong>Closed</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Contact;