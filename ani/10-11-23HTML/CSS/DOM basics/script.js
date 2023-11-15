// 1.

let clickMe = document.getElementById('clickButton')
let doubleClickMe = document.getElementById('doubleClickButton')
let content = document.getElementById('content')
let changeP = document.getElementById('changeP')

clickMe.addEventListener('click', () => {
    if (clickMe.innerText === 'Click Me') {
        clickMe.innerText = 'Clicked!';
    } else {
        clickMe.innerText = 'Click Me';
    }
    clickMe.classList.toggle('clicked');
});

doubleClickMe.addEventListener('dblclick', () => {
    if (doubleClickMe.innerText === 'Double Click Me') {
        doubleClickMe.innerText = 'Double Clicked!';
    } else {
        doubleClickMe.innerText = 'Double Click Me';
    }
    doubleClickMe.classList.toggle('doubleclicked');
});


// 2. 

changeP.addEventListener('click', () => {
    
    let content = document.getElementById('content')
    
    if (!content.originalContent) {
        content.originalContent = [
            content.childNodes[1].childNodes[0].data,
            content.childNodes[3].childNodes[0].data,
            content.childNodes[5].childNodes[0].data,
            content.childNodes[7].childNodes[0].data
        ];
    }

    if (content.childNodes[1].childNodes[0].data === '☺️') {
      
        content.childNodes[1].childNodes[0].data = content.originalContent[0];
        content.childNodes[3].childNodes[0].data = content.originalContent[1];
        content.childNodes[5].childNodes[0].data = content.originalContent[2];
        content.childNodes[7].childNodes[0].data = content.originalContent[3];
    } else {
      
        content.childNodes[1].childNodes[0].data = '☺️';
        content.childNodes[3].childNodes[0].data = '☺️';
        content.childNodes[5].childNodes[0].data = '☺️';
        content.childNodes[7].childNodes[0].data = '☺️';
    }
});
   



