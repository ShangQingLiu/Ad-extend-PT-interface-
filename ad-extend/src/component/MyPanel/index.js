import React from 'react';
import {Panel,
 Row,
 Col,
 Button,
 ButtonGroup,
    InputGroup,
FormControl,
   Alert
} from 'react-bootstrap';
import Graphic from '../Graphic';
import{messager,getMessage, receiveMessager} from '../../api'

class MyPanel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            form:{
                slave_address:'',
                reg_address:'',
                data:'',
                read_slave_address:'',
                read_reg_address:'',
                read_length:'',
                receive_data:''
            }
        }
    }
    handleClick= message =>{
        console.log("handle");
        if(message.toString()==='write_i2c' ){
            messager("write_i2c,"+this.state.form.slave_address+","+this.state.form.reg_address
            +","+this.state.form.data);
        }
        else if(message.toString()==='read_i2c' ){
            receiveMessager("read_i2c,"+this.state.form.read_slave_address+","+this.state.form.read_reg_address
                +","+this.state.form.read_length);
            var toChange = this.state.form;
            toChange["receive_data"] = getMessage();
            this.setState({form:toChange});
        }
        else{
            messager(message);
        }
    };
    handleChange(change, event) {
        var toChange = this.state.form;
        toChange[change] = event.target.value;
        this.setState({form: toChange});
    }
    render() {
        return(
            <div>
                {/*<Row className="show-grid">*/}
                    {/*<Col xs={6} md={4}>*/}
                        {/*<Panel bsStyle="primary">*/}
                            {/*<Panel.Heading>*/}
                                {/*<Panel.Title componentClass="h3">Panel heading</Panel.Title>*/}
                            {/*</Panel.Heading>*/}
                            {/*<Panel.Body>Panel content*/}
                            {/*</Panel.Body>*/}
                        {/*</Panel>*/}
                    {/*</Col>*/}
                    {/*<Col xs={6} md={4}>*/}
                        {/*<Panel bsStyle="success">*/}
                            {/*<Panel.Heading>*/}
                                {/*<Panel.Title componentClass="h3">Serial LED control</Panel.Title>*/}
                            {/*</Panel.Heading>*/}
                            {/*<Panel.Body>*/}
                                {/*<ButtonGroup>*/}
                                    {/*<Button onClick={()=>this.handleClick('2')}>*/}
                                        {/*Green*/}
                                    {/*</Button>*/}
                                    {/*<Button onClick={()=>this.handleClick('3')}>*/}
                                        {/*Yellow*/}
                                    {/*</Button>*/}
                                    {/*<Button onClick={()=>this.handleClick('1')}>*/}
                                        {/*Red*/}
                                    {/*</Button>*/}
                                {/*</ButtonGroup>*/}
                            {/*</Panel.Body>*/}
                        {/*</Panel>*/}
                    {/*</Col>*/}
                    {/*<Col xs={6} md={4}>*/}
                        {/*<Panel bsStyle="info">*/}
                            {/*<Panel.Heading>*/}
                                {/*<Panel.Title componentClass="h3">BT LED control</Panel.Title>*/}
                            {/*</Panel.Heading>*/}
                            {/*<Panel.Body>*/}
                                {/*<ButtonGroup>*/}
                                    {/*<Button onClick={()=>this.handleClick('1')}>*/}
                                        {/*led on*/}
                                    {/*</Button>*/}
                                    {/*<Button onClick={()=>this.handleClick('0')}>*/}
                                        {/*led off*/}
                                    {/*</Button>*/}
                                {/*</ButtonGroup>*/}
                            {/*</Panel.Body>*/}
                        {/*</Panel>*/}
                    {/*</Col>*/}
                {/*</Row>*/}
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <Panel bsStyle="warning">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">I2c-read</Panel.Title>
                            </Panel.Heading>
                            <InputGroup>
                                <InputGroup.Addon>
                                    0x
                                </InputGroup.Addon>
                                <FormControl
                                    name="read_slave_address"
                                    placeholder="Slave-address(e.g. 5A)"
                                    aria-label="slave_address"
                                    aria-describedby="slave_address"
                                    onChange={this.handleClick.bind(this, 'name')}
                                />
                                <FormControl
                                    name="read_reg_address"
                                    placeholder="Reg-address(e.g. FF)"
                                    aria-label="reg_address"
                                    aria-describedby="reg_address"
                                    onChange={this.handleChange.bind(this,'name')}
                                />
                            </InputGroup>
                            <FormControl
                                name="read_length"
                                placeholder="Data length"
                                aria-label="data"
                                aria-describedby="data"
                                onChange={this.handleChange.bind(this,'name')}
                            />
                            <Panel.Body>
                                <ButtonGroup>
                                    <Button onClick={()=>this.handleClick('read_i2c')}>
                                        Read
                                    </Button>
                                </ButtonGroup>
                                <h3>Received Data</h3>
                                <Alert  varient="success">
                                    <p>{this.state.form.receive_data}</p>
                                </Alert>
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col xs={6} md={4}>
                        <Panel bsStyle="danger">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">I2c-write</Panel.Title>
                            </Panel.Heading>
                            <InputGroup>
                                <InputGroup.Addon>
                                    0x
                                </InputGroup.Addon>
                                <FormControl
                                    name="slave_address"
                                    placeholder="Slave-address(e.g. 5A)"
                                    aria-label="slave_address"
                                    aria-describedby="slave_address"
                                    onChange={this.handleClick.bind(this, 'name')}
                                />
                                <FormControl
                                    name="reg_address"
                                    placeholder="Reg-address(e.g. FF)"
                                    aria-label="reg_address"
                                    aria-describedby="reg_address"
                                    onChange={this.handleChange.bind(this,'name')}
                                />
                            </InputGroup>
                            <FormControl
                                name="data"
                                placeholder="Data"
                                aria-label="data"
                                aria-describedby="data"
                                onChange={this.handleChange.bind(this,'name')}
                            />
                            <Panel.Body>
                                <Button onClick={()=>this.handleClick('write_i2c')}>
                                    Write
                                </Button>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default MyPanel;