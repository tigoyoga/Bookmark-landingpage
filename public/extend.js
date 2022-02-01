const touchArea = document.querySelector('.touche');
const headerEl = document.querySelector('.question');

touchArea.addEventListener('click', function () {
  headerEl.classList.toggle('open');
});

const touchArea1 = document.querySelector('.touche1');
const headerEl1 = document.querySelector('.question1');

touchArea1.addEventListener('click', function () {
  headerEl1.classList.toggle('open');
});

const touchArea2 = document.querySelector('.touche2');
const headerEl2 = document.querySelector('.question2');

touchArea2.addEventListener('click', function () {
  headerEl2.classList.toggle('open');
});

const touchArea3 = document.querySelector('.touche3');
const headerEl3 = document.querySelector('.question3');

touchArea3.addEventListener('click', function () {
  headerEl3.classList.toggle('open');
});

touchArea.addEventListener('click', function () {
  headerEl1.classList.remove('open');
  headerEl2.classList.remove('open');
  headerEl3.classList.remove('open');
});

touchArea1.addEventListener('click', function () {
  headerEl.classList.remove('open');
  headerEl2.classList.remove('open');
  headerEl3.classList.remove('open');
});

touchArea2.addEventListener('click', function () {
  headerEl.classList.remove('open');
  headerEl1.classList.remove('open');
  headerEl3.classList.remove('open');
});

touchArea3.addEventListener('click', function () {
  headerEl.classList.remove('open');
  headerEl1.classList.remove('open');
  headerEl2.classList.remove('open');
});
