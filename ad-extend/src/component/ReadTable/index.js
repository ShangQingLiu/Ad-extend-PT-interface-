import React from 'react'
import PropTypes from 'prop-types'
import {Table} from 'react-bootstrap'

class ReadTable extends React.Component {
    constructor(props) {
        super(props);
        }

    decimalToHexString(number)
    {
        if (number < 0)
        {
            number = 0xFFFFFFFF + number + 1;
        }

        return number.toString(16).toUpperCase();
    }

    MyTableRow = (key, index, receiveData) => {
        var t = !!receiveData.length;
        var row = [];
        for (var i = 0; i < 16; i++) {
            row.push(<td width={'2%'} key={'cell' + key + i.toString()}>{t?this.decimalToHexString(parseInt(receiveData[parseInt(index * 16 + i)])):{}}</td>)
        }
        return <tr key={'trrow' + key}>
            <td width={'2%'} key={'tdrow' + key}>{key}</td>
            {row}</tr>;
    };
    MyTableHead = (ukey) => {
        var head = [];
        for (var i = 0; i < 16; i++) {
            head.push(<th key={'head' + i}>{(i).toString(16)}</th>)
        }
        return <thead key={'thed' + ukey}>
        <tr key={'Head' + ukey}>
            <th width={'1%'}>#</th>
            {head}</tr>
        </thead>;
    };
    MyTable = (receiveData) => {
        var column = [];
        for (var i = 0; i < 16; i++) {
            column.push(this.MyTableRow((i).toString(16), i, receiveData))
        }
        var head = [];
        head.push(this.MyTableHead(0));
        return <Table size="xs">{head}
            <tbody>{column}</tbody>
        </Table>
    };

    render() {
        return (
            this.MyTable(this.props.receiveData)
        )
    }

}

ReadTable.propTypes={
 receiveData: PropTypes.array
};

export default ReadTable;
