//1.1 ((((NaN - 1/'s' || typeof undefined + '1'))))  returns 'undefined1' because at fist 1 - 's' = NaN , NaN - anything = NaN logical or 
//returns first truthy or the last value

//1.2 ((((1/3 && !2%'2' || typeof function() {}))))  returns 'function' because at first && returns first falsy or last and it returns 
//!2%'2' which equal to 0 , 0 is falsy value and || returns first truthy or the last and finally returns typeof(function()) which equal 
//to 'function'

//1.3 ((((null - 1 || !![] && 2)))) returns -1 because at first && returns first falsy or the last and it returns 2 , then || returns 
//first truthy or the last and finalyy the expression returns null - 1 which equal to -1

//1.4 ((((!!{} && false - 1 && 2-undefined)))) first && returns false - 1 because !!{} is truthy and then second && returns 2 - undefined
//because false - 1 equal to -1 and -1 is truthy and finally 2 - undefined = NaN because undefined converts to NaN and 2 - NaN = NaN 

//2. Write a function that will clone an array of objects.

// function cloneData(users){
//   let newUsers = users.map((item) => Object.assign({} , item))
//   return newUsers
// }

// let users = [
//   {
//     name : "Artush" , 
//     surname : "Miqayelyan" , 
//     age : 16 
//   }, 
//   {
//     name : "Narek" , 
//     surname : "Nahapetyan" , 
//     age : 24
//   }
// ]

// let clonedData = cloneData(users)

// clonedData[0].mail = 'miqaelyan.artush@mail.ru'

//3. Write a function that will create constant objects.

// function CreateConstObj(){
//   let obj = {}
//   Object.freeze(obj)
//   return obj
// }

// let users = CreateConstObj()

// console.log("before" , users)

// users.name = "Artush"

// console.log("aftrer" , users)

//4. Write a function that generates users with name, surname, and age

// function getRandomNames(){
//   const names = ['Alice','Bob','Charlie','David','Eve','Frank','Grace','Hannah','Isaac','Jack']
//   let index = Math.floor(Math.random() * 9)
//   return names[index]
// }

// function getRandomSurnames(){
//   const surnames = ['Smith','Johnson','Williams','Brown','Davis','Miller','Wilson','Moore','Taylor','Anderson']
//   let index = Math.floor(Math.random() * 9)
//   return surnames[index]
// }

// function getRandomAge(){
//   const ages = [25, 30, 22, 40, 19, 33, 28, 50, 35, 27]
//   let index = Math.floor(Math.random() * 9)
//   return ages[index]
// }

// function GenerateUsers(){
//   let obj = {
//     name: getRandomNames() , 
//     surname: getRandomSurnames() , 
//     age: getRandomAge() 
//   }

//   return obj
// }

// const users = []

// for(let i = 0 ; i < 3 ; i++){
//   users.push(GenerateUsers())
// }

// console.log(users)

//5. Write a function that will filter the array from duplicates

// const numbersWithDuplicates = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]

// function filterArrayFromDuplicates(array = []){
//   array.forEach((item) => {
//     if(array.findIndex((elem) => elem === item) !== array.findLastIndex((elem) => elem === item)){
//       array.splice(array.findIndex((elem) => elem === item) , 1)
//     }
//   })

//   return array
// }

// filterArrayFromDuplicates(numbersWithDuplicates)

// console.log(numbersWithDuplicates)

//6. We have users array

