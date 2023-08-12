import Swiper from '../../../node_modules/swiper'
import { Pagination } from '../../../node_modules/swiper/modules'
Swiper.use({ Pagination })

export function addSwiper() {
  const width = window.innerWidth

  if (width < 768) {
    const sliders = document.querySelectorAll('.swiper')

    sliders.forEach((el) => {
      let mySwiper = new Swiper(el, {
        modules: [Pagination],

        loop: true,
        pagination: {
          el: el.querySelector('.swiper-pagination'),
          type: 'bullets',
          clickable: true
        },

        slidesPerView: 'auto',

        //spaceBetween: 16,

        breakpoints: {
          768: {
            initialSlide: 0,
            spaceBetween: 0,
            enabled: false
          }
        }
      })

      window.addEventListener('resize', () => {
        mySwiper.update()
      })
    })
  }
}
