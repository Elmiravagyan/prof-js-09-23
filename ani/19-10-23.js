// 1. Write a JavaScript function that reverses a number 
function reverseNumber(number) {
    let numTOstr = number.toString()
     let splitedStr = numTOstr.split("");
      let reverserdStr = splitedStr.reverse()
     let reversedNumber = reverserdStr.join("")
     reversedNumber = parseInt(reversedNumber)
       return reversedNumber;
 }

 // TODO Ճիշտ է

 // 2. Write a JavaScript function that generates all combinations of a string





 // 3. Write a JavaScript function that checks if the given string includes the given substring.
 function checkStr(str, substr) {
    if (str.includes(substr)) {
        return;
    }else return false;
 
}

// TODO Սխալ է, ընդհանուր ճիշտ ես գրել բայց ֆունկցիան երբեք true չի վերադարձնում
//  էտ մասը չհասկացա, if else գրելու կարիք էլ չկա որովհետև includes ֆունցիան
//  արդեն boolean արժեքա վերադարձնում կարող ենք միանգամից վերադարձնել հետևյալը return str.includes(substr)


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

// TODO Ճիշտ է, բայց վերջում զանգված ես վերադարձնում դաձրու ստրինգ

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

// TODO Ճիշտ է