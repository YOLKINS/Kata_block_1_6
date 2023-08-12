class TextUtils {
  constructor() {
    this.config = {
      isOpen: false,
      'S': {
        size: 320,
        amount: 1
      },
      'M': {
        size: 768,
        amount: 2
      },
      'L': {
        size: 1366,
        amount: 3
      }
    }

    this.texts = Array.from(
      document.querySelector('.aboutUs').querySelectorAll('.aboutUs__text')
    )
    this.btn = document.getElementById('show__text')
    this.btnText = document.querySelector('.open__text')
    this.btnArrow = document.querySelector('.open__arrow')

    this.addListeners()
  }

  displayOnResize(amountOfTexts) {
    if (this.config.isOpen) {
      return
    }
    let hideIterations = this.texts.length - amountOfTexts
    let counter = hideIterations

    let textsCopy = this.texts.slice()
    this.displayAll(textsCopy)

    textsCopy.reverse().forEach((text) => {
      if (counter <= 0) {
        return
      }
      text.classList.add('hidden')
      counter--
    })

    this.texts = textsCopy.reverse()
  }

  displayAll(texts) {
    texts.forEach((text) => {
      text.classList.remove('hidden')
    })
  }

  addListeners() {
    window.addEventListener('resize', () => {
      this.triggerResizeText()
    })

    this.btn.addEventListener('click', () => {
      this.handleClick()
    })
  }

  handleClick() {
    if (this.config.isOpen === false) {
      this.displayAll(this.texts)
      this.btnText.textContent = 'Скрыть'
      this.btnArrow.classList.add('open__arrow_active')
      this.setOpen()
      return
    }

    if (this.config.isOpen === true) {
      this.setClose()
      this.triggerResizeText()
      this.btnText.textContent = 'Показать все'
      this.btnArrow.classList.remove('open__arrow_active')
      return
    }
  }

  triggerResizeText() {
    const width = window.innerWidth
    if (width >= this.config.L.size) {
      this.displayOnResize(this.config.L.amount)
    } else if (width >= this.config.M.size) {
      this.displayOnResize(this.config.M.amount)
    } else if (width < this.config.M.size) {
      this.displayOnResize(this.config.S.amount)
    }
  }

  setOpen() {
    this.config.isOpen = true
  }

  setClose() {
    this.config.isOpen = false
  }
}
export const textUtils = new TextUtils()
