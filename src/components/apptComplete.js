import React, { Component } from 'react'

class apptComplete extends Component {

    state() {
        show: false;
    }

    showModal = e => {
        this.setState({
            show: true
        })
    }

    
    render() {

        if(!this.props.show) {
            return null;
        }
        return( 
            <Modal show = {this.state.show}>Thanks! Your appointment has been scheduled!<Modal/>
            <button onClick = { e => showModal()}></button>
            
            
        );
    }
}

export default apptComplete