document.querySelectorAll('.see_all').forEach((button) => {
  const parentBlock = button.closest('.slider') // Находим родительский блок
  const hide = button.querySelector('.hide') // Находим .hide внутри кнопки
  const img = button.querySelector('img') // Находим изображение внутри кнопки
  const hiddenElements = parentBlock.querySelectorAll('.slider__item--hidden') // Находим скрытые элементы

  button.addEventListener('click', function () {
    button.classList.toggle('active') // Переключаем класс активности

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
