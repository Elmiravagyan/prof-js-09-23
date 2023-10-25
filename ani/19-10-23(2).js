// 1. Write a program to calculate the area of geometrical figures like circles, triangles, trapezoids, squares, and rectangles.he program should ask the user to enter the code for which the user wants to find the area.
function areas() {
    let userPrompt = prompt('write the code of the geometrical figures');
    switch(userPrompt){
         case('t'):
              let triangleSide = +prompt('please input the triangle side')
              let triangleHigh = +prompt('please input the triangle high')
              alert('the area of the triangle = ' + 1/2 * triangleSide * triangleHigh);
              break;
         case('z'):
            let trapezoidParallelSide1 = +prompt('please input the trapezoid parrallelSide1')
            let trapezoidParallelSide2 = +prompt('please input the trapezoid  parallelSide2')
            let trapezoidHigh = +prompt('please writ the trapezoid high')
            alert('the area of the trapezoid = ' + 1/2 * (+trapezoidParallelSide1 + +trapezoidParallelSide2) * trapezoidHigh)
            break;
         case('c'):
            let radiusOfCircle = +prompt('please input the radius of the circle')
            alert('the area of the circle = ' + 3,14 * radiusOfCircle**2)
            break;
         case('s'):
            let theSquareSide = +prompt('please write the square side')
            alert('the area of the square = ' + theSquareSide**2)
            break;
         case('r'):
            let lengthOfRectangle = +prompt('please write the length of the rectangle')
            let widthOfRectangle = +prompt('please write the width of the rectangle')
            alert('the area of the rectangle' + lengthOfRectangle * widthOfRectangle)
            break;
    }
}


// TODO Ճիշտ է

// 2. Write a program that will ask a user for input, if the input is “7” alert “YOU WON 1000$” If not ask the user the same question again. This process should happen until the user finally enters “7”. 
let userPrompt
while (userPrompt !== '7') {
     userPrompt = prompt('write your lucky number')
 }
alert('“YOU WON 1000$”')

// TODO Ճիշտ է, բայց alert-ը ճիշտ կլինի դնենք ցիկլի ներսում




// 3.We have a users list, write a program that

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
// 3.1  Will filter users whose balance is between 2000-3000

let filteredArray = [];
let filtered = users.filter((user) => {
   let withoutDollar = user.balance.replace('$', '')
   let result = withoutDollar.replace(',', '')
   if(result > 2000 && result < 3000){ // TODO -> return result > 2000 && result < 3000
       filteredArray.push(user)
   }
})

// TODO Ճիշտ է, filter մեթոդը հենց ֆիլտրած զանգված ստանալու համար, կարի չկա ավելորդ filteredArray փոփոխականի

// 3.2 Create a new array with given users and add a random color property to each user

let colors = ['green', 'blue', 'orange', 'purple', 'yellow', 'red', 'beown', 'pink', 'gray', 'white'];
newUsersArray = []
users.forEach((user) => {
   let newUser = { ...user}
  newUser.color = colors[Math.floor(Math.random() * 10)]
  newUsersArray.push(newUser)
})

// TODO Ճիշտ է

// 3.3 Calculate the entire balance of all users
let sum = 0;
  users.forEach(element => {
   let wiThoutDollar = element.balance.replace('$', '');
   let reSult = wiThoutDollar.replace(',', '');
   let final = reSult.replace('.', '');
     sum += +final
  });

// TODO Սխալ է, ամբողջի նշանը (.) պետք չի հանել գումարելիս:

  // 3.4 Add 1000$ to the balance of the user, whose name is Diann Tillman

      

     // 3.5 Find a user whose name is Phyllis Morin

let foundedUser = users.find((user) => user.name === 'Phyllis Morin')
  console.log(foundedUser)

// TODO Ճիշտ է
