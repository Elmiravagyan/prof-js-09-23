// let myname = 'Rafael';
// console.log(myname)

// task 2

function ask(){
    let input = prompt('enter a number')
  
  if (input === '7'){
    alert('YOU WON 1000$')
  } else {
    ask()
  }}
  
  ask()

  // task 3

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

// filtred users

let filteredUsers = users.filter(user => {
  let balance = user.balance.replace('$','').replace(',','')
  return balance >= '2000' && balance < '3000'
})

console.log(filteredUsers)

// add random colors

let colors = ['orange', 'blue', 'green', 'red',  'yellow', 'pink', 'black','white']

users.forEach(user => {
  randomColor = Math.floor(Math.random() *
colors.length)
user.color = colors[randomColor]
})

console.log(users)

// entire balance

let totalBalance = 0

users.forEach(function(user) {
  let cleanBalance = user.balance.replace('$','').replace(',','')
  totalBalance += cleanBalance / !NaN
})

console.log(totalBalance)

// add 1000$

let user = users.find(user => user.name === "Diann Tillman")

if (user) {
  let cleanBalance = user.balance.replace('$','').replace(',','')
  user.balance = +(cleanBalance) + 1000
}

console.log(users)

// find Phyllis Morin

let person = users.find(user => user.name === 'Phyllis Morin')

if (person) {
  console.log(person)
} else {
  console.log('user not found')
}


//task 1

let figures = prompt('enter s for square,c for circle,t for triangle,r for rectangle,z for trapezoid')

function calcArea(calc) {
  let area = 0
  switch (calc){
    case 's':
      let side = +prompt('side length of the square')
      area = side * side
    break;
    case 'c':
      let radius = +prompt('radius of the circle')
      area = 3.14 * (radius * radius)
      break;
      case 't':
        let base = +prompt('base of the triangle')
        let heigth = +prompt('heigth of the triangle')
        area = (base * heigth) / 2
        break;
        case 'r':
          let length = +prompt('length of the rectangle')
          let width = +prompt('width of the rectangle')
          area = length * width
          break;
          default: 
          return 'try again'
  }
  return area
}
console.log(calcArea(figures))