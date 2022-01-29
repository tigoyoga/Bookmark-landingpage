const touchArea = document.querySelector('.touche');
const headerEl = document.querySelector('.question');

touchArea.addEventListener('click', function () {
  headerEl.classList.toggle('open');
});
