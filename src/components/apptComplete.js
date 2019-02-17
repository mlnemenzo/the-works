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
            <div className="modalButton col-4 offset-4 text-center" id = "modal">
            <div className = "content">{this.props.children}</div>
            <div className="actions">
            <Link className = "landing-link  text-center" to = "/">Close</Link>   
            </div>
            
            </div>  
        );
    }
}

export default ApptComplete;