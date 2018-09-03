import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email : "",
            phone : "",
            message : "",
        }
    }

    validate(name, email, phone, message) {
        return {
            email: email.length === 0,
            name: name.length === 0,
            phone: phone.length === 0,
            message: message.length === 0 
        }
    }

    sendEmailToServer() {
        const contact = this.state;
        // var baseURL = "/email";
        axios.post('/api/email', {...contact}).then(function(response) {
            console.log("Email request completed from server", response);
        }).catch(function(err) {
            console.log("Email request unsuccessful");
        })
    }

    handleEvent(event) {
        event.preventDefault();
        this.sendEmailToServer();  

        this.setState({
            name : "",
            email : "",
            phone : "",
            message : "",
        })
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    

    render() {

        const {name, email, phone, message} = this.state;

        const isEnabled = 
            name.length > 0 &&
            email.length > 0 &&
            phone.length > 0 &&
            message.length > 0;

        const errors  = this.validate(this.state.email, this.state.name, this.state.phone, this.state.message)

        // const isEnabled = !Object.keys(errors).some(x => errors[x]);

        return (
            <div className="contact-body">
                
                <form className = "contact-form container-fluid wrap animated fast fadeInUp" onSubmit = {this.handleEvent.bind(this)}>
                    <h1 className="contact-header text-left">Contact Us</h1>
                    <div className="col-12 text-left">
                        <div className="user-input">
                            <input className= {errors.name ? "error" : ""} value = {name} type = "text" onChange = { event => this.setState({name: event.target.value})} placeholder = "Your Name" autoComplete='name'/>
                        </div>
                    </div>
                    <div className="col-12 text-left">
                        <div className="user-input">
                            <input value = {email} type = "email" onChange = { event => this.setState({email: event.target.value})} placeholder = "Your Email" autoComplete = "email"/>
                        </div>
                    </div>
                    <div className="col-12 text-left">
                        <div className="user-input">
                            <input value = {phone} type = "phone" onChange = { event => this.setState({phone: event.target.value})} placeholder = "Your Phone" autoComplete = "tel"/>
                        </div>
                    </div>
                    <div className="col-12 text-left">
                        <div className="user-input">
                            <textarea className = "" value = {message} type = "textarea" onChange = { event => this.setState({message: event.target.value})} placeholder = "Message"/>
                        </div>
                    </div>
                    <div className = "form-submit text-left">
                        <button type="submit" disabled ={!isEnabled} id = "contact-submit" value="Submit">Submit</button>
                    </div>
                    <h6 className = "contact-message text-center">We will contact you within one business day. </h6>
                </form>
                <div className = "contact-options row">
                    <div className = "call col-12 col-sm-12 col-md-4 col-lg-4">
                        <h3 className = "d-flex justify-content-center">Call Us Now At</h3>
                        <ul>
                            <li className = "text-center"><span className="glyphicons glyphicons-call-outgoing"></span>(951)449-6383</li>                       
                            <li className = "text-center">(951)368-4899</li>
                        </ul>
                    </div>
                    <div className = "email col-12 col-sm-12 col-md-4 col-lg-4">
                        <h3 className = "d-flex justify-content-center">Email Us</h3>
                        <ul>
                            <li className= "d-flex justify-content-center"><a href = "theworkscardetail@gmail.com">theworkscardetail@gmail.com</a></li>                       
                        </ul>
                    </div>
                    <div className = "availability col-12 col-sm-12 col-md-4 col-lg-4">
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