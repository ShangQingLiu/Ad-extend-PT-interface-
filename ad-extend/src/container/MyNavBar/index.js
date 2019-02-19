import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from "react-router-dom";

class MyNavBar extends React.Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/read_i2c">
                            Read I2C
                        </NavItem>
                        <NavItem eventKey={2} href="/write_i2c">
                            Write I2C
                        </NavItem>
                        <NavItem eventKey={3} href="/read_all">
                            Read All
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MyNavBar;