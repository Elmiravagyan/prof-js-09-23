

// let squares = document.getElementsByClassName("square");
 
//   for (let square of squares) {
//     square.addEventListener("click", () => {
//       square.classList.toggle("highlighted");
//     });
//   }

let squares = document.getElementsByClassName("square");
//console.log(squares)
let squareSet = new Set(squares);
//console.log(squareSet)

squareSet.forEach(square => {
  square.addEventListener("click", () => {
    square.classList.toggle("highlighted");
  });
});