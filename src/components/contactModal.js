import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactModal extends Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e)
    }
 
    render() {

        if(!this.props.show) {
            return null;
        }

        return(
            <div className="modal-overlay col-12">
                <div className="modalButton col-6 offset-3 text-center">
                    <p className="content">Thanks! Your message has been sent!</p>
                    <div className="action">
                        <Link className = "col-12 landing-link text-center" to = "/">Close</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactModal;