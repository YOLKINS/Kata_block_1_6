class BrandsUtils {
  constructor() {
    this.config = {
      isOpen: false,
      'S': {
        size: 320,
        amount: 999
      },
      'M': {
        size: 768,
        amount: 6
      },
      'L': {
        size: 1366,
        amount: 8
      }
    }

    this.cards = Array.from(
      document.querySelector('.brands').querySelectorAll('.brands__card')
    )

    this.btn = document.getElementById('show__brands')
    this.btnText = this.btn.querySelector('.open__text')
    this.btnArrow = this.btn.querySelector('.open__arrow')

    this.addListeners()
  }

  displayOnResize(amountOfCards) {
    if (this.config.isOpen) {
      return
    }
    let hideIterations = this.cards.length - amountOfCards
    let counter = hideIterations

    let cardsCopy = this.cards.slice()
    this.displayAll(cardsCopy)

    cardsCopy.reverse().forEach((card) => {
      if (counter <= 0) {
        return
      }
      card.classList.add('hidden')
      counter--
    })

    this.cards = cardsCopy.reverse()
  }

  displayAll(cards) {
    cards.forEach((card) => {
      card.classList.remove('hidden')
    })
  }

  addListeners() {
    window.addEventListener('resize', () => {
      this.triggerResizeBrands()
    })

    this.btn.addEventListener('click', () => {
      this.handleClick()
    })
  }

  handleClick() {
    if (this.config.isOpen === false) {
      this.displayAll(this.cards)
      this.btnText.textContent = 'Скрыть'
      this.btnArrow.classList.add('open__arrow_active')
      this.setOpen()
      return
    }

    if (this.config.isOpen === true) {
      this.setClose()
      this.triggerResizeBrands()
      this.btnText.textContent = 'Показать все'
      this.btnArrow.classList.remove('open__arrow_active')
      return
    }
  }

  triggerResizeBrands() {
    const width = window.innerWidth
    if (width >= this.config.L.size) {
      this.displayOnResize(this.config.L.amount)
    } else if (width >= this.config.M.size) {
      this.displayOnResize(this.config.M.amount)
    } else if (width < this.config.M.size) {
      this.displayAll(this.cards)
    }
  }

  setOpen() {
    this.config.isOpen = true
  }

  setClose() {
    this.config.isOpen = false
  }
}
export const brandsUtils = new BrandsUtils()
