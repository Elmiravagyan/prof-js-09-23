// reverse a number

let number = 54321

function reverse(number){
    let reversed = Number(number.toString().split('').reverse().join(''))
    return reversed
}

console.log(reverse(number))


// // Write a JavaScript function that generates all combinations of a string

//  function combinations(str){
//     let combinations = []
//     for(let i = 0; i < str.length; i++){
//         for(let j = i + 1; j < str.length; j++){
//             combinations.push(str[i] + str[j])
//         }
//     }
//     return combinations
// }

// console.log(combinations('abc'))

function getCombinations(string){
    let result = []
    function generateCombinations(first, second){
    if(first.length > 0) {
        result.push(first)
    }
   for(let i = 0; i < second.length;i++) {
    generateCombinations(first + second[i],second.slice(i + 1))
   }
}
generateCombinations ('',string)
return result
}

console.log(getCombinations('abc'))

// Write a JavaScript function that checks if the given string includes the given substring


function includes(string, substring){
    return string.includes(substring)
} 
let str1 = 'Hello'
let substr1 = 'ell'
console.log(includes(str1,substr1))



// to upperCase

function upperCase(string){
    let words = string.split(' ')
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

console.log(upperCase('i love javascript'))



// find longest word

function longestWord(string){
    let words = string.split(' ')
    let longest = words[0]
    words.forEach(word => {
        if(word.length > longest.length){
            longest = word
        }
    })
    return longest
}

console.log(longestWord('Web Development Tutoria'))


// return sum pf 2 numbers

function sum(num1, num2){
    return num1 + num2
}

console.log(sum(1,2))

// calculator

function calc(num1, num2, operator){
    switch(operator){
        case '+':
            return num1 + num2
        break;
        case '-':
            return num1 - num2
        break;
        case '*':
            return num1 * num2
        break;
        case '/':
            return num1 / num2
        break;
    }
}

console.log(calc(1,2,'+'))


