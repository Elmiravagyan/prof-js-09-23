
import { generateStudents } from './utils/markup.js';
import { users } from './users.js';

const studentsContainer = document.getElementById('students');

// Create markup for students
generateStudents(studentsContainer);

let searchInput = document.getElementById('search');
let searchBtn = document.getElementById('search-btn');

console.log('Log ::: searchInput ===', searchInput)

searchBtn.addEventListener('click', () => {
    let filtered = users.filter(item => item.name.toLowerCase().includes(searchInput.value.toLowerCase()));
    studentsContainer.innerText = '';
    generateStudents(studentsContainer, filtered);
})




