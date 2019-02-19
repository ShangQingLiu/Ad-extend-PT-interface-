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
        this.state = {
            form: {
                read_slave_address: '',
                read_reg_address: '',
                read_length: '',
                receive_data:'receive_data'
            }
        }
    }

    handleClick = message => {
        console.log("handle");
        if (message.toString() === 'read_i2c') {
            messager("read_i2c," + this.state.form.read_slave_address + "," + this.state.form.read_reg_address
                + "," + this.state.form.read_length);
            getMessage(this, 0);
        } else {
            console.log("error_read_i2c");
        }
    };

    handleChange(change, event) {
        var toChange = this.state.form;
        toChange[change] = event.target.value;
        this.setState({form: toChange});
    }
    decimalToHexString(number)
    {
        if (number < 0)
        {
            number = 0xFFFFFFFF + number + 1;
        }

        return number.toString(16).toUpperCase();
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
                   <p>{"0x"+this.decimalToHexString(parseInt(this.state.form.receive_data))}</p>
               </Panel>
           </Col>
       );
    }
}
export default Read_i2c;
