// 1. Write a program to calculate the area of geometrical figures like circles, triangles, trapezoids, squares, and rectangles.he program should ask the user to enter the code for which the user wants to find the area. 
function areas() {
    let userPrompt = prompt('write the code of the geometrical figures');
    switch(userPrompt){
         case('t'):
              let triangleSide = +prompt('please input the triangle side')
              let triangleHigh = +prompt('please input the triangle high')
              alert('the area of the triangle = ' + 1/2 * triangleSide * triangleHigh);
              break;
         case('z'):
            let trapezoidParallelSide1 = +prompt('please input the trapezoid parrallelSide1')
            let trapezoidParallelSide2 = +prompt('please input the trapezoid  parallelSide2')
            let trapezoidHigh = +prompt('please writ the trapezoid high')
            alert('the area of the trapezoid = ' + 1/2 * (+trapezoidParallelSide1 + +trapezoidParallelSide2) * trapezoidHigh)
            break;
         case('c'):
            let radiusOfCircle = +prompt('please input the radius of the circle')
            alert('the area of the circle = ' + 3,14 * radiusOfCircle**2)
            break;
         case('s'):
            let theSquareSide = +prompt('please write the square side')
            alert('the area of the square = ' + theSquareSide**2)
            break;
         case('r'):
            let lengthOfRectangle = +prompt('please write the length of the rectangle')
            let widthOfRectangle = +prompt('please write the width of the rectangle')
            alert('the area of the rectangle' + lengthOfRectangle * widthOfRectangle)
            break;
    }
}

// 2. Write a program that will ask a user for input, if the input is “7” alert “YOU WON 1000$” If not ask the user the same question again. This process should happen until the user finally enters “7”. 
let userPrompt
while (userPrompt !== '7') {
     userPrompt = prompt('write your lucky number')
 }
alert('“YOU WON 1000$”')

