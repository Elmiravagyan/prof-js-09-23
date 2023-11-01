// let button = document.getElementById('btn');
// let darkH1 = document.getElementById('dark');
// console.log('Log ::: H1 ===', darkH1);
// // JS version
// // let clicked = false;
// // button.addEventListener('click', () => {
// //     if(clicked) {
// //         darkH1.innerText = 'Sad div 3';
// //     } else {
// //         darkH1.innerText = 'Happy div 3';
// //     }
// //     clicked = !clicked;
// // })
//
//
// // button.addEventListener('click', () => {
// //     darkH1.classList.toggle('happy');
// // })
//
// //Potato task
// const forbiddenKey = 'potato';
// const textElement = document.getElementById('text');
// button.addEventListener('click', () => {
//     let innerText = textElement.innerText;
//     console.log('Log ::: textElement ===', innerText);
//     innerText = innerText.replace(forbiddenKey, 'cute');
//     textElement.innerText = innerText;
//     console.log('Log ::: innerText ===', innerText)
// })

// Place Task
const colors = ['greenyellow', '#ffda21', 'red'];
let styleButton = document.getElementById('change-styles');
let spanList =document.getElementsByClassName('place-span');
console.log('Log ::: spanList ===', spanList);
styleButton.addEventListener('click', () => {
    let array = [...spanList];
    array.map((item, index) => item.style.color = colors[index%3])

})

fetch