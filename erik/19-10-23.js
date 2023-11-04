//ARRAYS, CONDITIONS
// 1. Write a program to calculate the area of geometrical figures like circles, triangles, trapezoids, squares, and rectangles.
// The program should ask the user to enter the code for which the user wants to find the area.

// → ‘t’ for triangle

// → ‘z’ for trapezoid

// → ‘c’ for circle

// → ‘s’ for square

// → ‘r’ for rectangle

let user = prompt('Enter your code')

if(user == 't') {
    let height = prompt('Enter your height')
    let width = prompt('Enter your width')
    result = width/2 * height;
    alert('Your triangle  result is' + ' ' + result)
}else if(user == 'z') {
    let widthUp = +prompt('Enter your widthUp')
    let widthDown = +prompt('Enter your widthDown')
    let height = +prompt('Enter your height')
    result = (widthUp + widthDown)/2 * height;
    alert('Your trapezoid result is' + ' ' + result)
}else if(user == 'c') {
    let radius = prompt('Enter your radius')
    result = Math.PI * Math.pow(radius, 2)
    alert('Your circle result is' + ' ' + Math.floor(result))
}else if(user == 's') {
    let width = prompt('Enter your width')
    result = Math.pow(width, 2) ;
    alert('Your square result is' + ' ' + result)
}else if(user =='r') {
    let height = prompt('Enter your height')
    let width = prompt('Enter your width')
    result = height * width;
    alert('Your rectangle  result is' + ' ' + result)
} else {
    alert('Something goes wrong')
}

/*
 TODO ճիշտ է երբ տարբերակները 2-ից շատ էն ավելի հարմար է օգտագործել -> switch case, և լավ կլինի գրել ֆունկցիա բազմակի օգտագործման համար:
*/



// 2. Write a program that will ask a user for input, if the input is “7” alert
// “YOU WON 1000$” If not ask the user the same question again.
// This process should happen until the user finally enters “7”.


function submit() {
    let user = prompt('Enter your number');
    if(user == '7') {
        alert('YOU WON 1000$')
    } else {
        alert('DO IT AGAIN')
        submit()
    }
}
submit()

// TODO ճիշտ է, կարելի է լուծել նաև while -ով:


// 3. We have a users list, write a program that

let users = [
    {
        "_id": "6527b06f476f60fc89813fbb",
        "balance": "$2,928.37",
        "age": 19,
        "name": "Terrell Davis"
    },
    {
        "_id": "6527b06fffb90379f320b2e5",
        "balance": "$3,712.21",
        "age": 51,
        "name": "Lowe Hurst"
    },
    {
        "_id": "6527b06f5235d7b3b1768986",
        "balance": "$1,192.55",
        "age": 56,
        "name": "Thelma Livingston"
    },
    {
        "_id": "6527b06f24200f8f348dc022",
        "balance": "$3,207.32",
        "age": 43,
        "name": "Patsy Richardson"
    },
    {
        "_id": "6527b06fffc404f036c61d04",
        "balance": "$1,827.01",
        "age": 66,
        "name": "Phyllis Morin"
    },
    {
        "_id": "6527b06fbbd29ddfa45c9d52",
        "balance": "$2,658.85",
        "age": 68,
        "name": "Sweeney Travis"
    },
    {
        "_id": "6527b06f8b5786e80f944713",
        "balance": "$3,744.04",
        "age": 19,
        "name": "Velez Forbes"
    },
    {
        "_id": "6527b06fb41f548cda02945a",
        "balance": "$1,280.60",
        "age": 50,
        "name": "Diann Tillman"
    },
    {
        "_id": "6527b06f777dc88895e79f76",
        "balance": "$2,125.95",
        "age": 39,
        "name": "Morton Ayala"
    },
    {
        "_id": "6527b06f2df98c0c2738fd6d",
        "balance": "$1,499.62",
        "age": 29,
        "name": "Carrillo Rojas"
    },
    {
        "_id": "6527b06f396589e62e72b963",
        "balance": "$3,627.98",
        "age": 32,
        "name": "Annette Hill"
    },
    {
        "_id": "6527b06fdd6caf8bcb1aa281",
        "balance": "$3,817.86",
        "age": 52,
        "name": "Christa Vega"
    },
    {
        "_id": "6527b06fb7571674a29e3790",
        "balance": "$3,934.63",
        "age": 20,
        "name": "Lacy Schneider"
    },
    {
        "_id": "6527b06fca8e29329c7a3557",
        "balance": "$3,461.51",
        "age": 60,
        "name": "England Tran"
    },
    {
        "_id": "6527b06f52b831b38fc46155",
        "balance": "$1,811.19",
        "age": 53,
        "name": "Wright Ashley"
    }
]


