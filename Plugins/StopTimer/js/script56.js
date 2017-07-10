var time = 0;
var running  = 0;

function startPause () {
	if (ranning == 0) {
		ranning = 1;
		increment();
		document.getElementById("timer-box-buttons-start-pause").innerHTML = "PAUSE";
	} else{
		ranning = 0;
		document.getElementById("timer-box-buttons-start-pause").innerHTML = "RESUME";
	};
}

function reset() {
	ranning = 0;
	time = 0;
	document.getElementById("timer-box-buttons-start-pause").innerHTML = "START";
	document.getElementById("output").innerHTML = "00:00:00:00";
}

function increment() {

	if(ranning == 1) {
		setTimeout(function(){
			time++;
			var mins = Math.floor(time/10/60);
			var secs = Math.floor(time/10 % 60);
			var hours = Math.floor(time/10/60/60);
			var tenths = time % 10;

			if(mins < 10) {
				mins = "0" + mins;
			}
			if(secs < 10) {
				secs = "0" + secs;
			}
			if(hours < 10) {
				hours = "0" + hours;
			}
			document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + 0;
			increment();
		},100)
	}
}