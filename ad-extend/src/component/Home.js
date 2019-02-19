import React from 'react';
import MyNote from './MyNote'
import {subscribeToTimer} from'../api'
import GUCLogo from '../pic/GUC-Logo-RGB.jpg'
import Image from 'react-bootstrap/lib/Image'
import Col from 'react-bootstrap/lib/Col'
class Home extends React.Component{
    constructor(props){
        super(props);
        subscribeToTimer((err,timestamp)=> this.setState({
            timestamp
        }));
        this.state = {
            timestamp:'no timestamp yet'
        };
    }
    render(){
        return(
            <div>
                <Col xs={6} md={4}>
                <Image src={GUCLogo} thumbnail/>
                </Col>
                <br/>
                <MyNote time={this.state.timestamp} hasmargin={true}/>
            </div>
        )
    }
}

export default Home;