// Will filter users whose balance is between 2000-3000


let usersBalance = users.filter(item => item.balance > "$2,000.00" && item.balance < "$3,000.00")
console.log(usersBalance)

// TODO Սխալ է:
/*
Քանի որ string տիպով է պահված բալանսը filter ֆւնցիայի կատարած համեմատությունը սխալ կաշխատի
իսկ ավելի ճիշտ ոչ թէ սխալ այլ ոչ էնպես ինչպես մենք ենք սպասում, խնդիրը նրանումա որ string-էրը այլ կերպ են համեմատվում
օրինակ էս համեմատությունը վերադարձնում ա true '$0,92.55' > '$2,000.00' && '$0,192.55' < "$3,000.00"
ամեն սիմվոլ ունի իր համապատասխան կոդը օրինակ a-97, Z-90 ու երբ երկու սիմվոլ համեմատում ենք իրար հետ, տակից համեմատվում են
իրենց ունեցած կոդերը  հետևաբար a > Z նույնն է թէ 97 > 90
Պետք էր $-ի նշանը ու ստորակետները հանել հետո դարձնել number նոր համեմատել թվերը
Ստեղ հղղում եմ դնում կարաս կարդաս թէ ոնց են համեմատվում string տիպի արժեքները -> https://learn.javascript.ru/string  նախավերջին գլուխնա
*/


// Create a new array with given users and add a random color property to each user

let colors = ['black', 'grey', 'green', 'blue', 'purple', 'pink']

users.forEach(user => {
    let generateColor = Math.floor(Math.random() * colors.length)
    user.color = colors[generateColor]
}) // TODO ճիշտ է

// console.log(users)



// Calculate the entire balance of all users


let res = 0
for(let i = 0; i <= users.length-1; i++){
    let balance = users[i].balance.slice(1).split(',').join('')
    let num = Number(Math.round(balance)) // TODO կլորացնելու կարիք չկա
    res += num
} //TODO ճիտ է
console.log(res)


// Add 1000$ to the balance of the user, whose name is Diann Tillman


let res = 0;

let name1 = users.find(user => user.name === 'Diann Tillman')
let balance = name1.balance.slice(1).split(',').join('')
let num = Number(Math.round(balance))
res = num + 1000;
name1.balance = res
console.log(name1) //TODO ճիշտ է


// Find a user whose name is Phyllis Morin

// let name = users.find(user => user.name === 'Phyllis Morin')
// console.log(name)


//FUNCTIONS
// Write a JavaScript function that reverses a number


function reverseNum(number) {
  number = number + '';
  return number.split("").reverse().join("");
}

console.log(reverseNum(658))

// TODO reverseNum ճիշտ է

// Write a JavaScript function that generates all combinations of a string



function generatesStr(string) {
  let arr = [];
      for(let i = 0; i <= string.length; i++) {
        for(let j = i + 1; j <= string.length; j++) {
          arr.push(string.slice(i, j))
        }
      }
      return arr;
}

console.log(generatesStr("Erik"))

// TODO generatesStr Սխալ է, սխալ ես հասկացել պահանջը բոլոր կոմբինացիաներ ասելով նկատի ունենք
//  string-ի անդամների  բոլոր հնարաոր դասաորությունները 'Erik'-ի համար օրինակ ['Erik', 'Erki', 'Eirk', 'Eikr', 'Ekri', 'Ekir', 'rEik', 'rEki', 'riEk', 'rikE', 'rkEi', 'rkiE', 'iErk', 'iEkr', 'irEk', 'irkE', 'ikEr', 'ikrE', 'kEri', 'kEir', 'krEi', 'kriE', 'kiEr', 'kirE']



