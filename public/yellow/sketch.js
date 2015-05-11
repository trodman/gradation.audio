var canvas; var sins; var cmajor; var socket;

function setup() {
    cmajor = [0, 48, 50, 52, 53, 55, 57, 59, 60];
    socket = io.connect('http://localhost:5000/');
    //socket = io.connect('https://gradation.herokuapp.com');
    socket.emit('yellowConnect');
    $(this).unload(function() {
        socket.emit('yellowDisconnect');
    });
    //tweets for connetion testing
    socket.on('tweet', function(tweet) {
        console.log('tweet from', tweet.ID);
        console.log('contents:', tweet.text);
    });
}