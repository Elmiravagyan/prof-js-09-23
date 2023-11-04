//  Write a JavaScript function that reverses a number 

function reversNumber(number) {
    let revers = ""
    while (number) {
        let digit = number % 10
        number = (number - digit) / 10
        revers += digit
    }
    return revers
}
console.log(reversNumber(123000001694))

// TODO reversNumber Ճիշտ է

// Write a JavaScript function that generates all combinations of a string

function generatesStrings(str = "") {
    let charArr = str.split("")
    let result = ""
    let genArr = []
    while (charArr.length) {
        for (let i = 0; i < charArr.length; i++) {
            result += charArr[i]
            genArr.push(result)
        }
        charArr.shift()
        result = ""
    }
    return genArr
}
console.log(generatesStrings("dog"))

// TODO generatesStrings Սխալ է, սխալ ես հասկացել պահանջը բոլոր կոմբինացիաներ ասելով նկատի ունենք
//  string-ի անդամների  բոլոր հնարաոր դասաորությունները 'dog'-ի համար օրինակ ['dog', 'dgo', 'odg', 'ogd', 'gdo', 'god']


// Write a JavaScript function that checks if the given string includes the given substring.
// EX: str = “Hello” substr = “ell” => returned value is true
// EX: str = “Kill” substr = “lolo” => returned value is false

function isIncludeSubstring(string = "", substring = "") {

    let result = false
    label: for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length + 1; j++) {
            if (string.slice(i, j) === substring) {
                result = true
                break label
            }
        }
    }
    return result
}

console.log(isIncludeSubstring("Hello", "ell"))

// TODO isIncludeSubstring Ճիշտ է

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in the upper case.
// EX: ‘i love you’ => ‘I Love You’, (use str.split function)

function upperCaseFirstLetter(sentence = "") {
    let str = sentence.split("")
    let newSentence = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[0] || str[i - 1] === " ") {
            newSentence += str[i].toUpperCase()
        } else newSentence += str[i]
    }
    return newSentence
}

console.log(upperCaseFirstLetter("i love you"));

// TODO upperCaseFirstLetter Ճիշտ է

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function getLongestWord(sentence = "") {
    const unIncludesSign = [",", ".", ";", ":", "?", "!", " "]
    let longestWord = ""
    let currentWord = ""

    for (let i = 0; i < sentence.length; i++) {
        if (unIncludesSign.includes(sentence[i])) {
            longestWord = (currentWord.length > longestWord.length) ? currentWord : longestWord
            currentWord = ""
        } else if (sentence[i] === sentence[sentence.length - 1]) {
            currentWord += sentence[i]
            longestWord = (currentWord.length > longestWord.length) ? currentWord : longestWord
        } else currentWord += sentence[i]
    }
    return longestWord
}

console.log(getLongestWord("A; revolution.  .a revolution. not worth having"))

// TODO getLongestWord Ճիշտ է, բայց չհասկացա ինչի էս բարդացրել նկատի ունեմ էս սա [",", ".", ";", ":", "?", "!", " "]
//  մեզ հետաքրքիր են մենակ բացատները, ներքևում տես լուծման կարճ օրինակ
//  զանգվածի մեթոդները հետաքրքիր են ու շատ են օգնում խնդիրներ լուծելուց,
//  ես ներքևում sort մեթոդն եմ օգտագործել որը սորտաորումա զանգվածը ըստ մեր տված callback ֆունկցիայի
//  մեր տված callback -ը սորտաորումա երկարության նվազման կարգով ու
//  քանի որ գիտենք որ մեր ամենաերկար ելեմենտը սկզբումա լինելու միանգամից վերադարձնում ենք
//  սորտաորված զանգվածի [0] ինդեքսով էլեմենտը:

function getLongestWord(sentence) { // TODO EXAMPLE
    return sentence.split(' ').sort((word1, word2) => word1.length > word2.length ? -1 : 1)[0]
}

// Write a JS function, which returns the sum of two numbers

function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(1, 2))

// TODO sum Ճիշտ է,

// Extra Exercise 1

// 	Write a JS function, which will work as a calculator.
// 	It will accept 3 arguments, first number, second number and the sign
// 	EX:
// 	calc(1, 2, ‘+’) =>3 
// 	calc(1, 2, ‘-’) =>-1
// 	calc(1, 2, ‘*’) =>2
// 	calc(1, 2, ‘/’) =>½

function calc(first = 0, second = 0, sign) {
    let result = 0 // todo result փոփոխաան պահելու կարիք չկա

    switch (sign) {
        case "+":
            return result = first + second // return first + second
        case "-":
            return result = first - second // return first - second
        case "*":
            return result = first * second // return first * second
        case "/":
            return result = first / second // return first / second
    }

}
console.log(calc(1, 8, "/"))

// TODO calc Ճիշտ է,

// Extra Exercise 2

// Write a JavaScript function that accepts a string as a parameter and finds the longest word with the different letters.
// EX: asbdasbabasafdyia -> safdyi

function longestWordDiffLetters(str = "") {

    let longestWord = ""
    let currentWord = []

    for (let i = 0; i < str.length; i++) {
        if (currentWord.includes(str[i])) {
            longestWord = (currentWord.join("").length > longestWord.length) ? currentWord.join("") : longestWord
            currentWord.length = 0
            currentWord.push(str[i])
        } else if (str[i] === str[str.length - 1]) {
            currentWord.push(str[i])
            longestWord = (currentWord.join("").length > longestWord.length) ? currentWord.join("") : longestWord
        } else currentWord.push(str[i])
    }

    return longestWord
}

console.log(longestWordDiffLetters("asbdasbabasafdyia"))

// TODO longestWordDiffLetters Ճիշտ է,