// Write a JavaScript function that checks if the given string includes the given substring.
// EX: str = “Hello” substr = “ell” => returned value is true
// EX: str = “Kill” substr = “lolo” => returned value is false


function generatesStr(string, substr) {
  let arr = [];
      for(let i = 0; i <= string.length; i++) {
        for(let j = i + 1; j <= string.length; j++) {
          arr.push(string.slice(i, j))
        }
      }
      for(let i = 0; i <= arr.length; i++){
        if(arr[i] == substr){
          console.log(true)
          if(arr[i] !== substr){
            console.log(false)
          }
        }
      }
}

generatesStr('Erik','rik')

// TODO generatesStr Մասամբ ճիշտ է, ֆունկցիան պետքա վերադարձնի true կամ false որ հասկանանք
//  պարունակում ա string ը substr ին թէ ոչ console-ի փոխարեն վերադարձ արա ֆունկցիաից
//  Բայց երեք հատ ցիկլը շատ շատա երկուսն էլ ա շատ ներքևում տես կարճ լուծման երու օրինակ

function myIncludes(str, substr) { // TODO EXAMPLE
    return str.includes(substr)
}

function myIncludes(str, subString) { // TODO ամ եթե ցիկլով եսպես
    let matchPoint = '';
    let compareIndex = 0;
    for(let i = 0; i < str.length; ++i) {
        if(subString[compareIndex] === str[i]) {
            ++compareIndex
            matchPoint += str[i];
        } else if(matchPoint === subString) {
            return true;
        } else {
            matchPoint = '';
            compareIndex = 0;
        }
    }

    return matchPoint === subString;
}


// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in the upper case.
// EX: ‘i love you’ => ‘I Love You’, (use str.split function)



function upperCase(str) {
  let string = [] // TODO միանգամից string-ին վերագրի = str.split(' ')
  string.push(str.split(' ')) // TODO ավելորդա էս տողը
  let upper = []
    for (let i = 0; i < string[0].length; i++) {
      string = (string[0][i].charAt().toUpperCase()) // TODO string ինչի համար ենք վերագրում սա (string[0][i].charAt().toUpperCase())
    }
} // TODO ստեղ էլ ֆունկցիատ ոչինչ չի վերադարձնում

upperCase('i love you')

// TODO upperCase Սխալ է, ["i",  "love", "you"] էսպիսի զանգվածա վերադարձնում ֆունկցիան,
//  string բառը րեզերվ արած բառա իրան պետք չի օգտագործել որպես փոփոխականի անուն ներևում տես լուծման ճիշտ օրինակը

let upperCase = (str) => { // TODO EXAMPLE
    return str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
}



// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// 	Example string : 'Web Development Tutorial'
// Expected Output : 'Development'







// Write a JS function, which returns the sum of two numbers

function myFn(a, b) {
  c = a + b; // todo c-ն ճիշտ հայտարարի (let, const), բայց c-ի կարիքը չկա էլ
  console.log(c) // return a + b;
} // TODO ստեղ էլ ֆունկցիատ ոչինչ չի վերադարձնում

myFn(1, 2)


// Extra Exercise 1
// 	Write a JS function, which will work as a calculator.
// 	It will accept 3 arguments, first number, second number and the sign
// 	EX:
// 	calc(1, 2, ‘+’) =>3
// 	calc(1, 2, ‘-’) =>-1
// 	calc(1, 2, ‘*’) =>2
// 	calc(1, 2, ‘/’) =>½

function calculator(first, second, operator) {
  let res = 0 //todo  res -ը պետք չի ավելորդ փոփոխականա
  Number.first // todo ??? էս ինչա նշանակում Number.first
  Number.second //  todo ????

  switch (operator) {
      case "+":
          return res = first + second // todo return first + second
      case "-":
          return res = first - second // todo return first - second
      case "*":
          return res = first * second // todo return first * second
      case "/":
          return res = first / second // todo return first / second
  }

}
console.log(calculator(4, 5, "*"))

// TODO Ճիշտ է



// Extra Exercise 2

// Write a JavaScript function that accepts a string as a parameter and finds the longest word with the different letters.
// EX: asbdasbabasafdyia -> safdyi

