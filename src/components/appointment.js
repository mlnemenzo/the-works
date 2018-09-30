import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import MultiSelectReact from 'multi-select-react';
import MultiSelect from '@kenshooui/react-multi-select';

class Appointment extends Component {

    constructor(props) {
        super(props); 

            this.toggle = this.toggle.bind(this);
            this.toggleTwo = this.toggleTwo.bind(this);
            this.selectTime = this.selectTime.bind(this);
            this.selectTier = this.selectTier.bind(this);
            this.onClickDay = this.onClickDay.bind(this);
            this.handleChange = this.handleChange.bind(this)

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
                items : [{id: 1, label :'Engine Detail - $55.00'}, 
                    {id : 2, label :'Headlight Restoration - $55.00'},
                    {id : 3, label : 'Aluminum and/or Chrome Polish - $35.00'}, 
                    {id : 4, label : 'Concentrated Scratch Correction - $55.00/Panel'},
                    {id : 5, label : 'Water Spots Removal - $55.00/Panel'},
                    {id : 6, label : 'Trim & Plastic Coating - $55.00'}, 
                    {id : 7, label : 'Fabric & Leather Protection & Restoration (Interior & Exterior) - $55.00'}, 
                    {id : 8, label : 'Ozone Decontamination - $75.00'}, 
                    {id : 9, label : 'Glass Polishing and Restoration - $75.00'},
                    {id : 10, label : 'R1 Ceramic Coating - $650.00' }],
                selectedItems : []
                                                         
            }  

            
    }

    componentDidMount() {
         window.scrollTo(0,0);   
    }

    handleChange(selectedItems) {     
        this.setState({ 
            customWork: selectedItems });
            console.log('items:', Object.values(selectedItems))
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

    render() {

        const { name, email, phone, message, carMake, carModel, carYear, carInfo, items, selectedItems } = this.state;
                
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
                    <div className="tier col-12 col-sm-12 col-md-6 col-lg-6 text-left">
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
                    <div className="extra col-12 col-sm-12 col-md-6 col-lg-6">
                    <p className="calendar text-left">Custom Work:</p>
                    <MultiSelect
                        items={items}
                        selectedItems={selectedItems.label}
                        onChange={this.handleChange}
                        showSearch ={false}
                        showSelectedItems ={false}
                    />
                    </div>
                </div>
                
            
                <div className="schedule col-12 row text-left">  
                    <div className="appointment-date col-12 col-sm-12 col-md-6 col-lg-6 align-items-left">
                        <p className="calendar text-left">Date:</p>
                        <div className ="calendar-container col-12">
                            <Calendar onChange={this.onClickDay} value={this.state.date} minDate={new Date()} />
                        </div>
                    </div>
                    
                    <div className="appointment-time col-12 col-sm-13 col-md-6 col-lg-6 text-left">
                    <p className ="schedule col-12 text-left">Time:</p>
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
                    <div className = "form-submit col-12 text-center">
                        <button type="submit" id = "appointment-submit" value="Submit">Submit</button>  
                    </div>
                    <h6 className = "contact-time col-12 text-center">We will contact you within one business day.</h6> 
                    <div className = "col-12">                    
                        <Link className = "disclaimer-link col-12 text-center" to = "/disclaimer">guarantees & disclaimer</Link>   
                    </div>
            </form>         
            </div>
        )
    }
}

export default Appointment;