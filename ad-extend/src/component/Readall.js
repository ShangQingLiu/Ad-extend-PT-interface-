import React from 'react';
import Col from 'react-bootstrap/lib/Col'
import Panel from 'react-bootstrap/lib/Panel'
import Alert from 'react-bootstrap/lib/Alert'
import Button from 'react-bootstrap/lib/Button'
import ReadTable from './ReadTable'
import initReceiveAllData from '../constants/initData'
import {messager, getMessage} from '../api'

class Readall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                receive_all_data:initReceiveAllData
            }
        }
    }


    handleClick = message => {
        console.log("handle");
        if (message.toString() === 'read_all') {
            for(var i=0;i<5;i++){
                messager("read_all," + "50" + "," + i.toString()
                    + "," + this.state.form.data);
                getMessage(this, i);
            }
        } else {
            messager(message);
        }
    };

    render() {
        return (
            <Col xs={12} md={12}>
                <Panel bsStyle="danger">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Read Table</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        {/*<h3>Received Data</h3>*/}
                        <Alert varient="success">
                            <div>
                                <ReadTable receiveData={this.state.form.receive_all_data}/>
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
