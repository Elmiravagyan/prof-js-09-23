NaN - 1/'s' || typeof undefined + '1' // NaN || true // true(typeof undefined + '1')
1/3 && !2%'2' || typeof function() {} // !2%'2' (0) || typeof function() {} // typeof function() {}
null - 1 || !![] && 2 // null - 1 || 2 // null - 1
!!{} && false - 1 && 2-undefined // 2-undefined


// 2.
let arrOfobj = [{name: 'Vagr'}, {name: 'Kokordilos'}, {name: 'Bltak'}];
let newArrOfObj = [];
 function  clone(array){
    array.forEach(element => {
        newArrOfObj.push(element)
    });
    return newArrOfObj;
 }

 // right solution

 let newUsrs = usrs.map(item => Object.assign({}, item));


 // 3. 
   function createConstObj(object){
         Object.freeze(object)
   }

   // 5.
   function filterDublicates(array) {
    let noDublicatesArray = []
    let filteredArr = array.filter((elem) => {
      if (!noDublicatesArray.includes(elem)) {
          noDublicatesArray.push(elem)
          return true;
      }  else return false;
    });
       return noDublicatesArray;
  }

// 6.
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
    }
  // 6.a
    let newUserList = [];
    let newList = users.map((elem) => {
         if(elem.gender === 'male' && elem.eyeColor === 'blue'){
            newUserList.push(elem)
         }
     })

// second solution 
  users.filter(user => user.gender === 'male' && user.eyeColor === 'blue')

// 6.b

function toNumber(string, sign) {
    let  stringWithComa = string.split(sign)[1];
    let finalString = stringWithComa.split(',').join('');
     return +finalString;
     
 };
 
 users.findLast(item => item.gender === 'female' && toNumber(item.balance) > 2800)
 
   

// 6.c
  users.splice(5,0, user5)

// 6.d
  users.splice(3,3)

// 6.e 
function findByCategory(array, category, value){
  let exarray = [];
    function findByCategory(array, field, value){
        array.forEach(element => {
            if(element[field] === value){
                exarray.push(element)
            }else return;
        });
         return exarray;
    }
}

 // second solution
 
 const advancedFilter = (arr, field, value) => {
    return arr.find(item => item[field] === value)
}

// 6.f
  users.forEach(element => {
     element.gmail = element.name.toLowerCase().replace(' ', '.')+'@gmail.com'
  });

  // 6.g

  let  usersEyecolor = {
    blue:[], 
    green:[]
  }
  
  users.forEach(element => {
   switch(element.eyeColor){
    case('blue'):
      usersEyecolor.blue.push(element)
    case('green'):
        usersEyecolor.green.push(element)
   }

  });


  // right solution

  let obj = {};
  users.forEach(item => {
      if(obj[item.eyeColor]) {
         obj[item.eyeColor].push(item); 
      } else {
          obj[item.eyeColor] = [item];
      }
  })
  
  