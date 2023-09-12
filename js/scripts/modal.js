const btnmodal = document.querySelector('.btn-show-modal');
const btnfecharmodal = document.querySelector('.fechar-modal');
const overlay = document.querySelector('.overlay');

function onofmodal() {
  const html = document.documentElement;
  html.classList.toggle('show-modal');
  formFeed.reset();
}

btnmodal.addEventListener('click', () => {
  onofmodal();
});

btnfecharmodal.addEventListener('click', () => {
  onofmodal();
});

overlay.addEventListener('click', () => {
  onofmodal();
});
