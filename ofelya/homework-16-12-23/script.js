const container = document.getElementById('container');
const loadMoreBtn = document.getElementById('load-more-btn');
const divisionFilter = document.getElementById('divisionFilter')

let offset = 0;
const loadAmount = 30;


function fetchData(offset, limit) {
  fetch(`https://harvardartmuseums.org/browse`)
    .then(response => {
     return response.json();
    })
    .then(data => {
      displayDataGrid(data.records);
    });
}

function displayDataGrid(items) {
  items.forEach(item => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    if (item.primaryimageurl) {
      const image = document.createElement('img');
      image.src = item.primaryimageurl;
      image.alt = item.title;
      gridItem.appendChild(image);
    }

    const title = document.createElement('div');
    title.innerText = item.title;
    gridItem.appendChild(title);

    const copyright = document.createElement('div');
    copyright.innerText = item.copyright;
    gridItem.appendChild(copyright);

    const division = document.createElement('div');
    division.innerText = item.division;
    gridItem.appendChild(division);

    container.appendChild(gridItem);
  });
}

fetchData(offset, loadAmount);


loadMoreBtn.addEventListener('click', () => {
  offset += loadAmount;
  fetchData(offset, loadAmount);
});
divisionFilter.addEventListener('input', () => {
  const searchTerm = divisionFilter.value.trim().toLowerCase();
  const filteredData = allData.filter(item => item.division.toLowerCase().includes(searchTerm));
  displayDataGrid(filteredData);
});