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

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in the upper case.
// EX: ‘i love you’ => ‘I Love You’, (use str.split function)

function upperCaseFirstLetter(sentence = "") {

    let words = sentence.split(" ")
    let newWord = words.map(word => word.replace(word[0], word[0].toUpperCase()))
    return newWord.join(" ")

    // let str = sentence.split("")
    // let newSentence = ""

    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === str[0] || str[i - 1] === " ") {
    //         newSentence += str[i].toUpperCase()
    //     } else newSentence += str[i]
    // }
    // return newSentence
}

console.log(upperCaseFirstLetter("i love you"))

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function getLongestWord(sentence = "") {

    // let words = sentence.split(" ")
    // let longestWord = words[0]
    // words.forEach(word => {
    //     if (word.length > longestWord.length) {
    //         longestWord = word
    //     }
    // })
    // return longestWord

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

// Write a JS function, which returns the sum of two numbers

function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(1, 2))

// Extra Exercise 1

// 	Write a JS function, which will work as a calculator.
// 	It will accept 3 arguments, first number, second number and the sign
// 	EX:
// 	calc(1, 2, ‘+’) =>3 
// 	calc(1, 2, ‘-’) =>-1
// 	calc(1, 2, ‘*’) =>2
// 	calc(1, 2, ‘/’) =>½

function calc(first = 0, second = 0, sign) {
    let result = 0

    switch (sign) {
        case "+":
            return result = first + second
        case "-":
            return result = first - second
        case "*":
            return result = first * second
        case "/":
            return result = first / second
    }

}
console.log(calc(1, 8, "/"))

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