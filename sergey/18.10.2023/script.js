/* Task 1

let user = prompt(`Entre the name of geometric figure`)

function getArea(user){
  let area = 0; base = 0; base1 = 0; height = 0; radius = 0;
  const p = 3.14159265359;
  
  switch(user){
    case 'circles':
      radius = +prompt('Write a Radius')
      return area =  p * radius * radius
    case 'triangles':
      base = +prompt('Write a Base')
      height = +prompt('Write a Height of that Base')
      return area = (base * height) / 2
    case 'trapezoids':
      base = +prompt('Write a first Base')
      base1 = +prompt('Write a second Base')
      height = +prompt('Write a Height')
      return area = (base + base1) / 2 * height
    case 'squares':
      base = +prompt('Write a Base')
      return area = base * base
    case 'rectangles':
      base = +prompt('Write a first Base')
      base1 = +prompt('Write a second Base')
      if(base === base1){
        return 'it is not a rectangle'
      }else
      return area = base * base1
    default:
      return 'You chose the wrong geometric figure'
  }
}
  console.log((getArea(user)))

  */


  /* task 2

  let userInput = prompt('input')
function trueInput(userInput){
  let result = "YOU WON 10000$"
  while(userInput != 7){
    userInput = prompt('input')
  }
    return result
  }
console.log(trueInput(userInput))

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


function  balanceBetwen2to3k(arr){
    let array = [];
    for(let i = 0; i < arr.length; i++ ) {
        if(arr[i].balance <= "$3,000.00" && arr[i].balance >= "$2,000.00" ) {
            array.push(arr[i]);
        }
    }
    return array;
}
console.log(balanceBetwen2to3k(users));



function addColor(arr){
    let array = [];
    for(let i = 0; i < arr.length; i++){
        arr[i].color = "#" + Math.floor(Math.random() * 1677724);
        array.push(arr[i]);
    }
    return array
}

console.log(addColor(users));


function sumOfBalance(arr) {
    let temp = 0; 
    for (let i = 0; i < arr.length; i++) {
        let myArray = arr[i].balance.split(""); 
        for(let j = 0; j < myArray.length; j++){
            if (myArray[j] == "$" || myArray[j] == ",") {
                myArray[j] = "";
            }
        }
        let a = myArray.join("");
        let d = +a;
        temp += d;
    }
    return temp;
}

console.log(sumOfBalance(users));




function addBalance(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[i].name === 'Diann Tillman')
      arr[i].balance = '$1000'  }
    
    return arr
  }
console.log(addBalance(users))


  

function getUser(arr){
    let user
    for(let i = 0; i < arr.length; i++)
      if(arr[i].name === 'Phyllis Morin')
        user = arr[i];
    return user
  }
  console.log(getUser(users))


