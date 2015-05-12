var canvas; var sin; var cmajor; var socket;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    //cmajor = [0, 48, 50, 52, 53, 55, 57, 59, 60];
    background(255, 160, 122);
    //socket = io.connect('http://localhost:5000/');
    socket = io.connect('https://gradation.herokuapp.com');
    socket.emit('orangeConnect');
    $(this).unload(function() {
        socket.emit('orangeDisconnect');
    });
    
    //tweets for connetion testing
    socket.on('tweet', function(tweet) {
        console.log('tweet from', tweet.ID);
        console.log('contents:', tweet.text);
    });
    socket.on('orangeMouseDown',
        function(data) {
            fill(255);
            noStroke();
            rect(data.x, data.y, 40, 40);
        }
    );
    sin = new p5.SqrOsc();
    sin.freq(220);
    sin.amp(0);
    sin.start();
}

var counter = 0;

function mouseDragged() {
    // Make a little object with mouseX and mouseY
    sin.amp(.2, .1);
    var data = {
        x: mouseX,
        y: mouseY
    };
    // Send that object to the socket
    counter++;
    newFreq = constrain(map(counter, 0, 1000, 220, 880), 220, 880);
    console.log(newFreq);
    sin.freq(newFreq);
    socket.emit('mouseDown', data, newFreq);
}
function mouseReleased() {
    sin.amp(0, .1);
    socket.emit('mouseUp');
}