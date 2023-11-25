let timer = +prompt('timer seconds')
let intervalID = setInterval(() => console.log(timer--) , 1000)
setTimeout(() => {
    console.log('your time is out')
    clearInterval(intervalID)
} , timer * 1000)

