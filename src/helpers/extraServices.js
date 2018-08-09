// import React, { Component } from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import MultiSelectReact from 'multi-select-react';

// class extraServices extends Component {

//     constructor(props) {
//         super(props);

//         this.toggle = this.toggle.bind(this)

//         this.state = {
//             DropDownOpen : false,
//             // multiSelect : 
//             // selectServices : ""
//         }

        
//     }

    // serviceList() {
    //     const services = this.multiSelect;
    //     const serviceMap = services.map((service) => 
    //         <ServiceMap key={service} value={service}/>
    //     )

    //     return(
    //         <ul>{serviceMap}</ul>
    //     )    
    // }

//     selectService(selectServices ) {
//         this.setState({
//             extraService : selectServices
//         }) 
//     }

//     toggle() {
//         this.setState({
//             dropDownOpen : !this.state.dropDownOpen
//         });
//     }

//     render() {

//         const { serviceListing } = this.state;

//         const selectedOptionsStyles = {
//             color: "#3c763d",
//             backgroundColor: "#dff0d8"
//         };
//         const optionsListStyles = {
//             backgroundColor: "#dff0d8",
//             color: "#3c763d"
//         };
        
//         return(
//             <div className="servicesBody col-12 col-sm-12 col-md-6 col-lg-6 text-left ">
//                 <p className="extraServices">Extra Services:</p>
                
//                 {/* <Dropdown isOpen={this.state.dropDownOpen} toggle = {this.toggle}>
//                 <DropdownToggle title =  "extra services" caret>{this.state.extraService}</DropdownToggle>
//                 {this.state.selectServices}
//                 <DropdownMenu>
//                     <DropdownItem onClick = {() => this.selectService('Engine Detail - $55.00')}>Engine Detail - $55.00</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem onClick = {() => this.selectService('Headlight Restoration - $55.00')}>Headlight Restoration - $55.00</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem onClick = {() => this.selectService('Aluminum and/or Chrome Polish - $35.00')}>Aluminum and/or Chrome Polish - $35.00</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem onClick = {() => this.selectService('Concentrated Scratch Correction - $55.00/Panel')}>Concentrated Scratch Correction - $55.00/Panel</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem onClick = {() => this.selectService('Water Spots Removal - $55.00/Panel')}>Water Spots Removal - $55.00/Panel</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem onClick = {() => this.selectService('Trim & Plastic Coating - $55.00')}>Trim & Plastic Coating - $55.00</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem onClick = {() => this.selectService('Fabric & Leather Protection & Restoration (Interior & Exterior) - $55.00')}>Water Spots Removal - $55.00/Panel</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem onClick = {() => this.selectService('Ozone Decontamination - $75.00')}>Ozone Decontamination - $75.00</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem onClick = {() => this.selectService('Glass Polishing and Restoration - $75.00')}>Glass Polishing and Restoration - $75.00/Panel</DropdownItem>
//                     <DropdownItem divider />
//                     <DropdownItem onClick = {() => this.selectService('R1 Ceramic Coating - $650.00')}>R1 Ceramic Coating - $650.00</DropdownItem>    
//                 </DropdownMenu>
//                 </Dropdown> */}
//                 <MultiSelectReact 
//                 options={this.state.multiSelect}
//                 optionClicked={this.optionClicked.bind(this)}
//                 selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
//                 selectedOptionsStyles={selectedOptionsStyles}
//                 optionsListStyles={optionsListStyles}
//                 isTextWrap={true}/>
//             </div>
//         ) 
//     }

//         optionClicked(optionsList) {
//             this.setState({ multiSelect: optionsList });
//     }
//         selectedBadgeClicked(optionsList) {
//             this.setState({ multiSelect: optionsList });
//     }

// }

// export default extraServices;