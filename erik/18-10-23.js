// 1. What will be the output and why
// a. NaN - 1/'s' || typeof undefined + '1' = 1/'s' == string == NaN - string == NaN == typeof undefined == undefined == 'undefined1'
// b. 1/3 && !2%'2' || typeof function() {} = 1/3 == 0 == !2%'2' == 0 == typeof function() {} == function
// c. null - 1 || !![] && 2 = null - 1  == -1 || !![] && 2 == true == -1
// d. !!{} && false - 1 && 2-undefined = !!{} == true == false - 1 == -1 == true == 2 - undefined == NaN


// 2. Write a function that will clone an array of objects.

// function cloneArr() {
//     let arr = ['bqfubf']
//     let clone = arr.slice()
//     console.log(clone)

// }
// cloneArr()

// 3. Write a function that will create constant objects.





// 4. Write a function that generates users with name, surname, and age
// let user = {
//     name:  ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Aaran"],
//     surname:  ["Aaberg", "Aaby", "Aadland", "Aagaard", "Aakre", "Aaland", "Aalbers", "Aalderink", "Aalund", "Aamodt", "Aamot", "Aanderud", "Aanenson", "Aanerud", "Aarant", "Aardema", "Aarestad", "Aarhus", "Aaron", "Aarons", "Aaronson", "Aarsvold"],
//     age:  ["56", "74", "45", "42", "11", "77", "34", "76", "78", "13", "72", "25", "79", "91", "28", "15", "19", "35",]
// }
// function generate() {
//     let userName = user.name(Math.floor(Math.random() * user.name.length))
//     let userSurname = user.surname(Math.floor(Math.random() * user.surname.length))
//     let userAge = user.age(Math.floor(Math.random() * user.age.length))
// }

// generate()

// console.log(user)





// 5. Write a function that will filter the array from duplicates

// let arr = [1, 2, 2, 3, 5, 6, 6]

// let newArr = [...new Set(arr)];
// console.log(newArr)




// 6. We have users array
// a. Create an array that includes only male users with blue eyes


// b. Return the last user which is female and the balance is greater than 2800.


// c. Insert a new user from users array doc (name user5 in the doc) at the 5th index.


// d. Remove users from 3-5 indexes


// e. Create function that finds a user by category like
// filterUsers(‘name’, ‘Sam Smith’’)
// 		filterUsers(age, ‘30’’)



// f. Add gmail filed to all the users which will consist form user name, surname + @gmail.com
// EX:  if user.name = “Ann Smith” than user Gmail should be ann.smith@gmail.com




// g. Group users by eye color (*).
// EX: {
// 	blue: [{}, {},...]
// 	green: [{},{},...]
// 	…
// }


// 7. What will be logged

// {
//     let a = () =>    console.log(1);
// }

// a();

// Output: a is not defined;


// let b = function foo() {
//     console.log(1);
// }

// foo();

// Output: foo is not defined;



// function a() {
//     let a = 1;
//     console.log(a);
// }

// a();

// Output: 1