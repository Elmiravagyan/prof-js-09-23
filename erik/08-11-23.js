let input = document.querySelector('input');
let btn = document.querySelector('.addBtn');
let list = document.querySelector('ul')


function createTask(text) {
    let li = document.createElement("li");
    li.textContent = text;
    return li;
  }
  
btn.addEventListener("click", () => {
    let text = input.value;
    let task = createTask(text);
    if (input.value.length > 0) {
      list.appendChild(task);
      input.value = "";
    }
  });

  

  