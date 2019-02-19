import React from 'react';
import {messager, getMessage} from '../../api'

class MyPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                slave_address: '',
                reg_address: '',
                data: '',
                read_slave_address: '',
                read_reg_address: '',
                read_length: '',
                receive_data: ''
            }
        }
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


    render() {
        return (
            <div>
            </div>
        );
    }

}

export default MyPanel;