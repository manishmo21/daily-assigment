function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}

function renderData() {
    fetchData('https://jsonplaceholder.typicode.com/users')
        .then(usersData => {
            const usersElement = document.getElementById('users');
            usersElement.innerHTML = '<h2>Users</h2>' + formatList(usersData.slice(0, 10));
        });

    fetchData('https://jsonplaceholder.typicode.com/posts')
        .then(postsData => {
            const postsElement = document.getElementById('posts');
            postsElement.innerHTML = '<h2>Posts</h2>' + formatList(postsData.slice(0, 10));
        });

    fetchData('https://jsonplaceholder.typicode.com/todos')
        .then(todosData => {
            const todosElement = document.getElementById('todos');
            todosElement.innerHTML = '<h2>Todos</h2>' + formatList(todosData.slice(0, 10));
        });
}

function formatList(data) {
    const items = data.map(item => `<li>${JSON.stringify(item)}</li>`).join('');
    return `<ul>${items}</ul>`;
}

renderData();