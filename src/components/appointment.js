import React, { Component } from 'react';

class Appointment extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="appointment-body">
                <h1 className="appointments">Book an Appointment</h1>
            </div>
        )
    }
}

export default Appointment;