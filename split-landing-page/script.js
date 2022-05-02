const ps5 = document.querySelector('.ps5');
const xbox = document.querySelector('.xbox');


ps5.addEventListener('mouseover', (event) => {
  // increaseWidth(event.currentTarget);
  ps5.classList.add('active');
  xbox.classList.remove('active');
})

xbox.addEventListener('mouseover', (event) => {
  // increaseWidth(event.currentTarget);
  xbox.classList.add('active');
  ps5.classList.remove('active');
})




// function increaseWidth(e) {
//   e.classList.toggle('active')
// }


