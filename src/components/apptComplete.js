import React, { Component } from 'react';
import { Link} from 'react-router-dom';

class ApptComplete extends Component {
    
    
    onClose = e => {
            this.props.onCLose && this.props.onCLose(e);
        };
        
    

    render() {

        
        if(!this.props.show) {
            return null;
        }

        return( 
            <div className="modal-overlay col-12">
                <div className="modalButton col-6 offset-3 text-center">
                    <p className = "content col-12 text-center">Thanks! Your Appointment has been scheduled!</p>
                    <div className="action">
                        <Link className = "col-12 landing-link  text-center" to = "/">Close</Link>   
                    </div>
                </div>
            </div>  
        );
    }
}

export default ApptComplete;