const container = document.getElementById('container')
const loadMore = document.getElementById('btnLoadMore')
const inpSearch = document.getElementById('inpSearch')

let pageOffset = 0
let loader = document.createElement('div')

function showLoader(loader) {
    loader.innerText = "loading..."
    loader.classList.add('loader')
    container.appendChild(loader)
}
function hideLoader(loader) {
    container.removeChild(loader)
}

function getRequest(pageOffset = 0) {
    showLoader(loader)

    const requestURL = `https://harvardartmuseums.org/browse?load_amount=30&offset=${pageOffset}`
    fetch(requestURL).then(response => response.json()).then(data => {
        hideLoader(loader)
        data.records.forEach(el => {
            createElement(el)
        })

        let items = [...container.children]
        inpSearch.addEventListener('input', (e) => {
            let value = e.target.value
            container.innerHTML = ""
            if (value) {
                let filltered = items.filter(item => item.children[2].innerHTML.toLowerCase().includes(value.toLowerCase()))
                container.append(...filltered)
            } else {
                container.append(...items)
            }
        })
    })
}
getRequest()

loadMore.addEventListener('click', () => {
    pageOffset += 30
    getRequest(pageOffset)
})

function createElement(el) {
    let element = document.createElement('div')
    element.classList.add('element')

    let imagDiv = document.createElement('div')
    imagDiv.classList.add('imagDiv')

    let image = document.createElement('img')
    image.classList.add('image')
    image.src = el.images[0].baseimageurl

    let titleDiv = document.createElement('div')
    titleDiv.classList.add('titleDiv')
    titleDiv.innerText = el.title

    let divisionDiv = document.createElement('div')
    divisionDiv.classList.add('divisionDiv')
    divisionDiv.innerText = el.division

    let copyrightDiv = document.createElement('div')
    copyrightDiv.classList.add('copyrightDiv')
    copyrightDiv.innerText = el.copyright

    imagDiv.appendChild(image)
    element.append(imagDiv, titleDiv, divisionDiv, copyrightDiv)
    container.appendChild(element)
}