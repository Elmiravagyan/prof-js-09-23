let add = document.getElementById("add");
let search = document.getElementById("search");
let container = document.getElementById("container");

// import trashicon from './assets/trash-solid.svg';

// const trash = document.createElement("img");
// trash.setAttribute("src", trashicon)


add.addEventListener("click", () => {
   const newToDo = document.createElement("div");
   newToDo.classList.add("todo");
   newToDo.innerText = search.value;
  
   const done = document.createElement("input");
   done.setAttribute("type", "checkbox");
   newToDo.appendChild(done);

   const deletebtn = document.createElement("button");
   deletebtn.innerText = "Dlt"
   deletebtn.setAttribute("class", "delete");
   //deletebtn.appendChild(trash);
   newToDo.appendChild(deletebtn);

   const editbtn = document.createElement("button");
   editbtn.innerText = "Edit";
   editbtn.setAttribute("class", "edit");
   newToDo.appendChild(editbtn);

   container.appendChild(newToDo);

})

container.addEventListener("click", () => {
    let arr = [...event.target.classList];
    if(arr.includes("delete")) {
       event.target.parentNode.remove();
    } 
    else if(arr.includes("edit")) {
       const editdiv = document.createElement("div"); 
       const editinput = document.createElement("input");
       const cancle = document.createElement("button");
       const save = document.createElement("button");

       editinput.value =  event.target.parentNode.innerText;

       editdiv.appendChildren(editinput, cancle, save);

       event.target.parentNode.classList.add("invisible");
    

    }
})