import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import Proptypes from 'prop-types';
class MyNote extends React.Component{
    proptypes={
        time:Proptypes.string
    };
    constructor(props){
        super(props);
    }
    render() {
        const {time, hasmargin} = this.props;
        return(
            <Jumbotron>
                <h1>Bluetooth control I2c
                <br/>
                <div style={hasmargin?({marginLeft:'8rem'}):({})}>
                <p>
                    time:{time}
                </p>
                </div>
                </h1>
            </Jumbotron>
        );
    }
}


export default MyNote;