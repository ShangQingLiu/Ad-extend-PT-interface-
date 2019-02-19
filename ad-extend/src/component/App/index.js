import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import MyNavBar from '../../container/MyNavBar';
import MyNote from '../MyNote';
import MyPanel from '../MyPanel';
import Home from '../Home'
import Read_i2c from '../Read_i2c';
import Write_i2c from '../Write_i2c'
import ReadAll from '../Readall'
import './index.scss';

class App extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <Router>
            <div>
                <MyNavBar/>
                <MyPanel/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/read_i2c" component={Read_i2c} />
                <Route exact path="/write_i2c" component={Write_i2c}/>
                <Route exact path="/read_all" component={ReadAll}/>
            </div>
            </Router>
        );
    }
}

export default App;
