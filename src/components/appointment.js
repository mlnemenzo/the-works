import React, { Component } from 'react';

class Appointment extends Component {

    constructor(props) {
        super(props); 
        
            this.state = {
                name : "",
                email : "",
                phone : "",
                comments : "",
                service : null,
                date : null,
                time : null
            }
        
    }

    handleEvent(event) {
        event.preventDefault();
        this.props.add(this.state);

        this.state = {
            name : "",
            email : "",
            phone : "",
            comments : "",
            service : null,
            date : null,
            time : null
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        const { name, email, phone, comments, service, date, time } = this.state;

        return (
            <div className="appointment-body">
                <h1 className="appointments">Book an Appointment</h1>
                <div className="appointment-date">
                    <h1 className="calendar">calendar goes here</h1>
                </div>
                <div className="appointment-time">
                    <h1 className="time">preferred time</h1>
                </div>
                <div className="service-type">
                    <h1 className="service">service tier</h1>
                </div>
                <div className="client-info">
                    <h2 className="client">Client Info</h2>
                    <input value = {name} type = "text" onChange = { event => this.setState({name: event.target.value})} placeholder = "Name"/>
                    <input value = {email} type = "email" onChange = { event => this.setState({email: event.target.value})} placeholder = "Email"/>
                    <input value = {phone} type = "phone" onChange = { event => this.setState({phone: event.target.value})} placeholder = "Phone Number"/>
                    <textarea value = {comments} type = "textarea" onChange = { event => this.setState({comments: event.target.value})} placeholder = "comments" />
                </div>
                
            </div>
        )
    }
}

export default Appointment;