const clickMeButton = document.getElementById('clickMeButton');
const doubleClickMeButton = document.getElementById('doubleClickMeButton');

let clickCount = 0;
let doubleClickCount = 0;

clickMeButton.addEventListener('click', () => {
    if (clickCount % 2 === 0) {
        clickMeButton.textContent = 'Clicked!';
        clickMeButton.style.backgroundColor = 'green';
    } else {
        clickMeButton.textContent = 'Click Me';
        clickMeButton.style.backgroundColor = '';
    }
    clickCount++;
});

doubleClickMeButton.addEventListener('dblclick', () => {
    if (doubleClickCount % 2 === 0) {
        doubleClickMeButton.textContent = 'Double Clicked!';
        doubleClickMeButton.style.backgroundColor = 'pink';
    } else {
        doubleClickMeButton.textContent = 'Double Click Me';
        doubleClickMeButton.style.backgroundColor = '';
    }
    doubleClickCount++;
});
