var SerialPort = require('serialport');
var portName = process.argv[2];
var myPort = new SerialPort(portName, 9600);
var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read ASCII lines
myPort.pipe(parser); // pipe the serial stream to the parser

function showPortOpen() {
    console.log('port open. Data rate: ' + myPort.baudRate);
}

function showPortClose() {
    console.log('port closed.');
}

function showError(error) {
    console.log('Serial port error: ' + error);
}


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
    client.on('message', sendToSerial); // when a client sends a message,

    client.on('close', function () { // when a client closes its connection
        console.log("connection closed"); // print it out
        var position = connections.indexOf(client); // get the client's position in the array
        connections.splice(position, 1); // and delete it from the array
    });
}

function sendToSerial(data) {
    console.log("sending to serial: " + data);
    myPort.write(data);
}

// This function broadcasts messages to all webSocket clients
function broadcast(data) {
    for (myConnection in connections) {   // iterate over the array of connections
        connections[myConnection].send(data); // send the data to each connection
    }
}

function readSerialData(data) {
    console.log(data);
    // if there are webSocket connections, send the serial data
    // to all of them:
    if (connections.length > 0) {
        broadcast(data);
    }
}

myPort.on('open', showPortOpen);
parser.on('data', readSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);
