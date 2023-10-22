//1
//a. NaN || 'undefined1' => 'undefined1'
// սխալ //b. 0 || 'object' => 'object' => 'function'
//c. -1
//d. true && -1 && NaN => NaN

/*
2. function cloneArr(arr) {
    let cloned = [];
    arr.forEach(item, index => {
        Object.assign(cloned[index], item);
    })
    return cloned;
}

3. function constantObj (obj) {
   return Object.freeze(obj);
}

4. function genUsers(name, surname, age) {
    let newUser = {
        name,
        surname,
        age
    };
    return newUser;
}

5.   

function filterDuplicates(arr) {
  let filtered = [];
  for(let item of arr) {
      if(typeof item !== 'object' && filtered.includes(item) === false) {
              filtered.push(item);
      } else if (!arrIncludesObj(filtered, item)) {
        filtered.push(item);
          }
        }
  return filtered;
}
  
function arrIncludesObj(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      let result = true; 
      for (let key in obj) {
        if (arr[i][key] !== obj[key]) {
          result = false; 
          break; 
        }
      }
      if (result) {
        return true; 
      }
    }
  }
  return false; 
}

6.a let maleBlueEyes = users.filter(item => {
    return (item["gender"] === "male" && item["eyeColor"] === ["blue"]);
})

b. 
let fem2800index = users.findLastIndex(item => {
    let num = item["balance"].split("");
    num = num.filter(elem => {
        return elem !== "$" && elem !== ",";
    })
    num = num.join("")
    return (item["gender"] === "female" && num > 2800) 
})

let fem2800 = users[fem2800index];

c. users.splice(5, 0, user5)
d. users.splice(3, 3)
e.  function filterUsers(array, key, value) {
         let user = array.find(item => {
           return item[key] === value;
        })
        return user;
    }
f. users.forEach(item => {
    let name = item["name"].split(" ")[0].toLowerCase();
    let surname = item["name"].split(" ")[1].toLowerCase();
    item("gmail") = `${name}.${surname}@gmail.com`;
})
g. սխալ let groupedByEyeColor = {};
users.forEach(item => {
    for(let key in groupedByEyeColor) {
        if(key !== item["eyeColor"]) {
            groupedByEyeColor[item["eyeColor"]] = [];
            groupedByEyeColor[item["eyeColor"]].push(item);
        } else {
            groupedByEyeColor[item["eyeColor"]].push(item);
        }
    }
})

7.a. Error
b. Error
c. 1
*/



