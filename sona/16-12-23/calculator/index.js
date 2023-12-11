function calc(a, sign, b) {
    switch(sign) {
        case '+':
        return a+b;
        break;  
        case '-':
        return a-b;
        break; 
        case '*':
        return a*b;
        break; 
        case '/':
        return a/b;
        break; 
    }
}

function noneClicked() {
    add.classList.remove('clicked');
    subtract.classList.remove('clicked');
    multiply.classList.remove('clicked');
    divide.classList.remove('clicked');
    equals.classList.remove('clicked');
}


export { calc, noneClicked }