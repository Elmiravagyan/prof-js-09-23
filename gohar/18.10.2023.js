//homwork 1;
let chosenFigures = prompt("Please choose a geometrical figure");

function foo(userAnswer, a, b, h, r) {
  
  if (chosenFigures === "t") {
    return  1 / 2 * h * b;
  } else if (chosenFigures === "z") {
    return ((a + b) / 2) * h;
  } else if (chosenFigures === "c") {
    return 3.14 * Math.pow(r, 2);
  } else if (chosenFigures === "s") {
    return  a * b;
  } else if (chosenFigures === "r") {
    return a * b;
  }
}

console.log(foo(chosenFigures, 2, 4, 5, 3));


// homework 2;
 while(true){
  let userAnswer = prompt("Please enter the number");
   if(userAnswer === "7"){
     alert("You won 1000$");
      break;
   }
}

// homework 3;

let users = [{
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
];

let filtered = users.filter(user => {
  let balance = user.balance.slice(1).split(",").join("");
  let numBalance = Math.round(+balance);
  return numBalance >= 2000 && numBalance <= 3000;
});
console.log(filtered);

//added colors;
for (let i = 0; i < users.length; i++) {
  users[i].color = Math.floor((Math.random() * 255));
}
console.log(users)

let reducedUsersBalance = users.reduce((acc, currentUser) => {
  let balance = currentUser.balance.slice(1).split(",").join("");

   acc += Math.round(+balance);

  return acc;

}, 0)
console.log(reducedUsersBalance);

let addedBalance = users.find(user => {
  let balance;
  let newBalance;
   if(user.name === "Diann Tillman"){
     balance = user.balance.slice(1).split(",").join("");
     newBalance = Math.round(+balance) + 1000 ;
     newBalance = "$" + newBalance;
   }
    return user.balance = newBalance;
})
 console.log(addedBalance);

let findUser = users.find(val => val.name === "Phyllis Morin");
console.log(findUser);