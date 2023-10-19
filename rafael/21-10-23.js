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

