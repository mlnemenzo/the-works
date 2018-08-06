import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ExtraServices from '../helpers/extraServices';

class Appointment extends Component {

    constructor(props) {
        super(props); 

            this.toggle = this.toggle.bind(this);
            this.toggleTwo = this.toggleTwo.bind(this);
            this.selectTime = this.selectTime.bind(this);
            this.selectTier = this.selectTier.bind(this);
            this.onClickDay = this.onClickDay.bind(this);

            this.state = {
                dropDownOpen : false,
                dropDownOpenTwo : false,
                // user : [],
                // store : [],
                name : "",
                email : "",
                phone : "",
                message : "",
                carMake : "",
                carModel : "",
                carYear : "",
                carInfo : "",
                tier : "",
                time : "", 
                date : new Date(),
                minDate : new Date(),
                                             
            }  
    }

    componentDidMount() {

        window.scrollTo(0,0);
        
    }

    selectTime(time) {
        this.setState({
          appointmentTime: time
        });
      }

    selectTier(tier) {
        this.setState({
          tierLevel: tier
        });
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
        // var baseURL = "/email";
        axios.post('/api/email/appointment', {...contact}).then(function(response) {
            console.log("Email request completed from server", response);
        }).catch(function(err) {
            console.log("Email request unsuccessful");
        })
    }

    handleEvent(event) {
        event.preventDefault();
        this.sendEmailToServer();
        //.this.props.add(this.state);
    }

    onClickDay(date) { 
        this.setState({
           apptDate : date.toLocaleDateString()
        });
        
        if (date < new Date()) {
            alert('Cannot schedule same day appointments.')
           this.setState({
               apptDate : 'Not a valid date.'
           })
        }
    }

    validation() {
        if(!this.state) {
            alert("missing form input.")
        }
    }

    render() {

        const { name, email, phone, message, carMake, carModel, carYear, carInfo } = this.state;
        
        return (
            <div className="appointment-body row">
            <form className = "client-info col-12 text-left" onSubmit = {this.handleEvent.bind(this)}>
                <div className="service-type col-12 row">
                    <h1 className="appointments text-center col-12">Book an Appointment:</h1>
                    <div className="text-area row col-12 text-left">
                        <div className = "car-info col-12 col-sm-12 col-md-6 col-lg-6 text-left">
                            <h3 className="car-info-header col-12 text-left">Car Info</h3>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-center">
                                <div className="user-input text-left">
                                    <p className =" info-titles col-12 text-left">Car Make:</p>
                                    <input value = {carMake} type = "text" onChange = { event => this.setState({carMake: event.target.value})} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-left">
                                <div className="user-input">
                                    <p className =" info-titles col-12 text-left">Car Model:</p>
                                    <input value = {carModel} type = "text" onChange = { event => this.setState({carModel: event.target.value})} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-left">
                                <div className="user-input">
                                    <p className =" info-titles col-12 text-left">Car Year:</p>
                                    <input value = {carYear} type = "number" onChange = { event => this.setState({carYear: event.target.value})} />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-left">
                                <div className="user-input">
                                    <p className =" info-titles col-12 text-left">Extra Requests:</p>
                                    <textarea value = {carInfo} type = "text" onChange = { event => this.setState({carInfo: event.target.value})} placeholder = "(Optional.)"/>
                                </div>
                            </div>
                        </div>
                        <div className = "client-info col-12 col-sm-12 col-md-6 col-lg-6 text-left" onSubmit = {this.setState.bind(this)}>
                            <h3 className="contact-info col-12 text-left">Contact Info</h3>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-left">
                                <div className="user-input">
                                    <p className =" info-titles col-12 text-left">Name:</p>
                                    <input value = {name} type = "text" onChange = { event => this.setState({name: event.target.value})} autoComplete = "name"/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-left">
                                <div className="user-input">
                                    <p className =" info-titles col-12 text-left">Email:</p>
                                    <input value = {email} type = "email" onChange = { event => this.setState({email: event.target.value})} autoComplete = "email"/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-left">
                                <div className="user-input">
                                    <p className =" info-titles col-12 text-left">Telephone:</p>
                                    <input value = {phone} type = "phone" onChange = { event => this.setState({phone: event.target.value})} autoComplete = "tel"/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-left">
                                <div className="user-input">
                                    <p className =" info-titles col-12 text-left">Message:</p>
                                    <textarea className = "" value = {message} type = "text" onChange = { event => this.setState({message: event.target.value})} placeholder = "(Optional.)"/>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="tier col-12 col-sm-12 col-md-4 col-lg-4 text-left">
                        <p className ="info-titles col-12 text-left">Service Type:</p>
                        <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
                            <DropdownToggle title = "Tier" caret>
                            {this.state.tierLevel}
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem onClick = {() => this.selectTier('BRONZE- 50/70')}>Bronze - 50/70</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick = {() => this.selectTier('SILVER - 90/110')}>Silver - 90/110</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick = {() => this.selectTier('GOLD - 130/150')}>Gold - 130/150</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick = {() => this.selectTier('PLATINUM - 170/190')}>Platinum - 170/190</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div className="extra">
                    <ExtraServices/>                
                </div>
            
                <div className="schedule col-12 text-left">  
                        <div className="appointment-date col-12 align-items-left">
                            <h3 className="calendar">Date</h3>
                            <div className ="calendar-container col-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
                                <Calendar onChange={this.onClickDay} value={this.state.date} minDate={new Date()} />
                            </div>
                        </div>
                    
                    <div className="appointment-time col-12 text-left">
                    <Dropdown isOpen={this.state.dropDownOpenTwo} toggle={this.toggleTwo} list = {this.state.time}>
                        <DropdownToggle caret>
                        {this.state.appointmentTime}
                        </DropdownToggle>
                        <DropdownMenu> 
                        <DropdownItem onClick = {() => this.selectTime('09:00 - 10:00')}>09:00 - 10:00</DropdownItem>
                        <DropdownItem onClick = {() => this.selectTime('10:00 - 11:00')}>10:00 - 11:00</DropdownItem>
                        <DropdownItem onClick = {() => this.selectTime('11:00 - 12:00')}>11:00 - 12:00</DropdownItem>
                        <DropdownItem onClick = {() => this.selectTime('12:00 - 01:00')}>12:00 - 01:00</DropdownItem>
                        <DropdownItem onClick = {() => this.selectTime('01:00 - 02:00')}>01:00 - 02:00</DropdownItem> 
                        <DropdownItem onClick = {() => this.selectTime('02:00 - 03:00')}>02:00 - 03:00</DropdownItem>
                        <DropdownItem onClick = {() => this.selectTime('03:00 - 04:00')}>03:00 - 04:00</DropdownItem>
                        <DropdownItem onClick = {() => this.selectTime('04:00 - 05:00')}>04:00 - 05:00</DropdownItem>
                        <DropdownItem onClick = {() => this.selectTime('05:00 - 06:00')}>05:00 - 06:00</DropdownItem>
                        <DropdownItem onClick = {() => this.selectTime('06:00 - 07:00')}>06:00 - 07:00 (Thursdays Only)</DropdownItem>
                        <DropdownItem >Sundays Off</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </div>
                </div>
                    <div className = "form-submit text-left">
                        <input type="submit" value="Submit"/>  
                    </div>
                    <h6 className = "contact-time col-12 text-center">We will contact you within one business day.</h6> 
                    <Link className = "disclaimer-link col-12 text-center" to = "/disclaimer">guarantees & disclaimer</Link>   
            </form>         
            </div>
        )
    }
}

export default Appointment;