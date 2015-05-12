var canvas; var socket; var noise;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    cmajor = [0, 48, 50, 52, 53, 55, 57, 59, 60];
    socket = io.connect('http://localhost:5000/');
    //socket = io.connect('https://gradation.herokuapp.com');
    socket.emit('greenConnect');
    $(this).unload(function() {
        socket.emit('greenDisconnect');
    });
    //tweets for connetion testing
    socket.on('tweet', function(tweet) {
        console.log('tweet from', tweet.ID);
        console.log('contents:', tweet.text);
    });
    noise = new p5.Noise('brown');
    noise.start();
    noise.amp(0);
    delay = new p5.Delay();
    delay.process(noise, .12, .7, 2300);
}

function mouseWheel() {
    var wheel = event.wheelDelta;
    console.log(wheel);
    env = new p5.Env(.01, .2, .2, .1);
    env.play(noise);
    socket.emit('greenScroll', wheel);
    return false;
}

function windowResized() {
    canvas.width = windowWidth;
    canvas.height = windowHeight;
}