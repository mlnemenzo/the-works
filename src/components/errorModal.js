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
                         <button className = "modalButton toggle-button col-4 offset-4 text-center" id = "centered-toggle-button" onClick = { e => {this.showModal(e)}}> {" "}
                            Thanks! Your appointment has been scheduled!{" "}</button>
                    </div>
                </div>
            </div>
            )
    }
}


export default ErrorModal;