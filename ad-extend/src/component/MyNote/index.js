import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

const MyNote = () =>{
    return(
        <Jumbotron>
            <h1>Bluetooth!</h1>
            <p>
               connect:
            </p>
            <p>
                <Button bsStyle="primary">connect</Button>
            </p>
        </Jumbotron>
    );
};

export default MyNote;