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
    } else return alert(`The area of the given triangle equals to ${result}.`)
}

function error() {
    let solution = confirm("Something went wrong! Do you want to try again?")
            if(solution) {
                return calcArea();
            } else return alert("See you again!");
            
}

