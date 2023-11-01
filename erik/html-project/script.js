let btn = document.querySelector('.changeBtn')
let box = document.querySelectorAll('.box')
let btn2 = document.querySelector('.deleteBtn')

// document.querySelector(".changeBtn").addEventListener("click", function() {
//     document.querySelector('.box').classList.add(".changeBtn")
//     box[0].style.backgroundColor = 'purple'
//     box[1].style.backgroundColor = 'purple'
//     box[2].style.backgroundColor = 'purple'
//     box[3].style.backgroundColor = 'purple'
// })

// document.querySelector(".deleteBtn").addEventListener("click", function() {
//     document.querySelector(".box").classList.remove(".changeBtn")
//     box[0].style.backgroundColor = ''
//     box[1].style.backgroundColor = ''
//     box[2].style.backgroundColor = ''
//     box[3].style.backgroundColor = ''
// })

document.querySelector('.changeBtn').addEventListener("click", function() {
    document.querySelector(".box").classList.toggle('.deleteBtn')
    
})