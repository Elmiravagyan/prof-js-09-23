let button = document.getElementById("clickButton");
let doubleButton = document.getElementById("doubleClickButton");

 function changeButton(){
     if(button.innerText === "Click me"){
        button.innerText = "Clicked!";
        button.style.background = "green";
      }else {
        button.innerText = "Click me";
        button.style.background = "";
      }
 }
 button.addEventListener("click", changeButton);
 
 function changeDblButton(){
    if(doubleButton.innerText === "Double Click me"){
        doubleButton.innerText = "Double Clicked!";
        doubleButton.style.background = "pink";
     }else {
        doubleButton.innerText = "Double Click me";
        doubleButton.style.background ="";
     }
}
 doubleButton.addEventListener("dblclick",changeDblButton);

 let div = document.getElementById("content");
 let tags = document.getElementsByTagName("p")
   div.innerHTML = ":)";
   