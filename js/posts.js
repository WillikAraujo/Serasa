document.addEventListener('DOMContentLoaded', function () {
  const url = 'https://64ff93fef8b9eeca9e2a4783.mockapi.io/feedback/feedback';
  const loadingElement = document.getElementById('loading');
  const postsFeedback = document.getElementById('posts-feedback');

  async function getAllPosts() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      loadingElement.classList.add('hide');

      const lastFivePosts = data.slice(-3);
      const notFoundFb = document.querySelector('.not-found-fb');

      if (lastFivePosts == 0) {
        notFoundFb.style.display = 'block';
      }

      lastFivePosts.forEach((post) => {
        const div = document.createElement('div');
        const name = document.createElement('strong');
        const comment = document.createElement('p');
        const rating = document.createElement('div');

        div.classList.add('cards');
        name.innerText = `${post.nome}`;
        comment.innerText = `${post.comentario}`;

        rating.className = 'rating-container';

        for (let i = 1; i <= 5; i++) {
          const star = document.createElement('span');
          star.className = 'star';
          star.innerText = '\u2605';

          if (i > post.rating) {
            star.classList.add('unfilled');
          }

          rating.appendChild(star);
        }

        div.appendChild(name);
        div.appendChild(comment);
        div.appendChild(rating);

        postsFeedback.appendChild(div);
      });
    } catch (error) {
      console.error('Erro ao buscar os posts:', error);
    }
  }

  getAllPosts();
});
