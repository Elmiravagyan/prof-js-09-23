import { Timer } from './index.js';

const addBtn = document.getElementById('add-timer');
const timersContainer = document.getElementById('timers');
const secondsInput = document.getElementById('input-sec');

const resetBtn = document.getElementById('reset');
const resetAll = document.getElementById('reset-all');

const timerIds = [];

function createMarkup(timerObj) {
    let timer = document.createElement('div');
    let startBtn = document.createElement('button');
    let stopBtn = document.createElement('button');
    let secondsDiv = document.createElement('div');

    function uiHandler(seconds) {
        secondsDiv.innerText = seconds;
    }
    startBtn.innerText = 'Start';
    startBtn.addEventListener('click', () => {
        timerObj.start(timerObj.seconds, uiHandler);
        timerIds.push(timerObj.intervalId);
    });
    stopBtn.innerText = 'Stop';
    stopBtn.addEventListener('click', () => timerObj.stop());
    secondsDiv.innerText = timerObj.seconds;
    timer.append(secondsDiv, startBtn, stopBtn);
    timer.classList.add('timer-item');
    timersContainer.append(timer);
}

function createTimer() {
    let timer = new Timer(+secondsInput.value);
    createMarkup(timer);
}


addBtn.addEventListener('click', createTimer)
resetBtn.addEventListener('click', () => {
    timerIds.forEach(item => clearInterval(item));
})


resetAll.addEventListener('click', () => {
    Timer.prototype.resetAllTimers();
})

