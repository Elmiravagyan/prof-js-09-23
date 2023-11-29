let timerDisplay = document.querySelector('.timer-display');
let [seconds, minutes, hours] = [0,0,0];
let timer = null;

function displayStop() {
    seconds++
    if(seconds == 60) {
        seconds = 0;
        minutes++
        if(minutes == 60) {
            minutes = 0;
            hours++
        }
    }
    timerDisplay.innerHTML = hours +":"+ minutes +":"+ seconds;
}

function displayStart() {
    if(timer == null) {
        clearInterval(timer)
    }
    timer = setInterval(displayStop, 1000)
}

function timerStop() {
    clearInterval(timer)
}

function timerRestart() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    timerDisplay.innerHTML = "00:00:00";
}


