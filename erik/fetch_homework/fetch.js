const userListTemplate = document.querySelector("[data-user-template]")
const usersLists = document.querySelector("[data-users-lists]")
const searchInput = document.querySelector("[data-search]")

const colors = [
    '#3498db',
    '#e74c3c',
    '#2ecc71',
    '#f39c12',
    '#9b59b6',
    '#1abc9c',
    '#e67e22',
    '#34495e',
    '#d35400',
    '#c0392b',
];

let users = []
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => users = response.json())
    .then(response => {
        users = response;
        users.forEach(user => usersLists.append(createUserItem(user)))
    })

const createUserItem = (user) => {
    const item = document.createElement('div')
    item.innerText = user.title

    const randomIndex = Math.floor(Math.random() * colors.length)
    item.style.backgroundColor = colors[randomIndex]
    item.className = 'item';

    return item;
}

function usersFilter(e) {
    const search = e.target.value
    if(search) {
        usersLists.innerHTML = '';
    }
    const filteredUsers = search ? users.filter(user => user.title.includes(e.target.value)) : users;
    filteredUsers.forEach(user => usersLists.appendChild(createUserItem(user)))
}

searchInput.addEventListener('input', usersFilter)


// searchInput.addEventListener("input", (e) => {
//     const value = e.target.value;
//     users.forEach(user => {
//         const visiblity = user.id.includes(value) || user.userId.includes(value) || user.title.includes(value) || user.body.includes(value)
//         user.element.classList.toggle("hide", !visiblity)
//     })
// })
//
//
// fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(data => {
//     users = data.map(user => {
//         const list = userListTemplate.content.cloneNode(true);
//         const userId = document.querySelector(".userId");
//         const id = document.querySelector(".id");
//         const title = document.querySelector(".title");
//         const body = document.querySelector(".body");
//         userId.innerHTML = user.userId
//         id.innerHTML = user.id
//         title.innerHTML = user.title
//         body.innerHTML = user.body
//         usersLists.append(list);
//         return { userId: user.userId, id: user.id, title: user.title, body: user.body, element: list };
//     })
// })


// TODO Էրիկ ջան քեզ մոտ user -ները չէին նկարվում ֆիլտրն էլ չեր աշխատում
//  ես մի փոքր կոդ եմ գրել վերևում քո գրածը քոմենթել եմ, սկզբում պետքա ստանալ user-ներին ու միանգամից նկարել
//  ես տեսա որ HTML -ի մեջ usersLists class ով div ես ստեղծել դա ճիշտա, հիմա երբ user -ներին ստանում ենք պետքա
//  ամեն մեկի համար մի ինչ որ նոր tag ստեղծել իրա ինֆոն լցնել մեջը ու ավելացնել usersLists -ի մեջ createUserItem ֆունկցիան
//  որ ստեղծել եմ  դայա անում:
//  իսկ usersFilter ֆունկցիան ստուգումա եթե input -ի արժեքը դատարկա բոլոր օգտատերերին նարումա եթե ոչ ըստ input -ի արժեքի
//  ֆիլտրումա օգտատերերին ու նոր նկարում: փորձի հասկանաս ինչ ա արած ու տեսքի վրա աշխատես մի փոքր