let users = [
  {
    "_id": "652fc67d17db3bd1697a946b",
    "isActive": true,
    "balance": "$3,999.74",
    "age": 24,
    "eyeColor": "blue",
    "name": "Winnie Zimmerman",
    "gender": "female",
    "company": "XANIDE",
    "email": "winniezimmerman@xanide.com"
  },
  {
    "_id": "652fc67d92a11e2882913da3",
    "isActive": true,
    "balance": "$1,216.67",
    "age": 29,
    "eyeColor": "blue",
    "name": "Hughes Dunn",
    "gender": "male",
    "company": "BULLZONE",
    "email": "hughesdunn@bullzone.com"
  },
  {
    "_id": "652fc67d372e0588bc141961",
    "isActive": true,
    "balance": "$2,993.51",
    "age": 21,
    "eyeColor": "brown",
    "name": "Martina Holland",
    "gender": "female",
    "company": "ISODRIVE",
    "email": "martinaholland@isodrive.com"
  },
  {
    "_id": "652fc67d788f80fb72b609a9",
    "isActive": false,
    "balance": "$3,575.38",
    "age": 31,
    "eyeColor": "green",
    "name": "Salazar Guerrero",
    "gender": "male",
    "company": "GEEKUS",
    "email": "salazarguerrero@geekus.com"
  },
  {
    "_id": "652fc67d24afb960a46e3385",
    "isActive": false,
    "balance": "$3,516.55",
    "age": 20,
    "eyeColor": "blue",
    "name": "Arline Hernandez",
    "gender": "female",
    "company": "PHOTOBIN",
    "email": "arlinehernandez@photobin.com"
  },
  {
    "_id": "652fc67d32621ff45ae32c12",
    "isActive": false,
    "balance": "$3,608.98",
    "age": 32,
    "eyeColor": "brown",
    "name": "Willis Wagner",
    "gender": "male",
    "company": "UNEEQ",
    "email": "williswagner@uneeq.com"
  },
  {
    "_id": "652fc67deec809b760d02a77",
    "isActive": true,
    "balance": "$2,900.10",
    "age": 34,
    "eyeColor": "green",
    "name": "Lee Hurst",
    "gender": "female",
    "company": "KENEGY",
    "email": "leehurst@kenegy.com"
  }
]

//6.1 Create an array that includes only male users with blue eyes

// let filteredArr = users.filter((user) => user.gender === 'male' && user.eyeColor === 'blue')
// console.log(filteredArr)

//6.2 Return the last user which is female and the balance is greater than 2800.

// let excludedSymbols = ['$' , '₽' , '€' , ',']

// users.forEach((user) => {
//     let balanceWithNumbers = ''
//     user["balance"].split('').forEach((char) => {
//         if(!excludedSymbols.includes(char)){
//             balanceWithNumbers += char 
//         }
//     })
    
//     user.balance = +balanceWithNumbers
// })

// let index = users.findLastIndex((user) => user.gender === 'female' && user.balance > 2800)
// let foundUser = users[index]
// console.log(foundUser)

//6.3 Insert a new user from users array doc (name user5 in the doc) at the 5th index.

// let user5 = {
//   "_id": "652fc67d92a11e2882df913da3",
//   "isActive": true,
//   "balance": "$1,416.67",
//   "age": 30,
//   "eyeColor": "blue",
//   "name": "Hughes Finn",
//   "gender": "male",
//   "company": "BULLZONE",
//   "email": "hughesfinn@bullzone.com"
// }

// users.splice(5 , 0 , user5)
// console.log(users[5])

//6.4 Remove users from 3-5 indexes

// users.splice(3 , 3)
// console.log(users)

//6.5 Create function that finds a user by category like
//filterUsers(‘name’, ‘Sam Smith’’)
//filterUsers(age, ‘30’’)

// function findUser(Data , searchBy , value){
//   let index = Data.findIndex((user) => user[searchBy] === value)
//   return users[index]
// }

// let foundUser = findUser(users , 'age' , 31)
// console.log(foundUser)

//6.6 Add gmail filed to all the users which will consist form user name, surname + @gmail.com
//EX:  if user.name = “Ann Smith” than user Gmail should be ann.smith@gmail.com

// users.forEach((user) => {
//   user.gmail = user.name.toLowerCase().replace(' ' , '.').concat('@gmail.com')
// })

// console.log(users)

//6.7 Group users by eye color (*).
// EX: {
// 	blue: [{}, {},...]
// 	green: [{},{},...]
// 	…
// }


// const GroupByEyeColor = {}

// users.forEach((user) => {
//   GroupByEyeColor[user.eyeColor] = []
// })

// users.forEach((user) => {
//   GroupByEyeColor[user.eyeColor].push(user)
// })

// console.log(GroupByEyeColor)

//7 What will be logged

//7.1 

// {
//   let a = () => {
//   console.log(1);
// }

// a(); 

//////////// a is not defined 

//7.2 

// let a = 1

// function a() {
//   console.log(a)
// }

// a()

////////// A has already been declared 


//7.3 

// let b = function foo() {
//   console.log(1);
// }

// foo();

/////////foo is not defined 

//7.4 

// function a() {
//   let a = 1;
//   console.log(a);
// }

// a()

///////// 1 
