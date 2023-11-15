import { users as defaultUsers } from '../users.js';
const defaultAvatar = './assets/users/default.webp';
function createStudentItem(student) {
    const item = document.createElement('div');
    const top = document.createElement('div');
    const bottom = document.createElement('div');
    const fullName = document.createElement('div');
    const age = document.createElement('div');
    const image = document.createElement('img');

    fullName.innerText = `Full name: ${student.name} ${student.surname}`;
    age.innerText = `Age: ${student.age}`;

    image.setAttribute('src', student.imageUrl ? student.imageUrl : defaultAvatar);
    image.setAttribute('alt', student.name);
    image.classList.add('avatar');

    item.classList.add('student-item');

    top.classList.add('top')
    top.appendChild(image);
    bottom.append(fullName, age);

    item.append(top, bottom);

    return item;
}

function generateStudents(studentsContainer, users = defaultUsers) {
    let studentsMarkup = users.map(item => createStudentItem(item));
    studentsContainer.append(...studentsMarkup);
}

export { createStudentItem, generateStudents };