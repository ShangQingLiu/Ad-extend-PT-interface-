import React from 'react';
import {
    Col,
   Panel,
   InputGroup,
   FormControl,
    ButtonGroup,
    Button
} from 'react-bootstrap'
import {messager, getMessage}  from '../api'
class Read_i2c extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick = message => {
        console.log("handle");
        if (message.toString() === 'write_i2c') {
            messager("write_i2c," + this.state.form.slave_address + "," + this.state.form.reg_address
                + "," + this.state.form.data);
        } else if (message.toString() === 'read_i2c') {
            messager("read_i2c," + this.state.form.read_slave_address + "," + this.state.form.read_reg_address
                + "," + this.state.form.read_length);
            getMessage(this);
        } else {
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
                           placeholder="Slave-address(e.g. 5A)"
                           aria-label="slave_address"
                           aria-describedby="slave_address"
                           onChange={this.handleChange.bind(this, 'read_slave_address')}
                       />
                       <FormControl
                           placeholder="Reg-address(e.g. FF)"
                           aria-label="reg_address"
                           aria-describedby="reg_address"
                           onChange={this.handleChange.bind(this, 'read_reg_address')}
                       />
                   </InputGroup>
                   <FormControl
                       placeholder="Data length"
                       aria-label="data"
                       aria-describedby="data"
                       onChange={this.handleChange.bind(this, 'read_length')}
                   />
                   <Panel.Body>
                       <ButtonGroup>
                           <Button onClick={() => this.handleClick('read_i2c')}>
                               Read
                           </Button>
                       </ButtonGroup>
                   </Panel.Body>
               </Panel>
           </Col>
       );
    }
}
export default Read_i2c;
