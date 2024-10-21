import React, {Component} from 'react';
import {Alert, UncontrolledAlert} from 'reactstrap';

class R034_ReactstrapAeers extends Component{
    render(){
        return(
            <div>
                <Alert color="light">
                    Simple Alert [color:light]
                </Alert>
                <UncontrolledAlert color="warning">
                    UncontrolledAlert [color: warning]
                </UncontrolledAlert>
            </div>
        )
    }
}

export default R034_ReactstrapAeers;