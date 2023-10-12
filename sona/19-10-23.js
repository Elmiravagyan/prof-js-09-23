//task 1
function calcArea() {
    let figure = prompt("Which geometric figure do you need to find the area of? Please, input t for a triangle, z for a trapezoid, c for a circle, s for a square or r for a rectangle.")
    switch (figure) {
        case "t":
            areaT();
            break;
        case "z":
            areaZ();
            break;
        case "c":
            areaC();
            break;
        case "s":
            areaS();
            break;
        case "r":
            areaR();
            break;
        default:
            error();
            break;
    }
}

function areaT() {
    let param = prompt("Input the base and the height of the triangle! (e.g. 2,4) In case of a decimal number, please, use a point as the decimal separator (e.g. 2.5, 4.2)");
    let b = param.split(",")[0];
    let h = param.split(",")[1];
    let result = b*h/2;
    if(isNaN(result) || result <= 0) {
        error();
    } else return alert(`The area of the given triangle equals to ${result}.`);
}

function error() {
    let solution = confirm("Something went wrong! Do you want to try again?")
            if(solution) {
                return calcArea();
            } else return alert("See you again!");
            
}

function areaZ() {
    let param = prompt("Input the bases and the height of the trapezoid! (e.g. 2,4,5) In case of a decimal number, please, use a point as the decimal separator (e.g. 2.5, 4.2, 5.6)");
    let a = param.split(",")[0];
    let b = param.split(",")[1];
    let h = param.split(",")[2];
    let result = (+a + +b)*h/2;
    if(isNaN(result) || result <= 0) {
        error();
    } else return alert(`The area of the given trapezoid equals to ${result}.`);
}

function areaC() {
    let r = prompt("Input the radius of the circle! (e.g. 2) In case of a decimal number, please, use a point as the decimal separator (e.g. 2.5)");
    let result = 3.14*r**2;
    if(isNaN(result) || result <= 0) {
        error();
    } else return alert(`The area of the given circle equals to ${result}.`);
}

function areaS() {
    let a = prompt("Input the side of the square! (e.g. 2) In case of a decimal number, please, use a point as the decimal separator (e.g. 2.5)");
    let result = a**2;
    if(isNaN(result) || result <= 0) {
        error();
    } else return alert(`The area of the given square equals to ${result}.`);
}

function areaR() {
    let param = prompt("Input the length and the width of the rectangle! (e.g. 2,4) In case of a decimal number, please, use a point as the decimal separator (e.g. 2.5, 4.2)");
    let l = param.split(",")[0];
    let w = param.split(",")[1];
    let result = l*w;
    if(isNaN(result) || result <= 0) {
        error();
    } else return alert(`The area of the given rectangle equals to ${result}.`);
}

//task 2
let number;
do {
    number = +prompt("Input a number for a chance to win 1000$!");
} while (number !== 7)
alert("YOU WON 1000$");