

let loadBtn = document.createElement('button');
let nextPage = document.createElement('button');
let btns = document.createElement('div');
loadBtn.innerText = 'Load more';
nextPage.innerText = '2';
loadBtn.classList.add('btn');
nextPage.classList.add('btn');
btns.classList.add('btnsDiv')
btns.append(loadBtn, nextPage);


fetch("https://harvardartmuseums.org/browse?load_amount=30")
    .then(res => res.json())
    .then(res => {
        generateMarkup(res);
        document.body.append(btns);
    })

let container = document.getElementById('container')

//records primaryimageurl classification id title people array's obj with role: Artist


function generateMarkup(arr) {
    arr.records.forEach((item) => {
        let artElem = document.createElement('div');
        let image = document.createElement('img');
        let description = document.createElement('div');
        let id = document.createElement('div');
        let artist = document.createElement('div');
        let title = document.createElement('div');
        let classification = document.createElement('div');

        image.setAttribute('src', item?.primaryimageurl);
        id.innerText = item?.id;
        let artistName = item?.people?.find((person) => {
            return person?.role === 'Artist';
        })?.name;
        artist.innerText = artistName ? artistName : 'Unknown';
        title.innerText = item?.title;
        classification.innerText = item?.classification;

        image.classList.add('img');
        artElem.classList.add('artElem');
        description.classList.add('desc');
        id.classList.add('additionalInfo');
        artist.classList.add('artist');
        title.classList.add('title');
        classification.classList.add('additionalInfo');

        description.append(id, artist, title, classification);
        artElem.append(image, description);

        container.appendChild(artElem);
    })
}

function loadMore() {
    let currentlyDisplayed = [...container.children].length;
    let next30 = currentlyDisplayed+30;
    fetch(`https://harvardartmuseums.org/browse?load_amount=${next30}`)
    .then(res => res.json())
    .then(res => {
        nextPage.remove();
        container.textContent = '';
        generateMarkup(res);
    })
}
loadBtn.addEventListener('click', () => {
    loadMore();
})