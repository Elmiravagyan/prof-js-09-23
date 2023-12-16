let container = document.getElementById('container')
function fetchData(url) {
    return fetch(url)
      .then(res => {
       return res.json();
      })
      .then(res => {
        return res;
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }

  let data = fetchData('https://harvardartmuseums.org/browse');
  
data.then((data) => {
  console.log(data.records);
    data.records.forEach((element, index) => {
        let artworkItem = document.createElement('div');
        artworkItem.classList.add('artwork-item');

        let image = document.createElement('img');
        image.src = element.images[0].baseimageurl;
        image.alt = element.title;
        image.classList.add('artwork-image');

        let title = document.createElement('h3');
        title.textContent = element.title;

        let copyright = document.createElement('p');
        copyright.textContent = `Copyright: ${element.copyright}`;

        let division = document.createElement('p');
        division.textContent = `Division: ${element.division}`;

        artworkItem.appendChild(image);
        artworkItem.appendChild(title);
        artworkItem.appendChild(copyright);
        artworkItem.appendChild(division);

        container.appendChild(artworkItem);
    });
});


