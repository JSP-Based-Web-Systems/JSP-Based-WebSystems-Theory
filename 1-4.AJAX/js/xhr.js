function loadPostsWithXHR() {
    const xhr = new XMLHttpRequest();

    xhr.open(
        'GET',
        'https://jsonplaceholder.typicode.com/posts'
    );

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const posts =
                JSON.parse(xhr.responseText);

            renderPosts(posts);
            return;
        }

        statusMessage.textContent =
            `Request failed: ${xhr.status}`;
    };

    xhr.onerror = function () {
        statusMessage.textContent =
            'Unable to communicate with the server.';
    };

    xhr.send();
}

loadPostsWithXHR();