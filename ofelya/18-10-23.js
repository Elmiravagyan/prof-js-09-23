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
function cloned(arr) {
    let newArr =[];
    return Object.assign(newArr, arr)
}
// Write a function that will create constant objects.
function consObj(obj) {
    let newObj = {}
    return Object.freeze(obj)
    }

// Write a function that generates users with name, surname, and age
function people (users) {
    function users(name, surname, age) {

    }
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
// What will be logged

// {
//     let a = () => {
//     console.log(1);
// }

// a();
undefined (let-i block scoped e)



// let b = function foo() {
//     console.log(1);
// }

// foo();

error, foo is not defined(b-iin arden veragrvats function-y)

// function a() {
//     let a = 1;
//     console.log(a);
// }

// a();
1


	



