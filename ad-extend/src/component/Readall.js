import React from 'react';
import {
    Col,
    Panel,
    Alert,
    Button
} from 'react-bootstrap';
import ReadTable from './ReadTable'
import {messager} from '../api'
class Readall extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick = message => {
        console.log("handle");
        if (message.toString() === 'read_all') {
            messager("read_all," + this.state.form.slave_address + "," + this.state.form.reg_address
                + "," + this.state.form.data);
        } else {
            messager(message);
        }
    };
    render() {
        return(
            <Col xs={12} md={12}>
                <Panel bsStyle="danger">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Read Table</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        {/*<h3>Received Data</h3>*/}
                        <Alert varient="success">
                            <div>
                                <ReadTable/>
                            </div>
                        </Alert>
                        <Button onClick={() => this.handleClick('read_all')}>
                           Read All
                        </Button>
                    </Panel.Body>
                </Panel>
            </Col>
        );
    }
}
export default Readall;
