// 1. Write a JavaScript function that reverses a number 
function reverseNumber(number) {
    let numTOstr = number.toString()
     let splitedStr = numTOstr.split("");
      let reverserdStr = splitedStr.reverse()
     let reversedNumber = reverserdStr.join("")
     reversedNumber = parseInt(reversedNumber)
       return reversedNumber;
 }

 // 2. Write a JavaScript function that generates all combinations of a string





 // 3. Write a JavaScript function that checks if the given string includes the given substring.
 function checkStr(str, substr) {
    if (str.includes(substr)) {
        return;
    }else return false;
 
}


// 4. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in the upper case.
function uppercaseStr(string) {
    let arr =[];
    let splitedStr = string.split(' ')
    for (let i = 0; i < splitedStr.length; i++) {
        arr.push(splitedStr[i].charAt(0).toUpperCase() + splitedStr[i].slice(1))
        console.log(splitedStr[i].slice(1))
    }
    return arr;
}

// 5.1 Write a JS function, which will work as a calculator.It will accept 3 arguments, first number, second number and the sign
function calc(a, sign, b) {
    switch(sign){
        case ('+'):
            return a + b
        case ('-'):
            return a - b
        case ('*'):
            return a * b
        case ('/'):
            return a / b
    }
}
