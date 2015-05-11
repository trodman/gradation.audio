var canvas; var sins; var cmajor; var socket;

function setup() {
    //socket = io.connect('http://localhost:5000/');
    socket = io.connect('https://gradation.herokuapp.com');
    socket.emit('blueConnect');
    $(this).unload(function() {
        socket.emit('blueDisconnect');
    });

    //tweets for connetion testing
    socket.on('tweet', function(tweet) {
        console.log('tweet from', tweet.ID);
        console.log('contents:', tweet.text);
    });
    
    initWidth = windowWidth;
    initHeight = windowHeight;
    
    createCanvas(0, 0);
    
    aminor = [0, 57, 59, 60, 62, 64, 65, 67, 69];
    cmajor = [0, 48, 50, 52, 53, 55, 57, 59, 60];
    
    flydian = [0, 53, 55, 57, 59, 60, 62, 64, 65];
    ddorian = [0, 50, 52, 53, 55, 57, 59, 60, 62];
    
    ephrygian = [0, 52, 53, 55, 57, 59, 60, 62, 64];
    gmixolydian = [0, 55, 57, 59, 60, 62, 64, 65, 67];
    
    setInterval(function() {
        widthVar = random(initWidth);
        heightVar = random(initHeight);
        $('#box').animate({width:widthVar},500);
        $('#box').animate({height:heightVar},500);
    }, 2000);

    sin = new p5.TriOsc();
    sin.amp(0.5);
    sin.freq(midiToFreq(48));
    sin.start();

    
    sin2 = new p5.TriOsc();
    sin2.amp(0.5);
    sin2.freq(midiToFreq(52));
    sin2.start();
}

function draw() {
}

function windowResized() {
    widthVar = random(windowWidth);
    heightVar = random(windowHeight);
    
    // set horizontal pitch
    width1 = map(windowWidth, 0, initWidth, 1, 8)
    width2 = round(width1);
    noteX = midiToFreq(ddorian[width2]);
    sin.freq(noteX);
    console.log('noteX is = ' + noteX);
    socket.emit('blueOscX', noteX);
    
    
    //set vertical pitch
    height1 = map(windowHeight, 0, initHeight, 1, 8)
    height2 = round(height1);
    //console.log(height1 '+' height2);
    noteY = midiToFreq(cmajor[height2]);
    sin2.freq(noteY);
    noteOut2 = {noteY: noteY};
    console.log('noteY is = ' + noteY);
    socket.emit('blueOscY', noteY);
}