import openSocket from 'socket.io-client';
import receiveAllData from './constants/receiveAllData'
const  socket = openSocket('http://localhost:8001');
function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}
function messager(message) {
    console.log(message);
    socket.emit("message",message);
}
function receiveMessager(message){
    console.log(message);
    socket.emit("receive_data",message);
}
let getMessage =(This, index)=>{
   socket.on("receive_data",function (msg) {
      console.log(msg);
      var buffer = msg;
      var int8View = new Int8Array(buffer);
       var toChange = This.state.form;
       toChange['receive_data'] = int8View[0].toString(16);
       This.setState({form: toChange});
   });
    socket.on("receive_all_data",function (msg) {
        console.log(msg);
        var buffer = msg;
        var int8View = new Int8Array(buffer);
            receiveAllData[index]=int8View[0].toString(16);
        var toChange = This.state.form;
        toChange['receive_all_data'] = receiveAllData;
        This.setState({form: toChange});
    })
};
export { subscribeToTimer ,messager, getMessage, receiveMessager};