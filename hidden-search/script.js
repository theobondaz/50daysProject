const search = document.querySelector('#search');
const input = document.querySelector('input');
const button = document.querySelector('button')
const hiddenSearch = document.querySelector('.hidden-search');



search.addEventListener('click', () => {
  input.classList.toggle('active');
  button.classList.toggle('stick-right');
  button.classList.add('border-three');
  hiddenSearch.classList.remove('border-yellow');
  input.focus();
  search.classList.add('backlayer');

})


input.addEventListener('focus', () => {
  hiddenSearch.classList.toggle('border-yellow')

  // button.classList.toggle('border-three')
})

input.addEventListener('blur', () => {
  input.classList.remove('active');
  button.classList.remove('stick-right');
  button.classList.remove('border-three');
  search.classList.remove('backlayer');
  hiddenSearch.classList.remove('border-yellow')

})
