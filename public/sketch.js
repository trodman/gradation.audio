var socket; var canvas; var sins; var recorder; var file;

function setup(){
    canvas = createCanvas(0, 0);
    /*
    
    socket.io handling for all sites
    
    */
    
    //socket = io.connect('http://localhost:5000/');
    socket = io.connect('http://gradation.herokuapp.com');
    
    //tweets for connetion testing
    socket.on('tweet', function(tweet) {
        console.log('tweet from', tweet.ID);
        console.log('contents:', tweet.text);
    });
    
    // handling total user counting
    socket.on('useron', function(connected) {
        if (connected == 1) {
            console.log('users connected is ' + connected);
            $('#count').html(connected);
            $('#isare').html('is');
            $('#users').html('user');
        }
        else if (connected > 1) { 
            console.log('users connected is ' + connected);
            $('#count').html(connected);
            $('#isare').html('are');
            $('#users').html('users');
        }
    });
    socket.on('useroff', function(connected) {
        if (connected == 1) {
            console.log('users connected is ' + connected);
            $('#count').html(connected);
            $('#isare').html('is');
            $('#users').html('user');
        }
        else if (connected > 1) { 
            console.log('users connected is ' + connected);
            $('#count').html(connected);
            $('#isare').html('are');
            $('#users').html('users');
        }
    });
    
    //handling pink user counting
    socket.on('pinkConnect', function(pinkCounter) {
        if (pinkCounter == 0) {
            console.log('pink users connected is ' + pinkCounter);
            $('#pinkcount').html(pinkCounter + ' users connected');
        }
        else if (pinkCounter == 1) {
            console.log('pink users connected is ' + pinkCounter);
            $('#pinkcount').html(pinkCounter + ' user connected');
        }
        else if (pinkCounter > 1) {
            console.log('pink users connected is ' + pinkCounter);
            $('#pinkcount').html(pinkCounter + ' users connected');
        }
    });
    
    socket.on('pinkDisconnect', function(pinkCounter) {
        if (pinkCounter == 0) {
            console.log('pink users connected is ' + pinkCounter);
            $('#pinkcount').html(pinkCounter + ' users connected');
        }
        else if (pinkCounter == 1) {
            console.log('pink users connected is ' + pinkCounter);
            $('#pinkcount').html(pinkCounter + ' user connected');
        }
        else if (pinkCounter > 1) {
            console.log('pink users connected is ' + pinkCounter);
            $('#pinkcount').html(pinkCounter + ' users connected');
        }
    });
    
    //handling for red user counting
    socket.on('redConnect', function(redCounter) {
        if (redCounter == 0) {
            console.log('red users connected is ' + redCounter);
            $('#redcount').html(redCounter + ' users connected');
        }
        else if (redCounter == 1) {
            console.log('red users connected is ' + redCounter);
            $('#redcount').html(redCounter + ' user connected');
        }
        else if (redCounter > 1) {
            console.log('red users connected is ' + redCounter);
            $('#redcount').html(redCounter + ' users connected');
        }
    });
    
    socket.on('redDisconnect', function(redCounter) {
        if (redCounter == 0) {
            console.log('red users connected is ' + redCounter);
            $('#redcount').html(redCounter + ' users connected');
        }
        else if (redCounter == 1) {
            console.log('red users connected is ' + redCounter);
            $('#redcount').html(redCounter + ' user connected');
        }
        else if (redCounter > 1) {
            console.log('red users connected is ' + redCounter);
            $('#redcount').html(redCounter + ' users connected');
        }
    });
    //handling for orange user counting
    socket.on('orangeConnect', function(orangeCounter) {
        if (orangeCounter == 0) {
            console.log('orange users connected is ' + orangeCounter);
            $('#orangecount').html(orangeCounter + ' users connected');
        }
        else if (orangeCounter == 1) {
            console.log('orange users connected is ' + orangeCounter);
            $('#orangecount').html(orangeCounter + ' user connected');
        }
        else if (orangeCounter > 1) {
            console.log('orange users connected is ' + orangeCounter);
            $('#orangecount').html(orangeCounter + ' users connected');
        }
    });
    
    socket.on('orangeDisconnect', function(orangeCounter) {
        if (orangeCounter == 0) {
            console.log('orange users connected is ' + orangeCounter);
            $('#orangecount').html(orangeCounter + ' users connected');
        }
        else if (orangeCounter == 1) {
            console.log('orange users connected is ' + orangeCounter);
            $('#orangecount').html(orangeCounter + ' user connected');
        }
        else if (orangeCounter > 1) {
            console.log('orange users connected is ' + orangeCounter);
            $('#orangecount').html(orangeCounter + ' users connected');
        }
    });
    //handling for yellow user counting
    socket.on('yellowConnect', function(yellowCounter) {
        if (yellowCounter == 0) {
            console.log('yellow users connected is ' + yellowCounter);
            $('#yellowcount').html(yellowCounter + ' users connected');
        }
        else if (yellowCounter == 1) {
            console.log('yellow users connected is ' + yellowCounter);
            $('#yellowcount').html(yellowCounter + ' user connected');
        }
        else if (yellowCounter > 1) {
            console.log('yellow users connected is ' + yellowCounter);
            $('#yellowcount').html(yellowCounter + ' users connected');
        }
    });
    
    socket.on('yellowDisconnect', function(yellowCounter) {
        if (yellowCounter == 0) {
            console.log('yellow users connected is ' + yellowCounter);
            $('#yellowcount').html(yellowCounter + ' users connected');
        }
        else if (yellowCounter == 1) {
            console.log('yellow users connected is ' + yellowCounter);
            $('#yellowcount').html(yellowCounter + ' user connected');
        }
        else if (yellowCounter > 1) {
            console.log('yellow users connected is ' + yellowCounter);
            $('#yellowcount').html(yellowCounter + ' users connected');
        }
    });
    //handling for green user counting
    socket.on('greenConnect', function(greenCounter) {
        if (greenCounter == 0) {
            console.log('green users connected is ' + greenCounter);
            $('#greencount').html(greenCounter + ' users connected');
        }
        else if (greenCounter == 1) {
            console.log('green users connected is ' + greenCounter);
            $('#greencount').html(greenCounter + ' user connected');
        }
        else if (greenCounter > 1) {
            console.log('green users connected is ' + greenCounter);
            $('#greencount').html(greenCounter + ' users connected');
        }
    });
    
    socket.on('greenDisconnect', function(greenCounter) {
        if (greenCounter == 0) {
            console.log('green users connected is ' + greenCounter);
            $('#greencount').html(greenCounter + ' users connected');
        }
        else if (greenCounter == 1) {
            console.log('green users connected is ' + greenCounter);
            $('#greencount').html(greenCounter + ' user connected');
        }
        else if (greenCounter > 1) {
            console.log('green users connected is ' + greenCounter);
            $('#greencount').html(greenCounter + ' users connected');
        }
    });
    //handling for blue counting
    socket.on('blueConnect', function(blueCounter) {
        if (blueCounter == 0) {
            console.log('blue users connected is ' + blueCounter);
            $('#bluecount').html(blueCounter + ' users connected');
        }
        else if (blueCounter == 1) {
            console.log('blue users connected is ' + blueCounter);
            $('#bluecount').html(blueCounter + ' user connected');
        }
        else if (blueCounter > 1) {
            console.log('blue users connected is ' + blueCounter);
            $('#bluecount').html(blueCounter + ' users connected');
        }
    });
    
    socket.on('blueDisconnect', function(blueCounter) {
        if (blueCounter == 0) {
            console.log('blue users connected is ' + blueCounter);
            $('#bluecount').html(blueCounter + ' users connected');
        }
        else if (blueCounter == 1) {
            console.log('blue users connected is ' + blueCounter);
            $('#bluecount').html(blueCounter + ' user connected');
        }
        else if (blueCounter > 1) {
            console.log('blue users connected is ' + blueCounter);
            $('#bluecount').html(blueCounter + ' users connected');
        }
    });
    
    /*
    
    sound synthesis
    
    */
    
    //setting up scale degrees
    
    cmajor = [0, 48, 50, 52, 53, 55, 57, 59, 60];
    
    //setting up a new oscillator at the user id on each ping

    sins = [];
    
    socket.on('sinOn', function(tag, user) {
        //first row
        if (tag == 'one-one') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[1]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('one-one tagged on');
        };
        if (tag == 'one-two') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[2]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('one-two tagged on');
        };
        if (tag == 'one-three') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[3]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('one-three tagged on');
        };
        if (tag == 'one-four') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[4]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('one-four tagged on');
        };
        if (tag == 'one-five') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[5]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('one-five tagged on');
        };
        //second row
        if (tag == 'two-one') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[2]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('two-one tagged on');
        };
        if (tag == 'two-two') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[3]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('two-two tagged on');
        };
        if (tag == 'two-three') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[4]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('two-three tagged on');
        };
        if (tag == 'two-four') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[5]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('two-four tagged on');
        };
        if (tag == 'two-five') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[6]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('two-five tagged on');
        };
        //third row
        if (tag == 'three-one') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[3]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('three-one tagged on');
        };
        if (tag == 'three-two') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[4]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('three-two tagged on');
        };
        if (tag == 'three-three') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[5]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('three-three tagged on');
        };
        if (tag == 'three-four') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[6]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('three-four tagged on');
        };
        if (tag == 'three-five') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[7]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('three-five tagged on');
        };
        //fourth row
        if (tag == 'four-one') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[4]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('four-one tagged on');
        };
        if (tag == 'four-two') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[5]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('four-two tagged on');
        };
        if (tag == 'four-three') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[6]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('four-three tagged on');
        };
        if (tag == 'four-four') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[7]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('four-four tagged on');
        };
        if (tag == 'four-five') {
            var id = user.id;
            sins[id] = new p5.SinOsc(midiToFreq(cmajor[8]));
            sins[id].start();
            sins[id].amp(.5, .5);
            console.log('four-five tagged on');
        };
    });
    socket.on('sinOff', function(tag, user) {
        //first row
        if (tag == 'one-one') {
            var id = user.id;
            sins[id].amp(0, .5);
            setTimeout(sins[id].stop(), 500);
            //sins[id].stop();
            console.log('one-one tagged off');
        }
        if (tag == 'one-two') {
            var id = user.id;
            sins[id].amp(0, .5);
            setTimeout(sins[id].stop(), 500);
            console.log('one-two tagged off');
        }
        if (tag == 'one-three') {
            var id = user.id;
            sins[id].amp(0, .5);
            setTimeout(sins[id].stop(), 500);
            console.log('one-three tagged off');
        }
        if (tag == 'one-four') {
            var id = user.id;
            sins[id].amp(0, .5);
            setTimeout(sins[id].stop(), 500);
            console.log('one-four tagged off');
        }
        if (tag == 'one-five') {
            var id = user.id;
            sins[id].amp(0, .5);
            setTimeout(sins[id].stop(), 500);
            console.log('one-five tagged off');
        }
        //second row
        if (tag == 'two-one') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('two-one tagged off');
        }
        if (tag == 'two-two') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('two-two tagged off');
        }
        if (tag == 'two-three') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('two-three tagged off');
        }
        if (tag == 'two-four') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('two-four tagged off');
        }
        if (tag == 'two-five') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('two-five tagged off');
        }
        //third row
        if (tag == 'three-one') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('three-one tagged off');
        }
        if (tag == 'three-two') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('three-two tagged off');
        }
        if (tag == 'three-three') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('three-three tagged off');
        }
        if (tag == 'three-four') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('three-four tagged off');
        }
        if (tag == 'three-five') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('three-five tagged off');
        }
        //fourth row
        if (tag == 'four-one') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('four-one tagged off');
        }
        if (tag == 'four-two') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('four-two tagged off');
        }
        if (tag == 'four-three') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('four-three tagged off');
        }
        if (tag == 'four-four') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('four-four tagged off');
        }
        if (tag == 'four-five') {
            var id = user.id;
            sins[id].amp(0, .5);
            sins[id].stop();
            console.log('four-five tagged off');
        }
    });
    
    socket.on('userClear', function(user) {
        var id = user.id;
        if (sins[id] != null) {
            sins[id].stop();
        }
    });
    
    recorder = new p5.SoundRecorder();
    file = new p5.SoundFile();
}

/*
recording?
*/

/*
var counter = 0;

function mouseClicked() {
    if (counter==0) {
        recorder.record(file);
        console.log('recording');
        counter = 1;
    }
    else {
        console.log('saving');
        recorder.stop();
        saveSound(file, 'gradation_output.wav');
        counter = 0;
    }
}
*/