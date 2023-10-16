
/*Write a program to calculate the area of geometrical figures like circles, triangles, trapezoids, squares, and rectangles.
The program should ask the user to enter the code for which the user wants to find the area. 

→ ‘t’ for triangle 

→ ‘z’ for trapezoid  

→ ‘c’ for circle 

→ ‘s’ for square 

→ ‘r’ for rectangle 
*/

function calc(a=1, b=1, c=1) {
  return function(figure) {
      switch(figure) {
         case 't': return 0.5*a*b;
          case 'z': return 0.5(a+b)*c;
          case 'c': return 3.14 *(a*a);
          case 's': return a*a;
          case 'r': return a*b;

      }
  }
};
/*
2. Write a program that will ask a user for input, if the input is “7” alert
“YOU WON 1000$” If not ask the user the same question again.
This process should happen until the user finally enters “7”. */

while (true) {
  let input = prompt("Write a number")
  if (input ==7) {alert("YOU WON 1000$")
  break;
    } else {
  alert("Try again")
}
};



/* 
3. We have a users list, write a program that
Will filter users whose balance is between 2000-3000
Create a new array with given users and add a random color property to each user
Calculate the entire balance of all users
Add 1000$ to the balance of the user, whose name is Diann Tillman
Find a user whose name is Phyllis Morin
 
*/


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




// 3.1
let filtered = users.filter(item => {
  let arrOfNum = item['balance'].split('');
    //console.log(arr)
  let number= arrOfNum.filter(char => {
    return !isNaN(char)
      
  })
  number = number.join('');
    //console.log(number)
 return  number>2000 && number<3000
})

//3.2
function randomcolor () {
    const colors = ["blue", "green", "yellow", "pink", "red", "black"]
    let index = Math.floor(Math.random()*6);
    return colors[index];
}
users.forEach(item => {
    item.color = randomcolor()
})

//3.3
let sum = 0
users.forEach(item => {
  let arrOfNum = item['balance'].split('');
  let number = arrOfNum.filter(char => {
      return !isNaN(char)
  })
  number = number.join("")
    sum += +number
   
})

//3.4

   let user1 = users.find(item=> {
    if (item['name'] == "Diann Tillman") {
      users.forEach(item => {
        let arrOfNum = item['balance'].split('');
        let number = arrOfNum.filter(char => {
            return !isNaN(char)
        })
        number = number.join("")
      })
        item.balance += 1000
    }
    })


//3.5
let user = users.find (item => item["name"] = "Phyllis Morin")
