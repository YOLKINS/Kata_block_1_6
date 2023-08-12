export const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY
    const currentScroll = window.scrollY
    document.body.style.cssText = `
      overflow: hidden;
      top: -${currentScroll}px;
      left: 0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px
    `
    document.documentElement.style.scrollBehavior = 'unset'
  },
  enabledScroll() {
    document.body.style.cssText = ''
    window.scroll({ top: scrollController.scrollPosition })
    document.documentElement.style.scrollBehavior = ''
  }
}

export const modalController = ({ modal, btnOpen, btnClose, time = 150 }) => {
  const btnPopUpOpen = document.querySelectorAll(btnOpen)
  const modalPopUp = document.querySelector(modal)
  //const modalSidebarPopUp = document.querySelector(modalSidebar)

  modalPopUp.style.cssText = `
    display: none;
    visibility: hidden;
    z-index: 10;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out; 
  ` // это можно занести в стили

  const closeModal = (event) => {
    const target = event.target

    if (
      target === modalPopUp ||
      (btnClose && target.closest(btnClose)) ||
      event.code === 'Escape'
    ) {
      modalPopUp.style.opacity = 0

      setTimeout(() => {
        modalPopUp.style.display = 'none'
        modalPopUp.style.visibility = 'hidden'
        scrollController.enabledScroll()
      }, time)

      window.removeEventListener('keydown', closeModal)
    }
  }

  const openModal = () => {
    modalPopUp.style.display = 'flex' // и это стили
    modalPopUp.style.visibility = 'visible'
    modalPopUp.style.opacity = 1 // это тоже стили
    window.addEventListener('keydown', closeModal)
    scrollController.disabledScroll()
  }

  btnPopUpOpen.forEach((btn) => {
    btn.addEventListener('click', openModal)
  })

  modalPopUp.addEventListener('click', closeModal)
}
