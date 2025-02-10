document.addEventListener('DOMContentLoaded', function () {
  const callPanel = document.getElementById('callPanel')
  const overlay_call = document.getElementById('overlay_call')
  const closeButton = document.getElementById('closeButton1')
  const call_panel = document.querySelector('.call-panel')
  const callButton = document.querySelector(
    '.sitebar__header-menu-button--search'
  )

  function openPanel() {
    callPanel.classList.add('active')
    overlay_call.classList.add('active')
    closeButton.classList.add('visible')
    call_panel.style.boxShadow = '-2px 0 10px rgba(0, 0, 0, 0.2)'
  }

  function closePanel() {
    callPanel.classList.remove('active')
    overlay_call.classList.remove('active')
    closeButton.classList.remove('visible')
    call_panel.style.boxShadow = 'none'
  }

  // Открытие панели по нажатию на кнопку вызова
  callButton.addEventListener('click', openPanel)

  // Закрытие панели по нажатию на крестик или затемненную область
  closeButton.addEventListener('click', closePanel)
  overlay_call.addEventListener('click', closePanel)
})
