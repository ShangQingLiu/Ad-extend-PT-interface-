import React, { Component } from 'react';
import MyNavBar from '../../container/MyNavBar';
import MyNote from '../MyNote';
import MyPanel from '../MyPanel';
import './index.scss';
import {subscribeToTimer} from'../../api'

class App extends Component {
    constructor(props){
        super(props);
        subscribeToTimer((err,timestamp)=> this.setState({
            timestamp
        }));
        this.state = {
            timestamp:'no timestamp yet'
        };
    }
    render () {
        return (
            <div>
                <MyNavBar/>
                <MyNote time={this.state.timestamp}/>
                <MyPanel/>
            </div>
        );
    }
}

export default App;
