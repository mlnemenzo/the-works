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

        this.setState({name: event.target.value}, {email: event.target.value}, {phone: event.target.value}, {comments: event.target.value}, {service : event.target.value}, {date: event.target.value}, {time: event.target.value});
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        const { name, email, phone, comments, service, date, time } = this.state;

        console.log("event: ", this.value)

        return (
            <div className="appointment-body row">
                <h1 className="appointments text-center col-12">Book an Appointment</h1>
                <div className="appointment-date col-6">
                    <h1 className="calendar">calendar goes here</h1>
                </div>
                <div className="appointment-time col-6">
                    <h1 className="time">preferred time</h1>
                </div>
                <div className="service-type col-12">
                    <h1 className="service">Service Tier</h1>
                    <div className="btn-group">
                        <button type="button" className ="btn btn-danger darken-2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tier
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
                <div className="client-info col-8  text-left">
                    <h2 className="client">Client Info</h2>
                    <input className = "row" value = {name} type = "text" onChange = { event => this.setState({name: event.target.value})} placeholder = "Name"/>
                    <input className = "row" value = {email} type = "email" onChange = { event => this.setState({email: event.target.value})} placeholder = "Email"/>
                    <input className = "row" value = {phone} type = "phone" onChange = { event => this.setState({phone: event.target.value})} placeholder = "Phone Number"/>
                    <textarea className = "row" value = {comments} type = "textarea" onChange = { event => this.setState({comments: event.target.value})} placeholder = "comments" />
                </div>
                
            </div>
        )
    }
}

export default Appointment;