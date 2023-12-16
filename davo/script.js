let button1=document.getElementById('change-styles');
button1.addEventListener("click",()=>{
   let a= document.getElementsByClassName("place-span");
   let b=[...a];
   b.map(element => {
    element.classList.add("place-span1")
   });
   
})
let button2=document.getElementById("change-styles-button");
let buttons=document.querySelectorAll('button')
console.log(buttons)
button2.addEventListener("click",()=>{
   buttons[1].remove()
    
  
})