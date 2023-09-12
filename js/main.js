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

document.addEventListener('DOMContentLoaded', function () {
  const formFeed = document.getElementById('feedback-form');
  const ratingFeed = document.querySelector('.rating');
  const nomeFeed = document.getElementById('nome');
  const comentarioFeed = document.getElementById('comentario');
  const loadingSpinner = document.getElementById('loading-spinner');
  const textMain = document.querySelector('.feed-text');
  const textSucess = document.querySelector('.text-sucess');
  const titleSucess = document.querySelector('.title-sucess');
  const btnmodal = document.querySelector('.btn-show-modal');
  const html = document.documentElement;

  function toggleModal() {
    html.classList.toggle('show-modal');
    formFeed.reset();
  }

  function sucessMock() {
    btnmodal.style.display = 'none';
    textMain.style.display = 'none';
    textSucess.style.display = 'block';
    titleSucess.style.display = 'block';
  }

  function mostrarSpinner() {
    loadingSpinner.classList.add('active');
  }

  function ocultarSpinner() {
    loadingSpinner.classList.remove('active');
  }

  async function postFeedback(comment) {
    mostrarSpinner();

    try {
      const response = await fetch(
        'https://64ff93fef8b9eeca9e2a4783.mockapi.io/feedback/feedback',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(comment),
        },
      );

      if (response.ok) {
        sucessMock();
        toggleModal();
      } else {
        console.error('Erro ao enviar o feedback:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar o feedback:', error);
    } finally {
      ocultarSpinner();
    }
  }

  formFeed.addEventListener('submit', (e) => {
    e.preventDefault();

    let ratingValue;
    const ratingInputs = ratingFeed.querySelectorAll('input[type="radio"]');

    ratingInputs.forEach((input) => {
      if (input.checked) {
        ratingValue = input.value;
      }
    });

    let comment = {
      rating: ratingValue,
      nome: nomeFeed.value,
      comentario: comentarioFeed.value,
    };

    postFeedback(comment);
  });
});
