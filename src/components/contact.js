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

    render() {

        const {name, email, phone, message} = this.state;

        return (
            <div className="contact-body">
                <h1 className="contact-header">Contact Us</h1>
                <div className = "contact-options row">
                    <div className = "call col-4">
                        <h3>Call Us Now At</h3>
                        <ul>
                            <li className = "text-left"><span className="glyphicons glyphicons-call-outgoing"></span>(951)449-6383</li>                       
                            <li className = "text-left">(951)368-4899</li>
                        </ul>
                    </div>
                    <div className = "email col-4">
                        <h3 className = "text-center">Email Us</h3>
                        <ul>
                            <li><a href = "theworkscardetail@gmail.com">theworkscardetail@gmail.com</a></li>                       
                        </ul>
                    </div>
                    <div className = "availability col-4">
                        <h3>Availability</h3>
                        <ul>
                            <li className = "text-left"><strong>Mon-Wed: </strong>9AM-5PM</li>
                            <li className = "text-left"><strong>Thursday: </strong>9AM-7PM</li>
                            <li className = "text-left"><strong>Fri-Sat: </strong>By Appointment Only</li>
                            <li className = "text-left"><strong>Sunday: </strong>Closed</li>
                        </ul>
                    </div>
                </div>
                <form className = "contact-form" onSubmit = {this.handleEvent.bind(this)}>
                    <div className="row">
                        <div className="user-input">
                            <input value = {name} type = "text" onChange = { event => this.setState({name: event.target.value})} placeholder = "Your Name"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="user-input">
                            <input value = {email} type = "email" onChange = { event => this.setState({email: event.target.value})} placeholder = "Your Email"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="user-input">
                            <input value = {phone} type = "phone" onChange = { event => this.setState({phone: event.target.value})} placeholder = "Your Phone"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="user-input">
                            <textarea className = "" value = {message} type = "textarea" onChange = { event => this.setState({message: event.target.value})} placeholder = "Message"/>
                        </div>
                    </div>
                    <div className = "form-submit">
                        {/* <button className = "btn">Submit</button> */}
                    </div>
                    <h6 className = "text-left">We will contact you within one business day.</h6>
                </form>
            </div>
        )
    }
}

export default Contact;