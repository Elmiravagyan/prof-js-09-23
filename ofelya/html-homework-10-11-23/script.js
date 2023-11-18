let button1 = document.getElementById("clickButton")
let button2 = document.getElementById("doubleClickButton")


 // let clicked = false;
button1.addEventListener('click', () => {
    button1.innerText = button1.innerText === 'Click Me' ? 'Clicked' : 'Click Me';
  // if(clicked) {
  //     button1.innerText = 'Clicked';
  //  } else {
  //   button1.innerText = 'Click Me';
  //  }
  // clicked = !clicked;
 })

// TODO Օֆելյա ջան ճիշտա մոտաոր, բայց մի փոքր սխալա աշխատում առաջին անգամ որ սեղմում ենք մենակ գույննա փոխում դա նրանիցա
//  որ else -ի մեջ ես փոխում տեքստը արի սենց անենք էս clicked փոփոխականը մեզ պետք չի, ասենք որ եթե մեր button-ի innerText-ը
//  Click Me' ա թող դարձնի 'Clicked' հաառակ դեպքում 'Click Me'
//  -> button1.innerText = button1.innerText === 'Click Me' ? 'Clicked' : 'Click Me';
 button1.addEventListener('click', () => {
   button1.classList.toggle('newStyle');
  })

 button2.addEventListener('dblclick', () =>{
    button2.classList.toggle('db');
});

let dbClicked = false;
button2.addEventListener('click', () => {
if(dbClicked) {
   button2.innerText = 'Double Clicked!';
} else {
 button2.innerText = 'Double Click';
}
dbClicked = !dbClicked;
button2.classList.toggle('db')
})

// TODO նույն խնդիրը ստեղ էլ կա, ստեղ արդեն դու կփոխես


//task2
button1.addEventListener("click", () => {
   const newText = document.getElementsByClassName("replaceMe").innerText = '😊'})


// TODO Էս վերջին կետն էլ չի ստացվել որովհետև getElementsByClassName DOM էլեմենտ չի հետ տալիս այլ կոլեցիա
//  այ էդ կոլեկցիայի մեջ նոր DOM էլեմենտներ են որոնց վրա կարելիա ցիկլ պտտվել ու փոխել մեր ուզած ձևով -> [...newText].forEach(...