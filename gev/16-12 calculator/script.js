const result = document.getElementById('result')
const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const negative = document.querySelector('.negative')

let number1 = ""
let number2 = ""
let resultValue = ""
let operator = ""

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (operator === "") {
            result.innerText = ""
            number1 += number.innerText
            result.innerText = number1
        }
        if (number1 && operator) {
            number2 += number.innerText
            result.innerText = number1 + operator + number2
        }
        console.log("number1", number1)
        console.log("number2", number2)
    })
})

operators.forEach(op => {
    op.addEventListener('click', () => {
        if(number1){
            operator = op.innerHTML
            result.innerHTML = number1 + operator
        }else{
            number1 = result.innerHTML
            operator = op.innerHTML
            result.innerHTML = number1 + operator
        }
        
    })
})

equals.addEventListener('click', () => {
    if (number1 && number2 && operator) {
        switch (operator) {
            case "+":
                result.innerHTML = +number1 + +number2
                break
            case "-":
                result.innerHTML = +number1 - +number2
                break
            case "/":
                result.innerHTML = +number1 / +number2
                break
            case "*":
                result.innerHTML = +number1 * +number2
                break
        }
    }
    number1 = result.innerHTML
    number2 = ""
    console.log(number1)
})

negative.addEventListener('click', () => {
    if (number1 && operator === "") {
        number1 = -+number1
        result.innerHTML = -result.innerHTML
    }
    if(operator && number2){
        console.log(number1,operator)
        number2 = -+number2
        result.innerHTML = number1 + operator + `(${number2})`
    }
})


clear.addEventListener('click', () => {
    number1 = ""
    number2 = ""
    operator = ""
    result.innerHTML = "0"
})