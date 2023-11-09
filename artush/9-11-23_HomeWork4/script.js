let clickButton = document.getElementById('clickButton')
let doubleClickButton = document.getElementById('doubleClickButton')

function toggleForClickBtn(){
    if(clickButton.innerText === 'Click me'){
        clickButton.innerText = 'Clicked!'
        clickButton.style.backgroundColor = 'green'
        clickButton.style.width = '200px'
    }else{
        clickButton.innerText = 'Click me'
        clickButton.style.backgroundColor = ''
        clickButton.style.width = ''
    }
}

clickButton.addEventListener('click' , toggleForClickBtn)

function toggleForClickDblClickBtn(){
    if(doubleClickButton.innerText === 'Double Click'){
        doubleClickButton.innerText = 'Double Clicked!'
        doubleClickButton.style.backgroundColor = 'pink'
        doubleClickButton.style.width = '200px'
    }else{
        doubleClickButton.innerText = 'Double Click'
        doubleClickButton.style.backgroundColor = ''
        doubleClickButton.style.width = ''
    }
}

doubleClickButton.addEventListener('dblclick' , toggleForClickDblClickBtn)

let TagP = [...document.getElementsByTagName('p')]
TagP.forEach((p) => {
    p.innerText = '😊'
})
