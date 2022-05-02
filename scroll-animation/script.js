const boxes = document.querySelectorAll('.box');


window.addEventListener('scroll', checkBoxes);

// checkBoxes()


function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 2;
  console.log(triggerBottom);

  boxes.forEach((box) => {
    const boxTop  = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      console.log(boxTop);
      box.classList.add('active')
    } else {
      // console.log(boxTop);
      box.classList.remove('active');
    }
  })

}
