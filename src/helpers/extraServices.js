import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class extraServices extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectServices : []
        }
    }

    selectService(selectServices) {
        this.setState({
            serviceSelected : service
        }) 
    }

    toggle() {
        this.setState({
            dropDownOpen : !dropDownOpen
        })
    }

    render() {
        return(
            <div className="servicesBody col-12 col-sm-12 col-md-4 col-lg-4 text-left ">
                <p className="extraServices">Extra Services</p>
                <DropdownToggle isOpen={this.state.dropDownOpen}></DropdownToggle>
            </div>
        ) 
    }
}

export default extraServices;