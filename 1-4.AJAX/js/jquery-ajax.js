function loadPostsWithJQuery() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        dataType: 'json',

        success: function (posts) {
            renderPosts(posts);
        },

        error: function (xhr) {
            statusMessage.textContent =
                `Request failed: ${xhr.status}`;
        }
    });
}

loadPostsWithJQuery();