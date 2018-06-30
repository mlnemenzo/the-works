import React, { Component } from 'react';

class Payments extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="payments-body">
                <h1 className="payments-header">Payments</h1>
            </div>
        )
    }
}

export default Payments;