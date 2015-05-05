var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
    console.log("We have a new client: " + socket.id);
});

var connected = 0;

io.on('connection', function (socket) {
    /*tweets for connection testing
    var tweet = {ID: socket.id, text: 'Hello, world!'};
    var interval = setInterval(function () {
        socket.emit('tweet', tweet);
    }, 1000);
    
    socket.on('disconnect', function () {
        clearInterval(interval);
    });
    */
    var user = {id: socket.id};
    connected++;
    console.log ('number of people connected is ' + connected);
    
    // clearing all oscillators on user disconnect
    socket.on('disconnect', function () {
        console.log('user logged off ' + socket.id);
        io.emit('userClear', user);
        connected--;
        console.log ('number of people connected is ' + connected);
    });
    
    // turning oscaillators on, takes in a box ID and uses it to select on client side
    socket.on('sinOn', function(tag) {
        console.log(tag + " entered");
        io.emit('sinOn', tag, user);
        //console.log('sin11on', user);
    });
    // turning oscillators off
    socket.on('sinOff', function(tag) {
        console.log(tag + " exited");
        io.emit('sinOff', tag, user);
    });
});

http.listen(process.env.PORT || 3000, function(){
    console.log('listening on', http.address().port);
});