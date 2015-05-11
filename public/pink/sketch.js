var canvas; var sins; var cmajor; var socket;

function setup() {
    cmajor = [0, 48, 50, 52, 53, 55, 57, 59, 60];
    //socket = io.connect('http://localhost:5000/');
    socket = io.connect('https://gradation.herokuapp.com');
    socket.emit('pinkConnect');
    $(this).unload(function() {
        socket.emit('pinkDisconnect');
    });
    //tweets for connetion testing
    socket.on('tweet', function(tweet) {
        console.log('tweet from', tweet.ID);
        console.log('contents:', tweet.text);
    });
    
    //populate 2d array of oscillators
    
    var sins = [];
    
    for (var i = 0; i < 6; i++) {
        var ar = [];
        for (var j = 0; j < 6; j++) {
            ar.push(new p5.SinOsc());
        };
        sins.push(ar);
    };
    //set their frequencies manually
    
    sins[1][1].freq(midiToFreq(cmajor[1]));
    sins[1][2].freq(midiToFreq(cmajor[2]));
    sins[1][3].freq(midiToFreq(cmajor[3]));
    sins[1][4].freq(midiToFreq(cmajor[4]));
    sins[1][5].freq(midiToFreq(cmajor[5]));
                    
    sins[2][1].freq(midiToFreq(cmajor[2]));
    sins[2][2].freq(midiToFreq(cmajor[3]));
    sins[2][3].freq(midiToFreq(cmajor[4]));
    sins[2][4].freq(midiToFreq(cmajor[5]));
    sins[2][5].freq(midiToFreq(cmajor[6]));
    
    sins[3][1].freq(midiToFreq(cmajor[3]));
    sins[3][2].freq(midiToFreq(cmajor[4]));
    sins[3][3].freq(midiToFreq(cmajor[5]));
    sins[3][4].freq(midiToFreq(cmajor[6]));
    sins[3][5].freq(midiToFreq(cmajor[7]));
                    
    sins[4][1].freq(midiToFreq(cmajor[4]));
    sins[4][2].freq(midiToFreq(cmajor[5]));
    sins[4][3].freq(midiToFreq(cmajor[6]));
    sins[4][4].freq(midiToFreq(cmajor[7]));
    sins[4][5].freq(midiToFreq(cmajor[8]));
    //console.log(sins[5][5]);
    
    //mouse enter and exit for box grid
    
    $('.box').mouseenter(function() {
        var tag = $(this).attr('id');
        console.log(tag + ' entered');
        socket.emit('sinOn', tag);
        
        var split = tag.split("-");
        for (var i = 0; i < split.length ; i++) {
            split[i] = wordToNumber(split[i]);
        }
        console.log(split);
        console.log(split[0]);
        console.log(split[1]);
        sins[split[0]][split[1]].amp(.2, .1);
        setTimeout(function() {
            sins[split[0]][split[1]].start();
        }, 50);
    });
    $('.box').mouseleave(function() {
        var tag = $(this).attr('id');
        console.log(tag + ' exited');
        socket.emit('sinOff', tag);
        
        var split = tag.split("-");
        for (var i = 0; i < split.length ; i++) {
            split[i] = wordToNumber(split[i]);
        }
        console.log(split);
        console.log(split[0]);
        console.log(split[1]);
        sins[split[0]][split[1]].amp(0, .1);
        setTimeout(function() {
            sins[split[0]][split[1]].stop();
        }, 100);
        //setInterval(sins[split[0]][split[1]].stop(), 1000);
        //sins[split[0]][split[1]].stop();
        //sins[split[0]][split[1]].amp(0, .1);
    });
}

function draw() {
}

function wordToNumber(word) {
    switch(word) {
        case 'one':
            return 1;
            break;
        case 'two':
            return 2;
            break;
        case 'three':
            return 3;
            break;
        case 'four':
            return 4;
            break;
        case 'five':
            return 5;
            break;
    }
}