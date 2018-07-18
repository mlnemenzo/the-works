import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Appointment extends Component {

    constructor(props) {
        super(props); 

            this.toggle = this.toggle.bind(this);
            this.toggleTwo = this.toggleTwo.bind(this);

            this.state = {
                dropDownOpen : false,
                dropDownOpenTwo : false,
                user : [],
                store : [],
                name : "",
                email : "",
                phone : "",
                message : "",
                carMake : "",
                carModel : "",
                carYear : "",
                carInfo : "",
                // tier : null,
                // time: null,
                // date: null
            }  
    }

    toggle() {  
        this.setState({
            dropDownOpen : !this.state.dropDownOpen
        });
    }

    toggleTwo() {
        this.setState({
            dropDownOpenTwo : !this.state.dropDownOpenTwo
        });
    }

    sendEmailToServer() {
        const contact = this.state;
        var devURL = 'http://localhost:9000/email';

        axios.post(devURL,{...contact}).then(function(response) {
            console.log("Email response received from server", response)
        }).catch(function(err) {
            console.log("Email request unsuccessful.")
        })
    }

    // scheduleAppointment() {
    //     const time = [{
    //         hour: "09:00 - 10:00",
    //         hour:  "10:00 : 11:00",
    //         hour:  "11:00 - 12:00",
    //         hour: "12:00 - 01:00",
    //         hour:  "01:00 - 02:00", 
    //         hour: "02:00 - 03:00",
    //         hour:  "03:00 - 04:00", 
    //         hour: "04:00 - 05:00", 
    //         hour: "05:00 - 06:00", 
    //         hour: "06:00 - 07:00 (Thursdays only.)"
    //     }];

    //     const appointment = time.map(function(x){
    //         return x.time;
    //     });

    //     console.log(appointment);

        
    // }

    componentDidMount() {

        window.scrollTo(0,0);
        
    }
 
    handleEvent(event) {
        event.preventDefault();
        this.sendEmailToServer();
        this.props.add(this.state);
    }

    render() {

        const { name, email, phone, message, carMake, carModel, carYear, carInfo } = this.state;
        
        return (
            <div className="appointment-body row">
            <div className="service-type col-12">
                <h1 className="appointments text-center col-12">Book an Appointment:</h1>
                <h2 className="service col-12">Service Level:</h2>
                <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
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
            
            <div className="schedule col-12">  
                    <div className="appointment-date col-12">
                        <h1 className="calendar">Date</h1>
                        <div className ="calendar-container col-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
                            <Calendar onChange={this.onChange} value={this.state.date}/>
                        </div>
                    </div>
                
                <div className="appointment-time col-12">
                <Dropdown isOpen={this.state.dropDownOpenTwo} toggle={this.toggleTwo}>
                    <DropdownToggle caret>
                    Time
                    </DropdownToggle>
                    <DropdownMenu> 
                    <DropdownItem ></DropdownItem>
                    <DropdownItem >10:00 - 11:00</DropdownItem>
                    <DropdownItem >11:00 - 12:00</DropdownItem>
                    <DropdownItem >12:00 - 01:00</DropdownItem>
                    <DropdownItem >01:00 - 02:00</DropdownItem> 
                    <DropdownItem >02:00 - 03:00</DropdownItem>
                    <DropdownItem >03:00 - 04:00</DropdownItem>
                    <DropdownItem >04:00 - 05:00</DropdownItem>
                    <DropdownItem >05:00 - 06:00</DropdownItem>
                    <DropdownItem >06:00 - 07:00 (Thursdays Only)</DropdownItem>
                    <DropdownItem >Sundays Off</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </div>
            </div>
            <div className="text-area col-12">
                <form className = "car-info col-12 text-center">
                    <h2 className="car-info-header col-12 text-center">Car Make/Model</h2>
                    <div className="col-12 text-center">
                        <div className="user-input">
                            <input value = {carMake} type = "text" onChange = { event => this.setState({carMake: event.target.value})} placeholder = "Car Make"/>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <div className="user-input">
                            <input value = {carModel} type = "text" onChange = { event => this.setState({carModel: event.target.value})} placeholder = "Car Model"/>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <div className="user-input">
                            <input value = {carYear} type = "number" onChange = { event => this.setState({carYear: event.target.value})} placeholder = "Car Year"/>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <div className="user-input">
                            <textarea value = {carInfo} type = "text" onChange = { event => this.setState({carInfo: event.target.value})} placeholder = "Car Details (Optional)."/>
                        </div>
                    </div>
                </form>
                <form className = "client-info col-12 text-center" onSubmit = {this.setState.bind(this)}>
                    <h2 className="contact-info col-12 text-center">Contact Info</h2>
                    <div className="col-12 text-center">
                        <div className="user-input">
                            <input value = {name} type = "text" onChange = { event => this.setState({name: event.target.value})} placeholder = "Your Name" autoComplete = "name"/>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <div className="user-input">
                            <input value = {email} type = "email" onChange = { event => this.setState({email: event.target.value})} placeholder = "Your Email" autoComplete = "email"/>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <div className="user-input">
                            <input value = {phone} type = "phone" onChange = { event => this.setState({phone: event.target.value})} placeholder = "Your Phone" autoComplete = "tel"/>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <div className="user-input">
                            <textarea className = "" value = {message} type = "text" onChange = { event => this.setState({message: event.target.value})} placeholder = "Message"/>
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