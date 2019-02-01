import React from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';

const Buttons = () =>{
    return(
        <ButtonToolbar>
            <Button bsStyle="primary">Default button</Button>
            <Button>Default button</Button>
        </ButtonToolbar>
    );
};

export default Buttons;