document.addEventListener('DOMContentLoaded', function () {
  const feedbackPanel = document.getElementById('feedbackPanel')
  const overlay_feedback = document.getElementById('overlay_feedback')
  const closeButton = document.getElementById('closeButton')
  const feedback_panel = document.querySelector('.feedback-panel')
  const callButton = document.querySelector(
    '.sitebar__main-menu-footer-button--call'
  )

  function openPanel() {
    feedbackPanel.classList.add('active')
    overlay_feedback.classList.add('active')
    closeButton.classList.add('visible')
    feedback_panel.style.boxShadow = '-2px 0 10px rgba(0, 0, 0, 0.2)'
  }

  function closePanel() {
    feedbackPanel.classList.remove('active')
    overlay_feedback.classList.remove('active')
    closeButton.classList.remove('visible')
    feedback_panel.style.boxShadow = 'none'
  }

  // Открытие панели по нажатию на кнопку вызова
  callButton.addEventListener('click', openPanel)

  // Закрытие панели по нажатию на крестик или затемненную область
  closeButton.addEventListener('click', closePanel)
  overlay_feedback.addEventListener('click', closePanel)
})
