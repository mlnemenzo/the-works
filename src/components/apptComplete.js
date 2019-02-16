import React, { Component } from 'react'

class ApptComplete extends Component {
    
    render() {

        state = {
            show : false
        }

        showModal = e => ({
            show: !this.setState.show   
        });

        return( 
            <div className="apptModal col-4 offset-4 text-center">Hello World</div>
        );
    }
}

export default ApptComplete;

