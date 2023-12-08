import { calc, noneClicked } from "./index.js"

let input = document.getElementById('input');
let result = document.getElementById('result');
let actions = document.getElementById('actions');

let reset = document.getElementById('reset');

let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');


let sign;

actions.addEventListener('click', (event) => {
    if(result.innerText) {

        if(event.target.tagName === 'BUTTON') {
            noneClicked();
            event.target.classList.add('clicked');
        };

        switch(event.target.id) {
            case 'add':
            sign = '+';
            console.log('sign in calc',sign)
            break;
            case 'subtract':
            sign = '-';
            break;
            case 'multiply':
            sign = '*';
            break;
            case 'divide':
            sign = '/';
            break;    
        }
    }
})

input.addEventListener('change', () => {
    if(result.innerText && sign) {
        result.innerText = calc(+result.innerText, sign, +input.value);
        input.value = '';
    } else {
        result.innerText = +input.value;
        input.value = '';
    }
})

reset.addEventListener('click', (event) => {
    noneClicked();
    result.innerText = '';
    input.value = '';
    sign = undefined;
})

// input.addEventListener('change', (event) => {
//     if(result.innerText) {
//         result.innerText = calc1(+result.innerText)(sign)(+input.value);
//         input.value = '';
//     } else {
//         result.innerText = +input.value;
//         input.value = '';
//     }
// })




