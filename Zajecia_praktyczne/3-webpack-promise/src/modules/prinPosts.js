function prinPosts(posts, container) {
  let htmlMarkup = "";
  posts.forEach((post) => {
    htmlMarkup += `
            <article class="article">
                <h2 class="title">${post.id}: ${post.title}</h2>
                <p class="body">${post.body}</p>
            </article>
        `;
  });
  container.innerHTML = `<div class="list">${htmlMarkup}</div>`;
}

export default prinPosts;
