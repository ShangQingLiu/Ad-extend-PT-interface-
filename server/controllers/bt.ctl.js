let CONNECTED = false;
var BTSP = require('bluetooth-serial-port');
var serial = new BTSP.BluetoothSerialPort();

var WebSocketServer = require('socket.io')();
var SERVER_PORT = 8001;               // port number for the webSocket server
WebSocketServer.listen(SERVER_PORT);
console.log('lisening on port', SERVER_PORT);
var connections = new Array;          // list of connections to the server
WebSocketServer.on('connection', handleConnection);

function handleConnection(client) {
    console.log("New Connection"); // you have a new client
    connections.push(client); // add this client to the connections array
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });
    client.on('message', connectToBT); // when a client sends a message,
    client.on('receive_data', receiveData);
    client.on('close', function () { // when a client closes its connection
        console.log("connection closed"); // print it out
        var position = connections.indexOf(client); // get the client's position in the array
        connections.splice(position, 1); // and delete it from the array
    });
}

function receiveData(data) {
    console.log("receiveData");
    if(CONNECTED) {
        if(data.toString().split(",",1)[0]==='read_i2c'){
            connections[connections.length-1].emit("receive_data", "receive_data test");
        }
    }
    else{
        console.log("It's not connected to the device.");
    }
}

const fakeTableData = ()=>{
    var result = '';
    for(var i=0;i<256;i++){
      result =  result.concat((i).toString(16)+',');
    }
    return result;
};

function connectToBT(data) {
    console.log("sending to serial: " + data);
    // data.toString().split(",",4)[3]
    // connections[connections.length-1].emit("receive_all_data", fakeTableData());
    if(CONNECTED) {
        if(data.toString().split(",",1)[0]==="write_i2c"){
            console.log("write_i2c");

            serial.write(Buffer.from(data, 'utf8'), function (err, bytesWritten) {
                if (err) console.log(err);
            });

            serial.on('data', function (data) {
                console.log('Received: ' + data);
            });
        }
        else if(data.toString().split(",",1)[0]==="read_all"){
            console.log("read_all");

            serial.write(Buffer.from(data, 'utf8'), function (err, bytesWritten) {
                if (err) console.log(err);
            });

            serial.on('data', function (data) {
                console.log('Received: ' + data);
                if(data){
                    connections[connections.length-1].emit("receive_all_data", data);
                }
            });
        }
        else if(data.toString().split(",",1)[0]==='read_i2c'){
            serial.write(Buffer.from(data, 'utf8'), function (err, bytesWritten) {
                if (err) console.log(err);
            });
            serial.on('data', function (data) {
                console.log('Received: ' + data);
                if(data){
                    connections[connections.length-1].emit("receive_data", data);
                }
            });
        }
    }
    else{
        console.log("It's not connected to the device.");
    }
}

serial.on('found', function(address, name) {
    // logger.debug('found ', address, ' & name : ', name);
    // you might want to check the found address with the address of your
    // bluetooth enabled Arduino device here.
    if (name === 'HC-05') {
        serial.findSerialPortChannel(address, function(channel) {
            serial.connect(address, channel, function() {
                console.log('connected');
                CONNECTED = true;
            }, function () {
                console.log('cannot connect');
            });
        });
    }
});

serial.inquire();

