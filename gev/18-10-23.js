// 1. What will be the output and why
//    1.1
NaN - 1 / 's' || typeof undefined + '1' // NAN - NaN || "undefined" + "1"  => NaN || "undefined1" => "undefined1"
//    1.2
1 / 3 && !2 % '2' || typeof function () { } // 1/3 && false % "2" || "function" => 1/3 && 0 || "function" => "function"
//    1.3
null - 1 || !![] && 2 // -1 || true && 2 => -1 || 2  => -1
//    1.4
!!{} && false - 1 && 2 - undefined  // true && 0 - 1 &&  NaN  => -1 && NaN  => NaN

//2. Write a function that will clone an array of objects.

// let arr = [
//     { "one": 1 },
//     { "two": 2 },
//     { "tree": 3 },
//     { "four": 4 }
// ]
// function cloneArrOfObjects(arr) {
//     return arr.map(item => Object.assign({}, item))
// }
// let f = cloneArrOfObjects(arr)
// f[0].name = "gag"
// console.log(f)
// console.log(arr)

//3. Write a function that will create constant objects.

// function createConstObjects() {
//     return Object.freeze({})
// }
// let f = createConstObjects()
// f.name = "An"
// console.log(f)
// console.log(Object.isFrozen(f))

// 4. Write a function that generates users with name, surname, and age

// function generateUsers() {
//     return Object.create({}, { name: { value: 'Poghos' }, surname: { value: 'Poghosyan' }, age: { value: 23 } });
// }
// console.log(generateUsers())

// 5. Write a function that will filter the array from duplicates 

// let array = [1, 2, 3, 3, 4, 5, 1, 6, 2, 5, 7, 100]

// function removeDoplicates(array = []) {
//     return array.filter(el => array.indexOf(el) === array.lastIndexOf(el))
// }
// console.log(removeDoplicates(array))

// 6. We have users array

let user = [
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
// a.  Create an array that includes only male users with blue eyes

function getMaleUsersWithBlueEyes(user = []) {
    return user.filter(item => item.gender === "male" && item.eyeColor === "blue")
}
console.log(getMaleUsersWithBlueEyes(user))

// b.  Return the last user which is female and the balance is greater than 2800.

function toNumber(string) {
    return +string.split("").filter(el => +el < Infinity).slice(0, -2).join("")
}
function getLastFemaleUserWithOver2800Balance(user = []) {
    return user.findLast(item => toNumber(item.balance) > 2800)
}
console.log(getLastFemaleUserWithOver2800Balance(user))

// c.  Insert a new user from users array doc (name user5 in the doc) at the 5th index.

let user5 = {
    "_id": "652fc67d92a11e2882df913da3",
    "isActive": true,
    "balance": "$1,416.67",
    "age": 30,
    "eyeColor": "blue",
    "name": "Hughes Finn",
    "gender": "male",
    "company": "BULLZONE",
    "email": "hughesfinn@bullzone.com"
}

function addUser(user = [], user5) {
    return user.splice(5, 0, user5)
}
console.log(addUser(user, user5))
console.log("new User", user)

// d.  Remove users from 3-5 indexes

function removeUsers(user = []) {
    user.splice(3, 2)
    return user
}
console.log(removeUsers(user))

//e.   Create function that finds a user by category like
//     filterUsers(‘name’, ‘Sam Smith’’)
//     filterUsers(age, ‘30’’)

function filterUsers(user = [], key, value) {
    return user.find(item => item[key] === value)
}
console.log(filterUsers(user, "name", "Lee Hurst"))

// f.   Add gmail filed to all the users which will consist form user name, surname + @gmail.com
//      EX:  if user.name = “Ann Smith” than user Gmail should be ann.smith@gmail.com

function addGmails(user = []) {
    user.forEach(item => {
        item["gmail"] = item.name.toLowerCase().replace(" ", ".") + "@gmail.com"
    })
    return user
}
console.log(addGmails(user))

// g.   Group users by eye color (*).
//      EX: {
// 	    blue: [{}, {},...]
// 	    green: [{},{},...]
//   	…
//      }

function grupUsers(user = []) {
    let groupUser = {}
    user.map(item => {
        if (groupUser[item["eyeColor"]]) {
            groupUser[item["eyeColor"]].push(item)
        } else {
            groupUser[item["eyeColor"]] = [item]
        }
    })
    return groupUser
}
console.log(grupUsers(user))

// 7.  What will be logged

//   a.

// {
//     let a = () => {
//         console.log(1);
//     }
// }
// a(); // ReferenceError: a is not defined

//   b.

// let a = 1;

// function a() {
//     console.log(a);
// }

// a(); // SyntaxError: Identifier 'a' has already been declared

//   c.

// let b = function foo() {
//     console.log(1);
// }

// foo(); // ReferenceError: foo is not defined

//   d.

// function a() {
//     let a = 1;
//     console.log(a);
// }

// a(); // log kani  1
