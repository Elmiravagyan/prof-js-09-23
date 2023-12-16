function comments() {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(res => res)
}

function photos() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            console.log(res);
            return res.json()
        })
        .then(res => res)
}

function generateItem(comment, photoUrl) {
    let item = document.createElement('div');
    let textElement = document.createElement('div');
    let image = document.createElement('img');
    textElement.innerText = comment;
    image.setAttribute('src', photoUrl);
    item.append(image, textElement);
    return item;

}

Promise.all([comments(), photos()]).then(res => {
    console.log('Log ::: res ===', res)
    return res[0].map((item, index) => ({
        comment: item.name,
        photoUrl: res[1][index].url
    }));
}).then((res) => {
    let container = document.getElementById('container');
    res.forEach(({ photoUrl, comment }) => {
        let item = generateItem(comment, photoUrl);
        container.append(item);
    })
})