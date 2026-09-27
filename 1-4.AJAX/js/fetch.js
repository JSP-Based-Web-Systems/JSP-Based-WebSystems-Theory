function loadPostsWithFetch() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `HTTP Error: ${response.status}`
                );
            }

            return response.json();
        })
        .then((posts) => {
            renderPosts(posts);
        })
        .catch((error) => {
            console.error(error);

            statusMessage.textContent =
                'Failed to load posts.';
        });
}

loadPostsWithFetch();