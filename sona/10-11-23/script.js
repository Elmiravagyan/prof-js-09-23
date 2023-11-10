//task 1
let clickbtn = document.getElementById("clickButton");
let doublebtn = document.getElementById("doubleClickButton");

let firstclick = true;
clickbtn.addEventListener("click", () => {
   if(firstclick) {
    clickbtn.innerText = "Clicked!";
    clickbtn.classList.add("greenbg")
    firstclick = false;
   } else {
    clickbtn.innerText = "Click Me";
    clickbtn.classList.remove("greenbg");
    firstclick = true;
   };
});

let firstdblclick = true;
doublebtn.addEventListener("dblclick", () => {
    if(firstdblclick) {
        doublebtn.innerText = "Double Clicked!";
        doublebtn.classList.add("pinkbg");
        firstdblclick = false;
    } else {
        doublebtn.innerText = "Double Click Me";
        doublebtn.classList.remove("pinkbg");
        firstdblclick = true;
    };
});

//task 2

let text = document.getElementById("content");
let changebtn = document.getElementById("changeText");

changebtn.addEventListener("click", () => {
    let children = [...text.children];
    children.forEach((item) => {
        if(item.localName === "p") {
            item.replaceWith("😊")
        };
    });
})