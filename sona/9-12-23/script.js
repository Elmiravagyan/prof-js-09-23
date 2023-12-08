let container = document.getElementById('container');

let loading =  document.createElement('div');
loading.innerText = 'Loading...';
loading.setAttribute('id', 'loading');

container.appendChild(loading);

fetch("https://jsonplaceholder.typicode.com/posts")
.then(result => result.json())
.then((json) => {
    //console.log(json);
    loading.classList.add('hide');
    createMarkup(json);
})

function createMarkup(array) {
    
    let search = document.createElement('input');
    search.setAttribute('type', 'text');
    search.setAttribute('placeholder', 'Search (in title)');
    search.setAttribute('id', 'search');
    
    container.appendChild(search);

    let posts = document.createElement('div');

    array.forEach((post) => {
        
        let postElem = document.createElement('div');
        let title = document.createElement('div');
        let body = document.createElement('div');


        title.innerText = post.title.replace(post.title[0], post.title[0].toUpperCase());
        title.classList.add('title');

        body.innerText = post.body.replace(post.body[0], post.body[0].toUpperCase());;
        body.classList.add('body');

        postElem.classList.add('post');
        postElem.append(title, body);

        posts.appendChild(postElem);
    })
    
    container.appendChild(posts);
}



container.addEventListener('change', (event) => {
    if(event.target.id === 'search') {
        let posts = event.target.nextSibling;
        [...posts?.children].forEach((post) => {
           // console.log(post?.firstChild?.innerText)
            if(!post?.firstChild?.innerText?.toLowerCase().includes(`${event.target.value.toLowerCase()}`)) {
                post.classList.add('hide');
            } else {
                post.classList.remove('hide');
            }
        })
    }
})
