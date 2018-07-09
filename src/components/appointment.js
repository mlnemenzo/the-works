import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Calendar from 'react-calendar';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Appointment extends Component {

    constructor(props) {
        super(props); 

            this.toggle = this.toggle.bind(this);

            this.state = {
                dropDownOpen : false,
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

    toggle() {
        this.setState(prevState => ({
            dropDownOpen : !prevState.dropDownOpen
        }));
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
                <h2 className="service col-12">Service Level:</h2>
                <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle.bind(this)}>
                    <DropdownToggle caret>
                    Tier 
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem >Bronze - 50/70</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem >Silver - 90/110</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Gold - 130/150</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Platinum - 170/190</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className="schedule col-12 row">   
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
                <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle.bind(this)}>
                    <DropdownToggle caret>
                    Time
                    </DropdownToggle>
                    <DropdownMenu>
                    <DropdownItem>09:00 - 10:00</DropdownItem>
                    <DropdownItem>10:00 - 11:00</DropdownItem>
                    <DropdownItem>11:00 - 12:00</DropdownItem>
                    <DropdownItem>12:00 - 01:00</DropdownItem>
                    <DropdownItem>01:00 - 02:00</DropdownItem> 
                    <DropdownItem>02:00 - 03:00</DropdownItem>
                    <DropdownItem>03:00 - 04:00</DropdownItem>
                    <DropdownItem>04:00 - 05:00</DropdownItem>
                    <DropdownItem>05:00 - 06:00</DropdownItem>
                    <DropdownItem>06:00 - 07:00 (Thursdays Only)</DropdownItem>
                    <DropdownItem>Sundays Off</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </div>
            </div>
            <div className="text-area col-8 offset-2 row">
                <form className = "car-info col-12 col-s-12 col-m-6 col-lg-6">
                    <h2 className="car-info-header col-6 text-left">Car Make/Model</h2>
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
                            <textarea value = {carInfo} type = "text" onChange = { event => this.setState({carInfo: event.target.value})} placeholder = "Car Details (Optional)."/>
                        </div>
                    </div>
                </form>
                <form className = "client-info col-12 col-s-12 col-m-6 col-lg-6 text-center" onSubmit = {this.setState.bind(this)}>
                    <h2 className="contact-info col-6 text-left">Contact Info</h2>
                    <div className="col-12 col-s-12 col-m-6 col-lg-6 text-left">
                        <div className="user-input">
                            <input value = {name} type = "text" onChange = { event => this.setState({name: event.target.value})} placeholder = "Your Name" autoComplete = "name"/>
                        </div>
                    </div>
                    <div className="col-12 col-s-12 col-m-6 col-lg-6 text-left">
                        <div className="user-input">
                            <input value = {email} type = "email" onChange = { event => this.setState({email: event.target.value})} placeholder = "Your Email" autoComplete = "email"/>
                        </div>
                    </div>
                    <div className="col-12 col-s-12 col-m-6 col-lg-6 text-left">
                        <div className="user-input">
                            <input value = {phone} type = "phone" onChange = { event => this.setState({phone: event.target.value})} placeholder = "Your Phone" autoComplete = "tel"/>
                        </div>
                    </div>
                    <div className="col-12 col-s-12 col-m-6 col-lg-6 text-left">
                        <div className="user-input">
                            <textarea className = "" value = {comments} type = "text" onChange = { event => this.setState({comments: event.target.value})} placeholder = "Message"/>
                        </div>
                    </div>
                    <div className = "form-submit">
                        <input className = "submit-button" type="submit" value = "submit"/>
                    </div>
                    
                </form>
                </div> 
                <h6 className = "contact-time col-12 text-center">We will contact you within one business day.</h6> 
                <Link className = "disclaimer-link col-12 text-center" to = "/disclaimer">guarantees & disclaimer</Link>            
            </div>
        )
    }
}

export default Appointment;