const input = document.getElementById('input');
const button = document.getElementById('add-todo');
const container = document.getElementById('todo-container');
let id = 1;

const createIcon = (customClass, id) => {
    const icon = document.createElement('i');
    icon.classList.add('fa', customClass);
    icon.setAttribute('aria-hidden', 'true');
    icon.setAttribute('id', `${id}`);
    return icon;
}

const createButton = (id, icon) => {
    const button = document.createElement('button');
    button.appendChild(icon);
    button.classList.add('btn');
    button.setAttribute('id', `${id}`);
    return button;
}

const setupEditMode = (text) => {
    const div = document.createElement('div');
    div.classList.add('edit-mode');

    const input = document.createElement('input');
    input.value = text;

    const checkIcon = createIcon('fa-check', 'check-icon');
    const checkButton = createButton('check-btn', checkIcon);

    const cancelIcon = createIcon('fa-times', 'cancel-icon');
    const cancelButton = createButton('cancel-btn', cancelIcon)

    div.append(input, checkButton, cancelButton);
    return div;
}
const createTodo = (todoText) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const textDiv = document.createElement('div');
    const buttonsDiv = document.createElement('div');

    const editIcon = createIcon('fa-edit', 'edit-icon');
    const editButton = createButton('edit', editIcon);

    const deleteIcon = createIcon('fa-trash', 'delete-icon');
    const deleteButton = createButton('delete', deleteIcon);

    buttonsDiv.append(editButton, deleteButton);
    textDiv.setAttribute('id', 'todo-text');
    textDiv.innerText = todoText;

    todo.append(textDiv, buttonsDiv);
    todo.setAttribute('id', `${id}`);
    id++;
    return todo;
}
button.addEventListener('click', () => {
    let todo = createTodo(input.value);
    container.append(todo);
    input.value = '';
})

container.addEventListener('click', (event) => {
    // console.log('Log ::: event.target ===', event.target);

    //Mark as done
    if(event.target.id === 'todo-text') {
        event.target.classList.toggle('done');
    }

    // Delete
    if(event.target.id.includes('delete')) {
        console.log(event.target);
        if(event.target.id === 'delete') {
            event.target.parentNode.parentNode.remove()
        } else if(event.target.id === 'delete-icon') {
            event.target.parentNode.parentNode.parentNode.remove()
        }
    }

    //Edit
    if(event.target.id.includes('edit')) {
        console.log('Log ::: edit ===', event.target);
        let text = event.target.parentElement.previousElementSibling.innerText;
        console.log('Log ::: text ===', text)
        let edit = setupEditMode(text);
        console.log('Log ::: edit ===', edit);
        console.log('Log ::: event.target.parentElement ===', event.target.parentElement)
        event.target.parentElement.previousElementSibling.remove();
        event.target.parentElement.append(edit);
    }

})