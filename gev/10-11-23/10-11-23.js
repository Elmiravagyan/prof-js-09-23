const clickButton = document.getElementById('clickButton')
const doubleButton = document.getElementById('doubleClickButton')
let btnText = true

clickButton.addEventListener('click', () => {
    if (btnText) {
        clickButton.innerText = "Clicked!"
        btnText = false
    } else {
        clickButton.innerText = "Click Me"
        btnText = true
    }
    clickButton.classList.toggle("clickButtonchange")
})

doubleButton.addEventListener('dblclick', () => {
    if (btnText) {
        doubleButton.innerText = "Double Clicked!"
        btnText = false
    } else {
        doubleButton.innerText = "Double Click Me"
        btnText = true
    }
    doubleButton.classList.toggle("clickDoubleButtonchange")
})

const content = document.querySelectorAll("p")
swichButton.addEventListener('click', () => {
    content.forEach(item => item.innerText = "😊")
})

// TODO Ճիշտ էր բոլորը ապրես