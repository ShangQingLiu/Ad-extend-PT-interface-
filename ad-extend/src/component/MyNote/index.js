import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import Proptypes from 'prop-types';
class MyNote extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <Jumbotron>
                <h1>Bluetooth!</h1>
                <p>
                    time:{this.props.time}
                </p>
                <p>
                    <Button bsStyle="primary" onClick={this.handleCkick}>connect</Button>
                </p>
            </Jumbotron>
        );
    }
}
MyNote.Proptypes={
  time:Proptypes.string
};


export default MyNote;