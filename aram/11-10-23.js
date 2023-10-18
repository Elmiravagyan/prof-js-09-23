function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}

function calculateTrapezoidArea(base1, base2, height) {
    return 0.5 * (base1 + base2) * height;
}

function calculateSquareArea(side) {
    return side * side;
}

function calculateRectangleArea(length, width) {
    return length * width;
}

function calc() {
    let choice = prompt("Enter the code for the shape (t/z/c/s/r):");

    switch (choice) {
        case 't':
            let triangleBase = prompt("Enter the base of the triangle:");
            let triangleHeight = prompt("Enter the height of the triangle:");
            alert(`The area of the triangle is: ${triangleArea}`);
            break;
        case 'z':
            let trapezoidBase1 = prompt("Enter the first base of the trapezoid:");
            let trapezoidBase2 = prompt("Enter the second base of the trapezoid:");
            let trapezoidHeight = prompt("Enter the height of the trapezoid:");
            alert(`The area of the trapezoid is: ${trapezoidArea}`);
            break;
        case 'c':
            let circleRadius = prompt("Enter the radius of the circle:");
            alert(`The area of the circle is: ${circleArea}`);
            break;
        case 's':
            let squareSide = prompt("Enter the side length of the square:");
            alert(`The area of the square is: ${squareArea}`);
            break;
        case 'r':
            let rectangleLength = prompt("Enter the length of the rectangle:");
            let rectangleWidth = prompt("Enter the width of the rectangle:");
            alert(`The area of the rectangle is: ${rectangleArea}`);
            break;
        default:
            alert("Invalid code. Please enter a valid code (t/z/c/s/r).");
    }
}








function checkForWin() {
    const userInput = prompt("Enter a number:"); 

    if (userInput === "7") {
        alert("YOU WON 1000$");
    } else {
        alert("Try again. You didn't win this time.");
        checkForWin(); 
    }
}

checkForWin(); 

