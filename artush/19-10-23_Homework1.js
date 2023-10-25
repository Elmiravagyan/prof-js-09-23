///////////////////////////////////////////////////////////////////////////////////////////////////////
//11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
///////////////////////////////////////////////////////////////////////////////////////////////////////

let figureName = prompt("Enter name of figure")

function AreaOfTriangle (base , heigth){
    return (base * heigth) / 2
}

function AreaOfCircle (radius){
    return 3.14 * (radius * radius)
}

function AreaOfSquare (side){
    return side * side 
}

function AreaOfRectangle (width , length){
    return width * length 
}

switch(figureName){
    case 'triangle':
        let base = prompt("Enter the base of the triangle")
        let heigth = prompt("Enter the heigth of the triangle")
        console.log(AreaOfTriangle(base , heigth))
        break
    case 'circle':
        let radius = prompt("Enter the radius of the circle")
        console.log(AreaOfCircle(radius))
        break
    case 'square' :
        let side = prompt("Enter the side of the square")
        console.log(AreaOfSquare(side))
        break
    case 'rectangle' :
        let width = prompt("Enter the width of the rectangle")
        let length = prompt("Enter the length of the rectangle")
        console.log(AreaOfRectangle(width , length))
        break
    default : "You entered incorrect name of figure , Try again !!!!"
}

// TODO Ճիշտ է


/////////////////////////////////////////////////////////////////////////////////////
//22222222222222222222222222222222222222222222222222222222222222222222222222222222222
/////////////////////////////////////////////////////////////////////////////////////


let isSeven = false

do {
    let input = +prompt("You have chance to win 1000$ , please enter random numbers")
    if(input === 7){
        isSeven = true 
    }
} while (isSeven === false)

console.log("YOU WON 1000$")

// TODO Ճիշտ է բայց console.log- ը ճիշտ կլինի դնենք if բլոկի ներսում

////////////////////////////////////////////////////////////////////////////////////////
//33333333333333333333333333333333333333333333333333333333333333333333333333333333333333
////////////////////////////////////////////////////////////////////////////////////////

let users = 
[
  {
    "_id": "6527b06f476f60fc89813fbb",
    "balance": "2,928.37$",
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

//3.1  write a program that will filter users whose balance is between 2000-3000

let excludedSymbols = ['$' , '₽' , '€' , ',']

users.forEach((user) => {
    let balanceWithNumbers = ''
    user["balance"].split('').forEach((char) => {
        if(!excludedSymbols.includes(char)){
            balanceWithNumbers += char 
        }
    })
    
    user.balance = +balanceWithNumbers
})

let filteredWithBalance = users.filter((user) => user.balance > 2000 && user.balance < 3000)

// TODO Ճիշտ է:

//3.2 Create a new array with given users and add a random color property to each user

function GetRandomColor(){
    let ArrOfColors = ['Black' , 'Grey' , 'Red' , 'Blue' , 'Orange' , 'White' , 'Brown' , 'Pink' , 'Yellow' , 'Green']
    let index = Math.floor(Math.random() * 9)
    return ArrOfColors[index]
}

let AddPropertyColor = users.map((user) => {
    user["color"] = GetRandomColor()
    return user
})

// TODO Ճիշտ է:

//3.3 Calculate the entire balance of all users

let totalBalanceOfAllUsers = 0 

users.forEach((user) => totalBalanceOfAllUsers += user.balance)

// TODO Ճիշտ է:

//3.4 Add 1000$ to the balance of the user, whose name is Diann Tillman

let searchName = 'Diann Tillman' 
let foundUser = users.find((user) => user.name === searchName)

foundUser.balance += 1000

// TODO Ճիշտ է:

//3.5 Find a user whose name is Phyllis Morin   

searchName = 'Phyllis Morin'
foundUser = users.find((user) => user.name === 'Phyllis Morin')

console.log(foundUser)

// TODO Ճիշտ է: