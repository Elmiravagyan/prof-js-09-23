// FUNCTIONS
// Write a JavaScript function that reverses a number


// Write a JavaScript function that generates all combinations of a string

// Write a JavaScript function that checks if the given string includes the given substring.
// EX: str = “Hello” substr = “ell” => returned value is true
// EX: str = “Kill” substr = “lolo” => returned value is false
function subStr(str, sub) {
    if (str.includes(sub)) {
        return (true);
    } else {
        return(false)
    }
}
subStr("Hello", "o") //true
subStr("Kill", "lolo") //false
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in the upper case.
// EX: ‘i love you’ => ‘I Love You’, (use str.split function)
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//    Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
// Write a JS function, which returns the sum of two numbers
function sum (a, b) {
    return a + b 
}

// Extra Exercise 1
//    Write a JS function, which will work as a calculator.
//    It will accept 3 arguments, first number, second number and the sign
//    EX:
//    calc(1, 2, ‘+’) =>3 
//    calc(1, 2, ‘-’) =>-1
//    calc(1, 2, ‘*’) =>2
//    calc(1, 2, ‘/’) =>½

function calculator(a, b, sign) {
    switch (sign) {
        case "+" : return a+b;
        case "-" : return a-b;
        case "/" : return a/b;
        case "*" : return a*b;
    }
}

// Extra Exercise 2

// Write a JavaScript function that accepts a string as a parameter and finds the longest word with the different letters.
// EX: asbdasbabasafdyia -> safdyi


