document.addEventListener('DOMContentLoaded', function () {
  const formFeed = document.getElementById('feedback-form');
  const btnmodal = document.querySelector('.btn-show-modal');
  const btnfecharmodal = document.querySelector('.fechar-modal');
  const overlay = document.querySelector('.overlay');
  const html = document.documentElement;

  function toggleModal() {
    html.classList.toggle('show-modal');
    formFeed.reset();
  }

  btnmodal.addEventListener('click', toggleModal);
  btnfecharmodal.addEventListener('click', toggleModal);
  overlay.addEventListener('click', toggleModal);
});
