document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.header__menu-button--burger')
  const closeBtn = document.querySelector(
    '.sitebar__header-menu-button--cancel'
  )
  const sitebar = document.querySelector('.sitebar')
  const overlay = document.createElement('div')

  overlay.classList.add('overlay')
  document.body.appendChild(overlay)

  function openMenu() {
    sitebar.classList.add('active')
    overlay.classList.add('active')
    document.body.style.overflow = 'hidden' // Запрет скролла
  }

  function closeMenu() {
    sitebar.classList.remove('active')
    overlay.classList.remove('active')
    document.body.style.overflow = ''
  }

  burger.addEventListener('click', openMenu)
  closeBtn.addEventListener('click', closeMenu)
  overlay.addEventListener('click', closeMenu)
})
