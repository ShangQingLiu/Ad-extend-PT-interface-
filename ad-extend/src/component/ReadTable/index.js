import React from 'react'
import {Table} from 'react-bootstrap'
class ReadTable extends React.Component{
    MyTableRow = (key) =>{
    var row = [];
    for (var i = 0; i< 16; i++){
        row.push(<td width={'2%'}>FF</td>)
    }
    return <tr><tdwi width={'2%'}>{key}</tdwi>{row}</tr>;
    };
    MyTableHead =()=>{
        var head = [];
        for (var i = 0; i<16; i++){
           head.push(<th>{(i).toString(16)}</th>)
        }
      return <thead><tr><th width={'1%'}>#</th>{head}</tr></thead>;
    };
    MyTable = ()=>{
        var column = [];
        for (var i = 0; i< 16; i++){
            column.push(this.MyTableRow((i).toString(16)))
        }
        var head = [];
        head.push(this.MyTableHead());
        return <Table size="xs">{head}<tbody>{column}</tbody></Table>
    };
    render() {
        return(
            this.MyTable()
        )
    }

}
export default ReadTable;
