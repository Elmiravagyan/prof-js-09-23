const searchBtn = document.getElementById("btn");
const input = document.getElementById("input");
const userCont = document.getElementById("user-container");


 function createMarkup(user){
   let item = document.createElement("div");
   let userId = document.createElement("div");
   let id = document.createElement("div");
    userId.innerText = `USERID: ${user.userId}`;
    id.innerText = `ID: ${user.id}`;
    item.append(userId, id);
    userCont.appendChild(item);
    item.classList.add("user-item")
    return item;

 }
 
 fetch("https://jsonplaceholder.typicode.com/posts").then(response=>{
     return response.json();
 })
   .then(array =>array.forEach((user,i, arr) => {
    createMarkup(user);
    searchBtn.addEventListener("click", ()=>{
        let value = +input.value;
        if(value){
        let filtered = arr.filter(item => item.userId === value);
         userCont.innerText = "";
         userCont.append(...filtered.map(item => createMarkup(item)));
        }else if(!value){
            userCont.innerText = "";
           arr.forEach(item => createMarkup(item))
        }
    })

    
   
})); 
  

 //  TODO Ճիշտ է ապրես
// todo կարաս title -ով էլ ավելացնես ֆիլտր