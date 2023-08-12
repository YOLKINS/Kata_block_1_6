import '../scss/style.scss'

import { addHeaderElement } from './scripts/headerElementUp'
import { textUtils } from './scripts/textOpen'
import { devicesUtils } from './scripts/devicesOpen'
import { brandsUtils } from './scripts/brandsOpen'
import { scrollController, modalController } from './scripts/popup'
import { addSwiper } from './scripts/myswiper'

addHeaderElement()

textUtils.triggerResizeText()
brandsUtils.triggerResizeBrands()
devicesUtils.triggerResizeDevices()

modalController({
  modal: '.modal-sidebar',
  btnOpen: '.burger-open',
  btnClose: '.burger-close'
})

modalController({
  modal: '.modal-chat',
  btnOpen: '.button-chat',
  btnClose: '.burger-close'
})

modalController({
  modal: '.modal-call',
  btnOpen: '.button-call',
  btnClose: '.burger-close'
})

addSwiper()
