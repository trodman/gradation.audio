var socket; var canvas; var sins;

function setup(){
    canvas = createCanvas(0, 0);
    //setting up scale degrees
    cmajor = [0, 48, 50, 52, 53, 55, 57, 59, 60];

    //socket = io.connect('http://localhost:3000/');
    socket = io.connect('http://gradation.herokuapp.com');
    /* tweets for connetion testing
    socket.on('tweet', function(tweet) {
        console.log('tweet from', tweet.ID);
        console.log('contents:', tweet.text);
    });
    */
    
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
        sins[id].stop();
    });
}
