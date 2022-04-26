const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', (event) => {
    // rajouter la classe active à l'élément
    removeActive();
    event.currentTarget.classList.add('active');
  })
})



const removeActive = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}


