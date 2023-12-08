const userListTemplate = document.querySelector("[data-user-template]")
const usersLists = document.querySelector("[data-users-lists]")
const searchInput = document.querySelector("[data-search]")

let users = [];

searchInput.addEventListener("input", (e) => {
    const value = e.target.value;
    users.forEach(user => {
        const visiblity = user.id.includes(value) || user.userId.includes(value) || user.title.includes(value) || user.body.includes(value) 
        user.element.classList.toggle("hide", !visiblity)
    })
})


fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(data => {
    users = data.map(user => {
        const list = userListTemplate.content.cloneNode(true);
        const userId = document.querySelector(".userId");
        const id = document.querySelector(".id");
        const title = document.querySelector(".title");
        const body = document.querySelector(".body");
        userId.innerHTML = user.userId
        id.innerHTML = user.id
        title.innerHTML = user.title
        body.innerHTML = user.body
        usersLists.append(list);
        return { userId: user.userId, id: user.id, title: user.title, body: user.body, element: list };
    })
})