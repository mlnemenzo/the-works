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
            this.selectTime = this.selectTime.bind(this);
            this.selectTier = this.selectTier.bind(this);
            this.onClickDay = this.onClickDay.bind(this);

            this.state = {
                dropDownOpen : false,
                dropDownOpenTwo : false,
                canBeClicked : true,
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
                minDate : new Date()
                                             
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
           apptDate : date
        });
        
        if (date < new Date()) {
            alert('Cannot schedule an appointment on past dates.')
           this.setState({
               apptDate : 'Not a valid date.'
           })
        }
    }


    render() {

        const { name, email, phone, message, carMake, carModel, carYear, carInfo, minDate } = this.state;
        
        return (
            <div className="appointment-body row">
            <form className = "client-info col-12 text-center" onSubmit = {this.handleEvent.bind(this)}>
                <div className="service-type col-12">
                    <h1 className="appointments text-center col-12">Book an Appointment:</h1>
                    <h2 className="service col-12">Service Type:</h2>
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
            
                <div className="schedule col-12">  
                        <div className="appointment-date col-12">
                            <h1 className="calendar">Date</h1>
                            <div className ="calendar-container col-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
                                <Calendar onChange={this.onClickDay} value={this.state.date}/>
                            </div>
                        </div>
                    
                    <div className="appointment-time col-12">
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
                <div className="text-area col-12">
                    <div className = "car-info col-12 text-center">
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
                    </div>
                    <div className = "client-info col-12 text-center" onSubmit = {this.setState.bind(this)}>
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
                            <input type="submit" value="Submit"/>  
                        </div>
                        
                    </div>
                    </div> 
                    <h6 className = "contact-time col-12 text-center">We will contact you within one business day.</h6> 
                    <Link className = "disclaimer-link col-12 text-center" to = "/disclaimer">guarantees & disclaimer</Link>   
            </form>         
            </div>
        )
    }
}

export default Appointment;