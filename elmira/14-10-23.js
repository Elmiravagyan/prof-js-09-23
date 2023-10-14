let a = 5;

function goo() {
    console.log(a);
    let a = 7;
    console.log(a);
}

goo();

// David => 7,7
// Sona => Error
// Gevorg => 5, 7
// Aren => error/undefined, 7
// Esimov => 5,5

var a = 5;

function doo() {
    console.log(a);
    var a = 7;
    console.log(a);
}

doo();

//3.
{
    var u = 10;
}

console.log(u);

// Sergey, Gevorg => 10
// Levon => Error
// Ani =>  undefined


function too() {
    var f = 10;
}
console.log(f);

// Sergey, Gevorg => undefined
// Davit, Aren => 10

// version 2
// function boo() {
//     var f = 10;
// }
// console.log(f);
//
// var f = 20;


function app() {
    console.log(message);
}

let message = 'Hi guys';


app();

// Ani => 'Hi guys' (right one)
// Gevorg => Error
// Sergey => undefind

// version 2
// function app() {
//     console.log(message);
// }
//
// app();
//
// let message = 'Hi guys';


// Gevorg, Levon: Error  (right one)
// Aren: 'Hi guys'

function cpp() {
    console.log(mess);
}


cpp();

var mess = 'Hi guys';