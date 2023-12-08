// Use this endpoint to fetch the data
// Drow posts and add a search bar; when a user enters a name, just filter the matching posts.

function fetchPosts() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function searchPosts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';

    fetchPosts()
        .then(posts => {
            const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchInput));

            filteredPosts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');
                postDiv.innerHTML = `<p><strong>${post.title}:</strong> ${post.body}</p>`;
                postsContainer.appendChild(postDiv);
            });
        })
        .catch(error => console.error('Error:', error));
}


document.addEventListener('DOMContentLoaded', () => {
    searchPosts();
});

