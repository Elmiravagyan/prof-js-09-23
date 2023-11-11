let button1 = document.getElementById("clickButton")
let button2 = document.getElementById("doubleClickButton")

button1.addEventListener('click', () => {
    button1.classList.toggle('newStyle');
   })
console.log(button1)
 let clicked = false;
button1.addEventListener('click', () => {
  if(clicked) {
      button1.innerText = 'Clicked';
   } else {
    button1.innerText = 'Click Me';
   }
  clicked = !clicked;
 })

 button2.addEventListener('dblclick', () =>{
    button2.classList.toggle('db');
})
let dbClicked = false;
button2.addEventListener('click', () => {
if(dbClicked) {
   button2.innerText = 'Double Clicked!';
} else {
 button2.innerText = 'Double Click';
}
dbClicked = !dbClicked;
})


//task2

