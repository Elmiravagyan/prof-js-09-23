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
function convertString(string) {
    let splited = string.split(' ');
    console.log(splited) //['I', 'love', 'you']
    let upper = splited.map(item => item[0].toUpperCase() + item.substr(1))
    console.log(upper) //['I', 'Love', 'You']
    let result = upper.join(" ")
    return result
}
convertString("I love you")

'I Love You'

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//    Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
function longestWord(string) {
    let splited = string.split(' ')
    //console.log(splited)
    let wordLength = 1
    let word;
    splited.forEach(item => {
       if (item.length > wordLength) {
           wordLength = item.length;
           word = item;
       }
    })
    return word
}
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

//version 1
function longest(string) {
    let splited = string.split('');
    console.log(splited); //['a', 's', 'b', 'd', 'a', 's', 'b', 'a', 'b', 'a', 's', 'a', 'f', 'd', 'y', 'i', 'a']
    let filtered =  splited.filter((item, index) => splited.indexOf(item) === index);
    console.log(filtered); // ['a', 's', 'b', 'd', 'f', 'y', 'i']
    return filtered.join('');
}

longest("asbdasbabasafdyia") 
'asbdfyi'

//version 2

function longest(string) {
    let splited = string.split('');
    //console.log(splited)
    let newArray= [];
    splited.forEach((item) => {
        if (!newArray.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray.join('')
}
longest("asbdasbabasafdyia") 
'asbdfyi'

