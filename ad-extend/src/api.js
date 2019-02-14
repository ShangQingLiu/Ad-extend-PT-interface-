import openSocket from 'socket.io-client';
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
let getMessage =()=>{
   socket.on("receive_data",function (msg) {
      console.log(msg);
      return msg;
   })
};
export { subscribeToTimer ,messager, getMessage, receiveMessager};