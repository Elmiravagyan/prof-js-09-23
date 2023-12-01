let input = document.getElementById("search")
let button = document.getElementById("search-btn")
let div = document.getElementById("container")
let count = 0;
button.addEventListener("click", () => {
    let containerValue = document.createElement("div")
    let dellete = document.createElement("button",)
    dellete.setAttribute("class", "dellete")
    let edit = document.createElement("button")
    containerValue.setAttribute("id","count")
    count++
    dellete.innerText = "Delete"
    edit.innerText = "Edit"
    containerValue.append(input.value)
    containerValue.append(dellete)
    containerValue.append(edit)
    container.append(containerValue)
    input.value = "";
    let delleteAll = document.createElement("button")
    delleteAll.innerText = "Delete All"
})
container.addEventListener("click", (event) =>{
    if(event.target.classList.contains("dellete")){event.target.parentNode.remove()}
})
container.addEventListener("click", (event) =>{
    if(event.target.classList.contains("delleteAll")){event.target.parentNode.remove()}
})