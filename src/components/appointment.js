import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Calendar from 'react-calendar/dist/entry.nostyle';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MultiSelect from 'multi-select-react';
import ApptComplete from './apptComplete';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

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
                errors: {},
                show: false,
                value : "",
                dropDownOpen : false,
                dropDownOpenTwo : false,
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

    showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };

    handleChange(selectedItems) {     
        this.setState({ 
            customWork: selectedItems });
            console.log('items:', selectedItems )
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
        const customWork = this.getCustomOptions();

        var baseURL = "/email";
        axios.post('/api/email/appointment', {...contact, customWork}).then(function(response) {
            console.log("Email request completed from server", response);
        }).catch(function(err) {
            console.log("Email request unsuccessful");
        })
    }

    getCustomOptions(){
        return this.state.items.filter(item => item.value);
    }

    handleEvent(event) {
        event.preventDefault();

        console.log('Is Valid:', this.validateForm());
        
        if(this.validateForm()) {
            this.sendEmailToServer();

            // alert("Your appointment has been set.");
            this.showModal();
            
            this.setState({

                errors: {},
                value : "",
                dropDownOpen : false,
                dropDownOpenTwo : false,
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
                selectedItems : [],
            })
        }

      
    }

    validateForm(){
        const { name, email, phone, carMake, carModel, carYear, tierLevel, appointmentTime} = this.state;
        const errors = {};

        if(!name){
            errors.name = 'Please enter your name';
        }

        if(!email){
            errors.email = 'Please enter your email';
        } else if(!emailRegex.test(email)){
            errors.email = 'Please enter a valid email address, ex: john@mail.com';
        }

        if(!phone){
            errors.phone = 'Please enter your phone number';
        } else if (!phoneRegex.test(phone)){
            errors.phone = 'Please enter a valid US phone number, and/or, valid formats ex: (555) 555-5555';
        }
        
        if(!carMake) {
            errors.carMake = "Please enter car manufacturer"
        }

        if(!carModel) {
            errors.carModel = "Please enter car model"
        }

        if(!carYear) {
            errors.carYear = "Please enter car models year"
        }

        if(!tierLevel) {
            errors.tierLevel = "Please select service type"
        }

        if(!appointmentTime) {
            errors.appointmentTime = "Please schedule time"
        }

        this.setState({errors: errors});

        return Object.keys(errors).length === 0;

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

    selectedBadgeClicked = (optionsList) => {
        console.log('Badge Clicked:', optionsList);
    
           this.setState({ items: optionsList });
    }

    optionClicked = (optionsList) => {
        this.setState({ items: optionsList});
    }

    render() {

        const { errors, name, email, phone, message, carMake, carModel, carYear, carInfo, items } = this.state;
        console.log("list of errors", errors)
        return (
            <div className="appointment-body row">
            <form className = "client-info col-12 text-left" onSubmit = {this.handleEvent.bind(this)}>
                <h1 className="appointments text-center col-12">Book an Appointment</h1>
                <div className="form-group">
                    <label htmlFor="enter-name col-12" className="enter-name">Name</label>
                    <input className="form-control" value = {name} type = "text" placeholder = "Enter name" onChange = { event => this.setState({name: event.target.value})} autoComplete = "name"/>
                    <p className="text-danger">{errors.name}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="enter-email col-12" className="enter-email">Email</label>
                    <input className="form-control" value = {email} type = "text" placeholder = "Enter email" onChange = { event => this.setState({email: event.target.value})} autoComplete = "email"/>
                    <p className="text-danger">{errors.email}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="enter-phone col-12" className="enter-phone">Telephone</label>
                    <small id="phoneHelp" className="form-text text-muted">Please use valid US format, ex: (555) 555-5555</small>
                    <input className="form-control" value = {phone} type = "text" placeholder = "Enter phone number" onChange = { event => this.setState({phone: event.target.value})} autoComplete = "phone"/>
                    <p className="text-danger">{errors.phone}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Additional information</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value = {message} type = "text" onChange = { event => this.setState({message: event.target.value})} placeholder = "Optional." rows="3"></textarea>
                </div>
                <h1 className="car-info text-center col-12">Vehicle Info</h1>
                <div className="form-group">
                    <label htmlFor="enter-carmake col-12" className="enter-carmake">Car Make</label>
                    <input className="form-control" value = {carMake} type = "text" placeholder = "Car Make" onChange = { event => this.setState({carMake: event.target.value})} autoComplete = "phone"/>
                    <p className="text-danger">{errors.carMake}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="enter-carmodel col-12" className="enter-carmodel">Car Model</label>
                    <input className="form-control" value = {carModel} type = "text" placeholder = "Car Model" onChange = { event => this.setState({carModel: event.target.value})} autoComplete = "phone"/>
                    <p className="text-danger">{errors.carModel}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="enter-caryear col-12" className="enter-caryear">Car Year</label>
                    <input className="form-control" value = {carYear} type = "text" placeholder = "Car Year" onChange = { event => this.setState({carYear: event.target.value})} autoComplete = "phone"/>
                    <p className="text-danger">{errors.carYear}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Additional Requests</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value = {carInfo} type = "text" onChange = { event => this.setState({carInfo: event.target.value})} placeholder = "Optional." rows="3"></textarea>
                </div>
                <h1 className="services text-center col-12">Services</h1>

                <div className="form-group service-type col-12 row">
                    
                    <div className="tier col-12 text-left">
                        <label htmlFor="exampleFormControlTextarea1" className = "col-4 offset-4 text-center">Service Type</label>
                        <Dropdown className= "col-4 offset-4 text-center" isOpen={this.state.dropDownOpen} toggle={this.toggle}>
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
                            <p className="text-danger">{errors.tierLevel}</p>
                        </Dropdown>
                    </div>
                    <div className="extra col-12">
                    <p className="calendar text-left">Custom Work:</p>
                    <MultiSelect
                        options={items}
                        optionClicked={this.optionClicked}
                        selectedBadgeClicked={this.selectedBadgeClicked}
                        showSearch ={false}
                        showSelectedItems ={false}
                        showSelectAll ={true}
                    />
                    </div>
                </div>
                
            
                <div className="schedule col-12 row text-left">  
                    <div className="appointment-date col-12 col-sm-12 col-md-6 col-lg-6 align-items-left">
                        <p className="calendar text-left">Date:</p>
                        <div className ="calendar-container col-12">
                            <Calendar onChange={this.onClickDay} value={this.state.date} minDate={new Date()} />
                        </div>
                        <p className ="schedule col-12 text-left">Time:</p>
                    <Dropdown isOpen={this.state.dropDownOpenTwo} toggle={this.toggleTwo} list = {this.state.time}>
                        <DropdownToggle caret>
                        {this.state.appointmentTime}
                        </DropdownToggle>
                        <DropdownMenu> 
                        <DropdownItem onClick = {() => this.selectTime('09:00am')}>09:00am</DropdownItem>
                        <DropdownItem onClick = {() => this.selectTime('12:00pm')}>12:00pm</DropdownItem>
                        <DropdownItem onClick = {() => this.selectTime('3:00pm')}>3:00pm</DropdownItem>
                        </DropdownMenu>
                        <p className="text-danger">{errors.appointmentTime}</p>
                    </Dropdown>
                    </div>
                    <p className="apptHours col-12 text-center">Times may vary depending on location and special services requested. Will confirm appointment within 24 hours.</p>
                    <div className="appointment-time col-12 text-left">
                    
                    </div>
                </div>
                    <div className = "form-submit col-12 text-center">
                        <button id="appointment-submit">SUBMIT</button> 
                    </div>
                    <h6 className = "contact-time col-12 text-center">We will contact you within one business day.</h6> 
                    <div className = "col-12 text-center">                    
                        <Link className = "disclaimer-link col-12 text-center" to = "/disclaimer">guarantees & disclaimer</Link>   
                    </div>
                    {/* <button className = "modalButton toggle-button col-4 offset-4 text-center" id = "centered-toggle-button" onClick = { e => {this.showModal(e)}}> {" "}
                    Thanks! Your appointment has been scheduled!{" "}</button> */}
                    <ApptComplete onClose = { this.showModal } show={ this.state.show }/>
            </form>    
            </div>
        )
    }
}

export default Appointment;