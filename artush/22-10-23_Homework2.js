//1. Write a JavaScript function that reverses a number 

//version1 
function reverseNumber(number){
  let numToString = number.toString()
  return +(numToString.split('').reverse().join(''))
}


// let number = 72363

// let result = reverseNumber(number)

//version 2 

function reverseNumber(number){

  let result = ''

  while(number > 0){
    let lastDigit = number % 10

    result += lastDigit

    number = Math.floor(number / 10)
  }

  return result
}


// let number = 6398

// let reversedNumber = reverseNumber(number)

// TODO reversedNumber Ճիշտ է

//3. Write a JavaScript function that checks if the given string includes the given substring.

function includesSubsrting(string , substring){
  return string.includes(substring)
}

// let string = 'Hello'

// let substring = 'ell'

// console.log(includesSubsrting(string , substring))

// TODO includesSubsrting Ճիշտ է

//4. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in the upper case.

//version1

function EachFirstLetterToUpperCase(string){
  let words = string.split(' ')

  let newArr = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })

  return newArr.join(' ')
}

// let string = 'i love you'

// let result = EachFirstLetterToUpperCase(string)

// console.log(result)

//version2

function firstLetterToUpperCase(string){
  let chars = string.split('')
  for(let i = 0 ; i < chars.length ; i++){
    if(chars[i - 1] === ' '){
      chars[i] = chars[i].toUpperCase() // todo էս գործողությունը իրականում չի փոխում chars[i]-ը
    }
  }

  return chars.join('')
}

// let string = ' i love you'

// let result = firstLetterToUpperCase(string)

// console.log(result)

// TODO includesSubsrting առաջինը Ճիշտ է երկրորդը սխալ
// TODO string տիպով հայտարարված արժեքները immutable են այսինքն փոփոխության չեն ենթարկվում
//  ինչը նշանակում ա որ եթե ստեղծենք let str = 'abs' հետո փորձենք str[0] = 'A' str-ն չի փոփոխվի
//  իսկ պատճառը թէ ինչու փոփոխության չեն ենթարկվում string տիպով հայտարարված արժեքները նայա որ
//  string տիպի արժեքները պահվում են stack կոչող հիշողության տիրույթում ու քանի որ stack-ի չափը սահմանափակա
//  հենց էտ պատճառով էլ հնարաոր չի իրան փոխել, սա մի փոքր ընդարձակ թեմայա բայց ընդհանրացված կարող ենք ասել որ
//  հիշողության եֆեկտիվ կառավարման համար ետպես մտածված:

//5. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function findTheLongestWord(string){
  let longestWord = ''
  let words = string.split(' ')
  words.forEach((word) => {
    if(word.length > longestWord.length){
      longestWord = word
    }
  })

  return longestWord
}

// let string = 'Web Development Tutorial'

// let foundLongestWord = findTheLongestWord(string)

// console.log(foundLongestWord)

// TODO findTheLongestWord Ճիշտ է

//6 Write a JS function, which returns the sum of two numbers

function SumOfTwoNumbers (first , second){
  return first + second
}

console.log(SumOfTwoNumbers(8 , 9))

// TODO SumOfTwoNumbers Ճիշտ է

//Extra Exercise 1 Write a JS function, which will work as a calculator. It will accept 3 arguments, first number, second number and the sign

function calculator(first , second , sign){
  switch(sign){
    case '+': return first + second
    case '-': return first - second
    case '*': return first * second
    case '/': return first / second
  }
}

// console.log(calculator(8 , 9 , '*'))

// TODO calculator Ճիշտ է

// Extra Exercise 2 . Write a JavaScript function that accepts a string as a parameter and finds the longest word with the different letters.
// QUESTION 

function findLongestWordWithDifferentLetters(string){
    let currentWord = ''
    let longestWordWithDifferentLetters = ''
  
    let chars = string.split('')
    chars.forEach((char) => {
      if(currentWord.includes(char)){
        if(currentWord.length > longestWordWithDifferentLetters.length){
          longestWordWithDifferentLetters = currentWord
        }
        currentWord = ''
      }else{
        currentWord += char
      }
    })
  
    return longestWordWithDifferentLetters
  }
  
  let string = 'asbdasbabasafdyia'
  
  console.log(findLongestWordWithDifferentLetters(string))


// TODO calculator Սխալ է  asbd -ի փոխարեն պետքա ստանաինք fdyia
  