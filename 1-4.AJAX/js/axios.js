async function loadPostsWithAxios() {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );

        renderPosts(response.data);
    } catch (error) {
        console.error(error);

        statusMessage.textContent =
            'Failed to load posts.';
    }
}

loadPostsWithAxios();