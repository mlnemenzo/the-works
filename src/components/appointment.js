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
                carMake : "",
                carModel : "",
                carYear : "",
                carInfo : ""
                // service : null,
                // date : new Date(),
                // time : null
            }
        
    }

    componentDidMount() {

        window.scrollTo(0,0);

        axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json#')
        .then(json => console.log(json))
       
        .then(newData => this.setState({user : newData, id : newData}))
        .catch( error => alert(error));
        
    }
    
    filterNames(e) {
        this.state.store.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))

    }

    handleEvent(event) {
        event.preventDefault();
        this.props.add(this.state);

        
    }


    render() {

        const { name, email, phone, comments, carMake, carModel, carYear, carInfo } = this.state;
        
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
            <div className="text-area col-12 row">
                <form className = "car-info col-6">
                    <h2 className="car-info-header col-6 text-center">Car Make/Model</h2>
                    <div className="col-6 text-left">
                        <div className="user-input">
                            <input value = {carMake} type = "text" onChange = { event => this.setState({carMake: event.target.value})} placeholder = "Car Make"/>
                        </div>
                    </div>
                    <div className="col-6 text-left">
                        <div className="user-input">
                            <input value = {carModel} type = "text" onChange = { event => this.setState({carModel: event.target.value})} placeholder = "Car Model"/>
                        </div>
                    </div>
                    <div className="col-6 text-left">
                        <div className="user-input">
                            <input value = {carYear} type = "number" onChange = { event => this.setState({carYear: event.target.value})} placeholder = "Car Year"/>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <div className="user-input">
                            <textarea className = "" value = {carInfo} type = "textarea" onChange = { event => this.handleEvent({carInfo: event.target.value})} placeholder = "Car Details (Optional)."/>
                        </div>
                    </div>
                </form>
                <form className = "client-info col-6 text-center" onSubmit = {this.handleEvent.bind(this)}>
                    <h2 className="contact-info col-6 text-center">Contact Info</h2>
                    <div className="col-6 text-left">
                        <div className="user-input">
                            <input value = {name} type = "text" onChange = { event => this.handleEvent({name: event.target.value})} placeholder = "Your Name" autoComplete = "name"/>
                        </div>
                    </div>
                    <div className="col-6 text-left">
                        <div className="user-input">
                            <input value = {email} type = "email" onChange = { event => this.handleEvent({email: event.target.value})} placeholder = "Your Email" autoComplete = "email"/>
                        </div>
                    </div>
                    <div className="col-6 text-left">
                        <div className="user-input">
                            <input value = {phone} type = "phone" onChange = { event => this.handleEvent({phone: event.target.value})} placeholder = "Your Phone" autoComplete = "tel"/>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <div className="user-input">
                            <textarea className = "" value = {comments} type = "textarea" onChange = { event => this.handleEvent({message: event.target.value})} placeholder = "Message"/>
                        </div>
                    </div>
                    <div className = "form-submit">
                        {/* <button className = "btn">Submit</button> */}
                    </div>
                    
                </form>
                </div> 
                <h6 className = "col-12 text-center">We will contact you within one business day.</h6>             
            </div>
        )
    }
}

export default Appointment;