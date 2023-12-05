const container = document.getElementById('container')
const searchInp = document.getElementById('searchInp')

const requestURL = "https://jsonplaceholder.typicode.com/posts"

fetch(requestURL).then(response => response.json()).then(data => {

    data.forEach(el => {
        let item = document.createElement('div')
        item.classList.add('item')
        item.innerText = el.title
        container.appendChild(item)
    })
    const arrItems = [...container.children]

    searchInp.addEventListener('input', (e) => {
        let value = e.target.value.toLowerCase()
        arrItems.forEach(el => {
            let isVisible = el.innerText.toLowerCase().includes(value)
            el.classList.toggle('hide', !isVisible)
        })
    })
})
    .catch(err => console.log(err))
