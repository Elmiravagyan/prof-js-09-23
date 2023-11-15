const mainBtn = document.getElementById('main-button');
const byClass = document.getElementsByClassName('happy');

//version 1
const toArr = [...byClass];
console.log('Log ::: toArr ===', toArr)

//version 2
// const toArr = Array.from(byClass);

mainBtn.addEventListener('click', () => {
    toArr.forEach(item => item.classList.toggle('custom'));
})

let small1 = document.getElementById('small-1');

small1.addEventListener('click', () => {
    mainBtn.remove();
})

//3 task
const add = document.getElementById('add');
const container = document.getElementById('container');
add.addEventListener('click', () => {
    let divElem = document.createElement('div');
    const lastElem = toArr[toArr.length -1];
    console.log('Log ::: lastElem ===', lastElem)
    let itemIndex = lastElem.firstChild.textContent.trim().split(' ')[1];
    divElem.innerText = `Div ${+itemIndex + 1}`
    let btnElem = document.createElement('button');
    btnElem.innerText = `Click ${+itemIndex + 1}`

    if(![...lastElem.classList].includes('custom')) {
        divElem.classList.add('custom');
    }

    divElem.appendChild(btnElem);
    divElem.classList.add('happy');
    toArr.push(divElem);
    container.appendChild(divElem);
})