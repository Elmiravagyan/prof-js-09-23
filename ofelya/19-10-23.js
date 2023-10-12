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
    "balance": "2928.37",
    "age": 19,
    "name": "Terrell Davis"
  },
  {
    "_id": "6527b06fffb90379f320b2e5",
    "balance": "3712.21",
    "age": 51,
    "name": "Lowe Hurst"
  },
  {
    "_id": "6527b06f5235d7b3b1768986",
    "balance": "1192.55",
    "age": 56,
    "name": "Thelma Livingston"
  },
  {
    "_id": "6527b06f24200f8f348dc022",
    "balance": "3207.32",
    "age": 43,
    "name": "Patsy Richardson"
  },
  {
    "_id": "6527b06fffc404f036c61d04",
    "balance": "1827.01",
    "age": 66,
    "name": "Phyllis Morin"
  },
  {
    "_id": "6527b06fbbd29ddfa45c9d52",
    "balance": "2658.85",
    "age": 68,
    "name": "Sweeney Travis"
  },
  {
    "_id": "6527b06f8b5786e80f944713",
    "balance": "3744.04",
    "age": 19,
    "name": "Velez Forbes"
  },
  {
    "_id": "6527b06fb41f548cda02945a",
    "balance": "1280.60",
    "age": 50,
    "name": "Diann Tillman"
  },
  {
    "_id": "6527b06f777dc88895e79f76",
    "balance": "2125.95",
    "age": 39,
    "name": "Morton Ayala"
  },
  {
    "_id": "6527b06f2df98c0c2738fd6d",
    "balance": "1499.62",
    "age": 29,
    "name": "Carrillo Rojas"
  },
  {
    "_id": "6527b06f396589e62e72b963",
    "balance": "3627.98",
    "age": 32,
    "name": "Annette Hill"
  },
  {
    "_id": "6527b06fdd6caf8bcb1aa281",
    "balance": "3817.86",
    "age": 52,
    "name": "Christa Vega"
  },
  {
    "_id": "6527b06fb7571674a29e3790",
    "balance": "3934.63",
    "age": 20,
    "name": "Lacy Schneider"
  },
  {
    "_id": "6527b06fca8e29329c7a3557",
    "balance": "3461.51",
    "age": 60,
    "name": "England Tran"
  },
  {
    "_id": "6527b06f52b831b38fc46155",
    "balance": "1811.19",
    "age": 53,
    "name": "Wright Ashley"
  }
]

// 3.1
let filtered = [];
users.filter(item => {
    if (item.balance>2000 && item.balance<3000) {
        console.log(item)
        filtered.push(item)
    };
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
    sum += item.balance;
   
})

//3.4
users.forEach(item => {
    if (item.name == "Diann Tillman") {
        item.balance += 1000
    }
})

//3.5
let user = users.find (item => item.name = "Phyllis Morin")
