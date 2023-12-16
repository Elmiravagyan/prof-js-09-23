function Timer(seconds) {
    this.seconds = seconds;
    this.intervalId = null;
    this.initial = seconds;

    Timer.prototype.timerIds = [];
    Timer.prototype.resetAllTimers = function () {
        Timer.prototype.timerIds.forEach(item => clearInterval(item));
    }

    this.start = function(argSeconds = this.seconds, callBack) {
        console.log('Log ::: this.seconds ===', argSeconds);
        this.seconds = argSeconds;
        this.intervalId = setInterval(() => {
            if(this.seconds === 0) {
                clearInterval(this.intervalId);
                console.log('Time is out');
            }
            this.seconds--;
            if(!Timer.prototype.timerIds.includes(this.intervalId)) {
                Timer.prototype.timerIds.push(this.intervalId);
            }
            if(callBack) {
                callBack(this.seconds);
            }
        }, 1000)
    };

    this.stop = function() {
        if(this.intervalId) {
            clearInterval(this.intervalId);
            console.log('Timer is stopped');
        }
    };

    this.reStart = function() {
        clearInterval(this.intervalId);
        this.start(this.initial);
    }

};

export { Timer };