// JS FROF: MID 1 pre-test


// What will be the output and why
// NaN - 1/'s' || typeof undefined + '1'   
NaN-1/'s' = NaN - (false) => NaN (NaN-i het cankacats gortsoxutyun linum e NaN)
undefined1
// 1/3 && !2%'2' || typeof function() {}
function 
1. 1/3 && !2%'2' => 0 (&&- yntrum e arajin sxaly, ete scal chka verjiny)
2. 0 || typeof function() {} => function (|| yntrum e arajin jishty , ete jisht chka verjiny)

// null - 1 || !![] && 2
1. !![] && 2 => true && 2 => 2
2. null-1 || 2 => -1
-1
// !!{} && false - 1 && 2-undefined
true&& false -1 => -1(false = 0, 0-1 = -1)
2. -1 && 2-undefined (-1 && NaN) => NaN
NaN
// Write a function that will clone an array of objects.
let newUsrs = usrs.map(item => Object.assign({}, item));

// Write a function that will create constant objects.

    function constObj(obj) {
      Object.freeze(obj)
      return obj;
  }
// Write a function that generates users with name, surname, and age
function gener(name, surname, age) {
  let user = {
      name: name,
      surname: surname,
      age: age,
  }
  return user;
}

// Write a function that will filter the array from duplicates
function duplicates(arr) { 
    let newArray= [];
    arr.forEach((item) => {
        if (!newArray.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

//version 2
let arr1 =[1, 2, 1, 4, 2];
function removedub(data) {
    return data.filter((item, index) => data.indexOf(item) === index)
}
undefined
removedub(arr1)
(3) [1, 2, 4]
// We have users array
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
  ];
  
  
  
  
  
  
  
  let user5 =   {
      "_id": "652fc67d92a11e2882df913da3",
      "isActive": true,
      "balance": "$1,416.67",
      "age": 30,
      "eyeColor": "blue",
      "name": "Hughes Finn",
      "gender": "male",
      "company": "BULLZONE",
      "email": "hughesfinn@bullzone.com"
    },
  

let newUsers = users.splice(5, 5, user5)
// Create an array that includes only male users with blue eyes
let blueeyes =[];
users.forEach(item => {if (item["eyeColor"] == "blue" && item["gender"] == "male") {
    blueeyes.push(item)
}
})
//version 2
users.filter(user => user.gender === 'male' && user.eyeColor === 'blue')                +
// Return the last user which is female and the balance is greater than 2800.
let filtered = users.filter(item => {
  let arrOfNum = item.balance.split('');
    //console.log(arr)
  let number= arrOfNum.filter(char => {
    return !isNaN(char)
      
  })
  number = number.join('');
    //console.log(number)
 return  item.gender=== 'female' && number>2000 
})

//version 2
function toNumber(string, sign) {
  let  stringWithComa = string.split(sign)[1];
  let finalString = stringWithComa.split(',').join('');
   return +finalString;
   
};
users.findLast(item => item.gender === 'female' && toNumber(item.balance) > 2800)

//version 2
let filtered = users.findLast(item => {
  let arrOfNum = item.balance.split('');
    //console.log(arr)
  let number= arrOfNum.filter(char => {
    return !isNaN(char)
      
  })
  number = number.join('');
    //console.log(number)
 return  (item.gender === 'female' && number > 2800)
})

// Insert a new user from users array doc (name user5 in the doc) at the 5th index.
let user5 =   {
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

  users.splice(5,0, user5);

// Remove users from 3-5 indexes
users.splice(3,3);
// Create function that finds a user by category like
filterUsers(‘name’, ‘Sam Smith’’)
filterUsers(age, ‘30’’)
const advancedFilter = (arr, field, value) => {
  return arr.find(item => item[field] === value)
}

// Add gmail filed to all the users which will consist form user name, surname + @gmail.com
// EX:  if user.name = “Ann Smith” than user Gmail should be ann.smith@gmail.com
let newUsers = users.map(item => {
  item.gmail = item.name.toLowerCase().replace(' ', '.').concat('@gmail.com')
   return item;
});

// Group users by eye color (*).
// EX: {
// 	blue: [{}, {},...]
// 	green: [{},{},...]
// 	…
// }
let obj = {};
users.forEach(item => {
    if(obj[item.eyeColor]) {
       obj[item.eyeColor].push(item); 
    } else {
        obj[item.eyeColor] = [item];
    }
})






// What will be logged

// {
//     let a = () => 
//     console.log(1);
// }

// a();
error // a is not defined



// let b = function foo() {
//     console.log(1);
// }

// foo();

error, //foo is not defined(b-iin arden veragrvats function-y)

// function a() {
//     let a = 1;
//     console.log(a);
// }

// a();
1


	



