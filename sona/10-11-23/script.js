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

let emoji = document.createElement("span");
emoji.textContent = "😊";
changebtn.addEventListener("click", () => {
    let children = [...text.children];
    console.log(children);
    children.forEach((item, index) => {
        if(item.localName === "p") {
           text.replaceChild(, emoji)
            // text.removeChild(item);
            // text.appendChild(emoji);
        }
    });
    console.log([...text.children])
    // let paragraphs = children.filter(item => item.localName === "p");
    // console.log(paragraphs);
    // paragraphs.forEach(para => )
})