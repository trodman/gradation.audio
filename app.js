var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//serving public folder
app.use(express.static(__dirname + '/public'));

//setting up client counters for total and each site
var connected = 0;
var pinkcount = 0;
var redcount = 0;
var orangecount = 0;
var yellowcount = 0;
var greencount = 0;
var bluecount = 0;

io.on('connection', function (socket) {
    //tweets for connection testing
    console.log("We have a new client: " + socket.id);
    var tweet = {ID: socket.id, text: 'Hello, world!'};
    var interval = setInterval(function () {
        socket.emit('tweet', tweet);
    }, 1000);
    //clearing connection test on disconnect
    socket.on('disconnect', function () {
        clearInterval(interval);
    });
    //logging number of connected clients
    var user = {id: socket.id};
    connected++;
    console.log ('number of people connected is ' + connected);
    io.emit('useron', connected, pinkcount, redcount, orangecount, yellowcount, greencount, bluecount);
    
    // clearing all oscillators on user disconnect
    socket.on('disconnect', function () {
        console.log('user logged off ' + socket.id);
        io.emit('userClear', user);
        connected--;
        console.log ('number of people connected is ' + connected);
        io.emit('useroff', connected, pinkcount, redcount, orangecount, yellowcount, greencount, bluecount);
        //resets all counters and disconnects all sites if nobody is visiting
        if (connected == 0) {
            pinkcount = 0;
            io.emit('pinkDisconnect', pinkcount);
            redcount = 0;
            io.emit('redDisconnect', redcount);
            orangecount = 0;
            io.emit('orangeDisconnect', orangecount);
            yellowcount = 0;
            io.emit('yellowDisconnect', yellowcount);
            greencount = 0;
            io.emit('greenDisconnect', greencount);
            bluecount = 0;
            io.emit('blueDisconnect', bluecount);
        }
    });
    
    /*handling for pink
    */
    socket.on('pinkConnect', function() {
        pinkcount++;
        console.log('users connected to pink: ' + pinkcount);
        io.emit('pinkConnect', pinkcount);
    });
    socket.on('pinkDisconnect', function() {
        pinkcount--;
        console.log('users connected to pink: ' + pinkcount);
        io.emit('pinkDisconnect', pinkcount);
    });
    
    // turning oscaillators on, takes in a box ID and uses it to select on client side
    socket.on('sinOn', function(tag) {
        console.log(tag + " entered");
        io.emit('sinOn', tag, user);
    });
    // turning oscillators off
    socket.on('sinOff', function(tag) {
        console.log(tag + " exited");
        io.emit('sinOff', tag, user);
    });
    
    /*handling for red
    */
    socket.on('redConnect', function() {
        redcount++;
        console.log('users connected to red: ' + redcount);
        io.emit('redConnect', redcount);
    });
    socket.on('redDisconnect', function() {
        redcount--;
        console.log('users connected to red: ' + redcount);
        io.emit('redDisconnect', redcount);
    });
    /*handling for orange
    */
    socket.on('orangeConnect', function() {
        orangecount++;
        console.log('users connected to orange: ' + orangecount);
        io.emit('orangeConnect', orangecount);
    });
    socket.on('orangeDisconnect', function() {
        orangecount--;
        console.log('users connected to orange: ' + orangecount);
        io.emit('orangeDisconnect', orangecount);
    });
    /* handling for yellow
    */
    socket.on('yellowConnect', function() {
        yellowcount++;
        console.log('users connected to yellow: ' + yellowcount);
        io.emit('yellowConnect', yellowcount);
    });
    socket.on('yellowDisconnect', function() {
        yellowcount--;
        console.log('users connected to yellow: ' + yellowcount);
        io.emit('yellowDisconnect', yellowcount);
    });
    /* handling for green
    */
    socket.on('greenConnect', function() {
        greencount++;
        console.log('users connected to green: ' + greencount);
        io.emit('greenConnect', greencount);
    });
    socket.on('greenDisconnect', function() {
        greencount--;
        console.log('users connected to green: ' + greencount);
        io.emit('greenDisconnect', greencount);
    });
    /* handling for blue
    */
    socket.on('blueConnect', function() {
        bluecount++;
        user = {id: socket.id};
        console.log('users connected to blue: ' + bluecount);
        io.emit('blueConnect', bluecount, user);
    });
    socket.on('blueDisconnect', function() {
        bluecount--;
        user = {id: socket.id};
        console.log('users connected to blue: ' + bluecount);
        io.emit('blueDisconnect', bluecount, user);
    });
    socket.on('blueOscX', function(noteX) {
        console.log('blueOscX ping + ' + noteX);
        user = {id: socket.id};
        io.emit('blueOscX', noteX, user);
        console.log('noteX out is + ' + noteX);
    });
    socket.on('blueOscY', function(noteY) {
        console.log('blueOscY ping + ' + noteY);
        user = {id: socket.id};
        io.emit('blueOscY', noteY, user);
        console.log('noteY out is + ' + noteY);
    });
});

http.listen(process.env.PORT || 3000, function(){
    console.log('listening on', http.address().port);
});