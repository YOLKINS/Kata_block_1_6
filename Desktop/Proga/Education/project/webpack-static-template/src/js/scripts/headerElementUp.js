export function addHeaderElement() {
  const width = window.innerWidth
  const btnCall = document
    .querySelector('.header')
    .querySelector('.header__menu_right')
    .querySelector('.button-call')
  const btnChat = document
    .querySelector('.header')
    .querySelector('.header__menu_right')
    .querySelector('.button-chat')
  const btnProfile = document
    .querySelector('.header')
    .querySelector('.header__menu_right')
    .querySelector('.button-profile')
  const divider = document
    .querySelector('.header')
    .querySelector('.header__menu_left')
    .querySelector('.divider')
  function addRemoveHidden() {
    if (width >= 768 && width < 1366) {
      btnCall.classList.remove('hidden')
      btnChat.classList.remove('hidden')
      btnProfile.classList.remove('hidden')
      divider.classList.remove('hidden')
    } else {
      btnCall.classList.add('hidden')
      btnChat.classList.add('hidden')
      btnProfile.classList.add('hidden')
      divider.classList.add('hidden')
    }
  }
  addRemoveHidden()
}
