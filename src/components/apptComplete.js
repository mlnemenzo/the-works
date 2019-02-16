import React, { Component } from 'react'

class ApptComplete extends Component {
    
    onClose = e => {
        this.props.show = false;
    }

    render() {

        if(!this.props.show) {
            return null;
        }

        return( 
            <div className="apptModal col-4 offset-4 text-center">
            <div>{this.props.children}}</div>
            <button onClose = {
                e => { this.onClose(e)}
            }>Close</button>
            </div>  
        );
    }
    
}

export default ApptComplete;

