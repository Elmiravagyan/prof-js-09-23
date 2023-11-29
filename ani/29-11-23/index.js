let container = document.getElementById('container');
let input = document.getElementById('input');
let createBtn = document.getElementById('createBtn');
let btnsDiv = document.getElementById('btnsDiv');

createBtn.addEventListener('click', () => {
     let startBtn = document.createElement('button');
     startBtn.innerText = 'Start';
     startBtn.classList.add('startBtn')

     let stopBtn = document.createElement('button');
     stopBtn.innerText = 'Stop';
     stopBtn.classList.add('stopBtn')

     let resetBtn = document.createElement('button');
     resetBtn.innerText = 'Reset';
     resetBtn.classList.add('resetBtn')

     btnsDiv.append(startBtn, stopBtn, resetBtn)
     btnsDiv.removeChild(createBtn)
});


function Timer(seconds) {
    this.time = seconds * 1000;
    this.seconds = seconds;
    this.timerId = null;
  
    this.start = function () {
      if (this.timerId === null) {
        this.timerId = setInterval(() => {
          console.log(this.seconds--);
          if (this.seconds < 0) {
            clearInterval(this.timerId);
              console.log('Your time is up!')
          }
        }, 1000);
      }
    };

    this.stop = function () {
        clearInterval(this.timerId);
         this.timerId = null;
         console.log('Timer stopped.'); 
    };
  
    this.reset = function () {
        clearInterval(this.timerId);
        this.timerId = null;
        this.seconds = seconds;
        this.start();
        console.log('Timer reset.');
      };
  }




