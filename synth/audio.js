audioCtx = new(window.AudioContext || window.webkitAudioContext)();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
frequency = 0;

var osc_start = false;

document.onkeydown = function(e) {
	
	e = e || window.event;
	
	var key = "";
	switch (e.keyCode) {
		case 49: key = "1"; break;
		case 50: key = "2"; break;
		case 51: key = "3"; break;
		case 52: key = "4"; break;
		case 53: key = "5"; break;
		case 54: key = "6"; break;
		case 55: key = "7"; break;
		case 56: key = "8"; break;
		case 57: key = "9"; break;
		case 48: key = "10"; break;
		case 45: key = "189"; break;
		default: key = "1";
	}
	
	update(note(key));
	
}

function beep() {

	var play = document.getElementById("play");
	
	if (play.name == 0) {
		play.name = 1;
		play.innerHTML = "Pause";
		if (!osc_start) { 
			oscillator.start();
			osc_start = true;
		}
		gainNode.gain.value = document.getElementById("vIn").value / 100;
	} else {
		play.name = 0;
		play.innerHTML = "Play";
		gainNode.gain.value = 0;
	}
	
};

function update() {
	
	switch (document.getElementById("tIn").value * 1) {
		case 0: type = 'sine'; break;
		case 1: type = 'square'; break;
		case 2: type = 'sawtooth'; break;
		case 3: type = 'triangle'; break;
	}
	document.getElementById("tOut").innerHTML = type;

	volume = document.getElementById("vIn").value / 100;
	document.getElementById("vOut").innerHTML = volume;
	
	gainNode.gain.value = volume;
	oscillator.frequency.value = frequency;
	oscillator.type = type;
	
}

function note(id) {
	
	switch (id) {
		case "1": frequency = 440; break;
		case "2": frequency = 392; break;
		case "3": frequency = 349; break;
		case "4": frequency = 330; break;
		case "5": frequency = 294; break;
		case "6": frequency = 262; break;
		case "7": frequency = 247; break;
		case "8": frequency = 233; break;
		case "9": frequency = 220; break;
		case "10": frequency = 196; break;
		case "11": frequency = 165; break;
		default:
			return 0;
	}
	
}