import React, { Component } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';

class Appointment extends Component {

    constructor(props) {
        super(props); 
        
            this.state = {
                user : [],
                store : [],
                name : "",
                email : "",
                phone : "",
                comments : "",
                // service : null,
                // date : new Date(),
                // time : null
            }
        
    }

    componentDidMount() {

        window.scrollTo(0,0);

        axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json#')
        .then(json => console.log(json))
       
        // .then(newData => this.setState({user : newData, id : newData}))
        // .catch( error => alert(error));
        
      }
    
      filterNames(e) {
        this.state.store.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    
      }

    handleEvent(event) {
        event.preventDefault();
        this.props.add(this.state);

        this.setState({name: event.target.value}, {email: event.target.value}, {phone: event.target.value}, {comments: event.target.value}, {service : event.target.value}, {date: event.target.value}, {time: event.target.value});
    }

    onChange = date => this.setState({ date })

    render() {

        const { name, email, phone, comments } = this.state;
        
        return (
            <div className="appointment-body row">
            <div className="service-type col-12">
            <h1 className="appointments text-center col-12">Book an Appointment:</h1>
                    <h1 className="service">Service Tier:</h1>
                    <div className="btn-group">
                        <button type="button" className ="btn btn-danger darken-2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tier
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="">Action</a>
                            <a className="dropdown-item" href="">Another action</a>
                            <a className="dropdown-item" href="">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="">Separated link</a>
                        </div>
                    </div>
                </div>
                
                <div className="appointment-date col-6">
                    <h1 className="calendar">Date</h1>
                    <div className ="calendar-container">
                        <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                        />
                    </div>
                </div>
                <div className="appointment-time col-6">
                    <h1 className="time">Preferred Time</h1>
                    <div className="time btn-group">
                        <button type="button" className ="apt-time btn btn-danger darken-2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Hour:
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="">Action</a>
                            <a className="dropdown-item" href="">Another action</a>
                            <a className="dropdown-item" href="">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="">Separated link</a>
                        </div>
                    </div>
                </div>
                    <form className = "client-info" onSubmit = {this.handleEvent.bind(this)}>
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
                                <textarea className = "" value = {comments} type = "textarea" onChange = { event => this.setState({message: event.target.value})} placeholder = "Message"/>
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

export default Appointment;