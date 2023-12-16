let button = document.getElementById("button");
let input = document.getElementById("input");
let container = document.getElementById("container")


function Timer(initialSeconds) {
this.timer = initialSeconds;
 this.intervalId = null;

 this.start = function () {
  
 this.intervalId = setInterval(() => {
   console.log(this.timer);


   if (this.timer === 0) {
       clearInterval(this.intervalId);
      console.log("Timer reached 0!");  
      }

    this.timer--;
    }, 1000);
  };

  this.restart = function (seconds) {
  clearInterval(this.intervalId);
  this.timer = seconds;
  this.start();
 };
  };

button.addEventListener("click", () => {
  const timers = document.createElement('div');
  timers.innerText = input.value;
  
  const startButton = document.createElement("button");
  startButton.innerText = "Start";
  const timer = new Timer(input.value); 
  startButton.addEventListener("click", () => {
    timer.start();
    timer.innerText = startButton.value
  });
  
const restartButton = document.createElement("button");
restartButton.innerText = "Restart"
restartButton.addEventListener("click", () => {
  timer.restart(input.value);
});

timers.append(startButton);
timers.append(restartButton);
container.append(timers);
});












 