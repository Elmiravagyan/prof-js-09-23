function createPostItem(elem){
    let item = document.createElement('div')

    let userId = document.createElement('div')
    userId.innerText = elem.userId
    userId.classList.add('user-id')
    
    let title = document.createElement('div')
    title.innerText = elem.title
    title.classList.add('title')

    let text = document.createElement('div')
    text.innerText = elem.body
    text.classList.add('text')

    item.append(title , userId , text)
    item.classList.add('item')

    return item
}

let postsContainer = document.getElementById('postsContainer')

function generatePosts(container , data){
    let postsMarkup = data.map((item) => createPostItem(item))
    container.append(...postsMarkup)
}

let SearchInput = document.getElementById('input')
let select = document.getElementById('filterOptions')
let searchBtn = document.getElementById('searchBtn')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((response) => {
        generatePosts(postsContainer , response)

        searchBtn.addEventListener('click' , () => {
            if(select.value === 'default'){
                postsContainer.innerText = ''
                generatePosts(postsContainer , response)
            }else{
                postsContainer.innerText = ''
                let filtered = response.filter((item) => item[select.value] == SearchInput.value)
                if(filtered.length > 0){
                    generatePosts(postsContainer , filtered)
                }else{
                    let Errortext = document.createElement('div')
                    Errortext.classList.add('Error')
                    Errortext.innerText = 'not found'
                    postsContainer.append(Errortext)
                }
            }
            SearchInput.value = ''
        })
    })


