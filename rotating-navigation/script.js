const open = document.querySelector('#open');
const close = document.querySelector('#close');
const circle = document.querySelector('.circle');
const container = document.querySelector('.container');
const nav = document.querySelector('nav');


open.addEventListener('click', (event) => {
  circle.classList.add('rotate');
  container.classList.add('show-nav');
  nav.classList.add('active');
})



close.addEventListener('click', (event) => {
  circle.classList.remove('rotate')
  container.classList.remove('show-nav');
  nav.classList.remove('active');
})

