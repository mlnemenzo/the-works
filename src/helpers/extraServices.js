import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
            dropDownOpen : !dropDownOpen
        })
    }

    render() {

        const { selectServices } = this.state;

        return(
            <div className="servicesBody col-12 col-sm-12 col-md-4 col-lg-4 text-left ">
                <p className="extraServices">Extra Services</p>
                <Dropdown isOpen={this.state.dropDownOpen} toggle = {this.toggle}>
                <DropdownToggle title =  "extra Services" caret>{this.selectServices}</DropdownToggle>
                {this.state.selectServices}
                <DropdownMenu>
                    <DropdownItem onClick = {() => this.selectService('Engine Detail - $55.00')}></DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </div>
        ) 
    }
}

export default extraServices;