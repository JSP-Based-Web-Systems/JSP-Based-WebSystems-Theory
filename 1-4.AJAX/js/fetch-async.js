async function loadPosts() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }

        const posts = await response.json();

        renderPosts(posts);
    } catch (error) {
        console.error(error);

        statusMessage.textContent =
            'Failed to load posts.';
    }
}

loadPosts();