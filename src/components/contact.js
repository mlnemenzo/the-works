import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

                name : "",
                email : "",
                phone : "",
                message : "",
                errors : {},
        }
    }

    validateForm() {
        const { name, email, phone, message } =
        this.state;
        let errors = {};

        if (!name) {
            errors.name = "Please enter your name"
        }

        if (!email) {
            errors.email = "Please enter your email"
        } else if (!emailRegex.test(email)){
            errors.email = 'Please enter a valid email address, ex: john@mail.com';
        }

        if (!phone) {
            errors.phone = "Please enter a valid phone number, and/or valid format. ex: (555) 555-5555"
        } else if (!phoneRegex.test(phone)) {
            errors.phone = 'Please enter a valid phone number, and/or valid format. ex: (555) 555-5555'
        }

        if (!message) {
            errors.message = "Please enter a message"
        }

        this.setState({errors: errors})
        
        return Object.keys(errors).length === 0

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
        

        if(this.validateForm()){
            this.sendEmailToServer();  

            alert("Thanks! Your message has been sent.")

            this.setState({
                name : "",
                email : "",
                phone : "",
                message : "",
            });
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        const {errors, name, email, phone, message} = this.state;
        console.log("list of errors", errors);
        return (
            <div className="contact-body">
                
                <form className = "contact-form wrap animated fast fadeInUp" noValidate = "" onSubmit = {this.handleEvent.bind(this)}>
                    <h1 className="contact-header text-center">Contact Us</h1>
                    <div className="form-group col-12 text-left">
                        <label htmlFor="name col-12" className="enter-name">Name</label>
                        <input type="text" className="col-12" value = {name} onChange = { event => this.setState({name: event.target.value})} placeholder = "Your name" autoComplete = "name"/>
                        <p className = "text-danger">{errors.name}</p>
                    </div>
                    <div className="form-group col-12 text-left">
                        <label htmlFor="email col-12">Email</label>
                        <input className = "col-12" value = {email} type = "email" onChange = { event => this.setState({email: event.target.value})} placeholder = "Your Email" autoComplete = "email"/>
                        <p className = "text-danger">{errors.email}</p>
                    </div>
                    <div className="form-group col-12 text-left">
                        <label htmlFor="phone">Phone</label>
                        <small id="phoneHelp" className="form-text text-muted">Please use valid US format, ex: (555) 555-5555</small>
                        <input className = "col-12" value = {phone} type = "phone" onChange = { event => this.setState({phone: event.target.value})} placeholder = "Your Phone" autoComplete = "tel"/>
                        <p className = "text-danger">{errors.phone}</p>
                    </div>
                    <div className="form-group col-12 text-left">
                        <label htmlFor="message">Message</label>
                        <textarea className="col-12" value = {message} type = "textarea" onChange = { event => this.setState({message: event.target.value})} placeholder = "Message"/>
                        <p className = "text-danger">{errors.message}</p>
                    </div>
                    <div className = "form-submit text-center">
                        <button className = "btn btn-lg pro" type="submit" id = "contact-submit" value="Submit">Submit</button>
                    </div>
                    <h6 className = "contact-message text-center">We will contact you within one business day. </h6>
                </form>
                <div className = "contact-options row">
                    <div className = "call col-12 col-sm-12 col-md-4 col-lg-4">
                        <h3 className = "d-flex justify-content-center">Call Us Now At</h3>
                        <ul>
                            <li className= "text-center">(951) 420-5555</li>                       
                        </ul>
                    </div>
                    <div className = "email col-12 col-sm-12 col-md-4 col-lg-4">
                        <h3 className = "d-flex justify-content-center">Email Us</h3>
                        <ul>
                            <li className= "d-flex justify-content-center">
                            <Link className = "contacdt-link text-center" to = "/contact">theworkscardetail@gmail.com</Link>
                            </li>                       
                        </ul>
                    </div>
                    <div className = "availability col-12 col-sm-12 col-md-4 col-lg-4">
                        <h3>Availability</h3>
                        <ul>
                            <li className = "text-center"><strong>Mon-Thurs: </strong>9AM-5PM</li>
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