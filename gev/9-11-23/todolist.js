const todo = document.getElementById("todo")
const addBtn = document.getElementById("addBtn")
const input = document.getElementById("input")

addBtn.addEventListener("click", () => {

    const item = document.createElement("div")
    const taskText = document.createElement("div")
    taskText.innerText = input.value
    item.classList.add("item")
    taskText.classList.add("teskText")
    todo.appendChild(item)
    item.appendChild(taskText)
    input.value = ""

    taskText.addEventListener("click", () => {
        taskText.classList.toggle("doneitem")
    })

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "Delete"
    item.appendChild(deleteBtn)
    deleteBtn.classList.add("deleteBtn")

    deleteBtn.addEventListener('click', () => {
        item.remove()
    })

    const editBtn = document.createElement("button")
    editBtn.innerText = "Edit"
    item.appendChild(editBtn)
    editBtn.classList.add("editBtn")

    editBtn.addEventListener('click', () => {
        taskText.classList.toggle("editText")
        const editInput = document.createElement("input")
        editInput.classList.add("editInput")
        item.appendChild(editInput)
        editInput.value = taskText.innerText
        editBtn.innerText = "Done"
    })
})