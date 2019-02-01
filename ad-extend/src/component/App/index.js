import React, { Component } from 'react';
import MyNavBar from '../../container/MyNavBar';
import MyNote from '../MyNote';
import MyPanel from '../MyPanel';
import './index.scss';

class App extends Component {
    render () {
        return (
            <div>
                <MyNavBar/>
                <MyNote/>
                <MyPanel/>
            </div>
        );
    }
}

export default App;
