document.querySelectorAll('.see_all').forEach((button) => {
  const parentBlock = button.closest('.slider')
  const hide = button.querySelector('.hide')
  const img = button.querySelector('img')
  const hiddenElements = parentBlock.querySelectorAll('.slider__item--hidden')

  button.addEventListener('click', function () {
    button.classList.toggle('active')

    if (button.classList.contains('active')) {
      hide.textContent = 'Скрыть'
      img.src = '../img/expand_up.png'
      hiddenElements.forEach((element) =>
        element.classList.remove('slider__item--hidden')
      )
    } else {
      hide.textContent = 'Показать все'
      img.src = '../img/expand.png'
      hiddenElements.forEach((element) =>
        element.classList.add('slider__item--hidden')
      )
    }
  })
})
