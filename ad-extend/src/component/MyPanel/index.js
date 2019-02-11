import React from 'react';
import {Panel, Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import Graphic from '../Graphic';
import{messager} from '../../api'

class MyPanel extends React.Component{
    constructor(props){
        super(props);

    }
    handleClick= message =>{
        messager(message);
    };
    render() {
        return(
            <div>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <Panel bsStyle="primary">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>Panel content
                                <Graphic/>
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col xs={6} md={4}>
                        <Panel bsStyle="success">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">LED control</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <ButtonGroup>
                                    <Button onClick={(e)=>this.handleClick('2')}>
                                        Green
                                    </Button>
                                    <Button onClick={(e)=>this.handleClick('3')}>
                                        Yellow
                                    </Button>
                                    <Button onClick={(e)=>this.handleClick('1')}>
                                        Red
                                    </Button>
                                </ButtonGroup>
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col xs={6} md={4}>
                        <Panel bsStyle="info">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Serial control</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <ButtonGroup>
                                    <Button >
                                        led on
                                    </Button>
                                    <Button>
                                        led off
                                    </Button>
                                </ButtonGroup>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <Panel bsStyle="warning">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>Panel content</Panel.Body>
                        </Panel>
                    </Col>
                    <Col xs={6} md={4}>
                        <Panel bsStyle="danger">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Panel heading</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>Panel content</Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default MyPanel;