import React, { Component } from 'react'

class ErrorModal extends Component {

    onClose = e => {
        this.props.onCLose && this.props.onCLose(e);
    };

    render() {
        return(
            <div className="errorBody-overlay">
                <div className="modalButton col-6 offset-3 text-centered">
                    <p className="content col-12 text-center">Please correct indicated errors.</p>
                    <div className="action">
                         <button className = "toggle-button col-12 text-center" id = "centered-toggle-button" onClick = { e => {this.showModal(e)}}>OK</button>
                    </div>
                </div>
            </div>
            )
    }
}


export default ErrorModal;