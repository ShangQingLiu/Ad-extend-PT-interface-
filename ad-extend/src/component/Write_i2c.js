import React from 'react';
import {
    Col,
    Panel,
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap'
import {messager, getMessage} from '../api'
class Write_i2c extends React.Component{
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
                <Panel bsStyle="danger">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">I2c-write</Panel.Title>
                    </Panel.Heading>
                    <InputGroup>
                        <InputGroup.Addon>
                            0x
                        </InputGroup.Addon>
                        <FormControl
                            placeholder="Slave-address(e.g. 5A)"
                            aria-label="slave_address"
                            aria-describedby="slave_address"
                            onChange={this.handleClick.bind(this, 'slave_address')}
                        />
                        <FormControl
                            placeholder="Reg-address(e.g. FF)"
                            aria-label="reg_address"
                            aria-describedby="reg_address"
                            onChange={this.handleChange.bind(this, 'reg_address')}
                        />
                        <FormControl
                            placeholder="Data (e.g. 3D)"
                            aria-label="data"
                            aria-describedby="data"
                            onChange={this.handleChange.bind(this, 'data')}
                        />
                    </InputGroup>
                    <Panel.Body>
                        <Button onClick={() => this.handleClick('write_i2c')}>
                            Write
                        </Button>
                    </Panel.Body>
                </Panel>
            </Col>
        );
    }
}
export default Write_i2c;
