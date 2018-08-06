import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class extraServices extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this)

        this.state = {
            DropDownOpen : false,
            selectServices : ""
        }
    }

    selectService(selectServices ) {
        this.setState({
            extraService : selectServices
        }) 
    }

    toggle() {
        this.setState({
            dropDownOpen : !this.state.dropDownOpen
        });
    }

    render() {
        
        return(
            <div className="servicesBody col-12 col-sm-12 col-md-6 col-lg-6 text-left ">
                <p className="extraServices">Extra Services:</p>
                <Dropdown isOpen={this.state.dropDownOpen} toggle = {this.toggle}>
                <DropdownToggle title =  "extra services" caret>{this.state.extraService}</DropdownToggle>
                {this.state.selectServices}
                <DropdownMenu>
                    <DropdownItem onClick = {() => this.selectService('Engine Detail - $55.00')}>Engine Detail - $55.00</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick = {() => this.selectService('Headlight Restoration - $55.00')}>Headlight Restoration - $55.00</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick = {() => this.selectService('Aluminum and/or Chrome Polish - $35.00')}>Aluminum and/or Chrome Polish - $35.00</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick = {() => this.selectService('Concentrated Scratch Correction - $55.00/Panel')}>Concentrated Scratch Correction - $55.00/Panel</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick = {() => this.selectService('Water Spots Removal - $55.00/Panel')}>Water Spots Removal - $55.00/Panel</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick = {() => this.selectService('Trim & Plastic Coating - $55.00')}>Trim & Plastic Coating - $55.00</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick = {() => this.selectService('Fabric & Leather Protection & Restoration (Interior & Exterior) - $55.00')}>Water Spots Removal - $55.00/Panel</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick = {() => this.selectService('Ozone Decontamination - $75.00')}>Ozone Decontamination - $75.00</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick = {() => this.selectService('Glass Polishing and Restoration - $75.00')}>Glass Polishing and Restoration - $75.00/Panel</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick = {() => this.selectService('R1 Ceramic Coating - $650.00')}>R1 Ceramic Coating - $650.00</DropdownItem>    
                </DropdownMenu>
                </Dropdown>
            </div>
        ) 
    }
}

export default extraServices;