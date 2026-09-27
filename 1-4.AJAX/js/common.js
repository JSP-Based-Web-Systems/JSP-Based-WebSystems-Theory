const postList =
    document.querySelector('#post-list');

const statusMessage =
    document.querySelector('#status');

function renderPosts(posts) {
    postList.replaceChildren();

    posts.slice(0, 5).forEach((post) => {
        const article =
            document.createElement('article');

        const title =
            document.createElement('h2');

        const body =
            document.createElement('p');

        title.textContent = post.title;
        body.textContent = post.body;

        article.append(title, body);
        postList.append(article);
    });

    statusMessage.textContent =
        `${Math.min(posts.length, 5)} posts loaded.`;
}