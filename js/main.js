import modal from './modules/modals.js'
import slider from './modules/slider.js'
import forms from './modules/forms.js'
import mask from './modules/maskTelephone.js'
import checkTextInputs from './modules/checkTextInputs.js'
import showMoreStyles from './modules/showMoreStyles.js'
import calc from './modules/calc.js'
import filter from './modules/filter.js'
import pictureSize from './modules/pictureSize.js'
import accordion from './modules/accordion.js'
import burger from './modules/burger.js'
import scrolling from './modules/scrolling.js'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    
    modal()
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn')
    slider('.main-slider-item', 'vertical')
    forms()
    mask('[name="phone"]')
    checkTextInputs('[name="name"]')
    checkTextInputs('[name="message"]')
    showMoreStyles('.button-styles', '#styles .row')
    calc('#size', '#material', '#options', '.promocode', '.calc-price')
    filter()
    pictureSize('.sizes-block')
    accordion('.accordion-heading', /*'.accordion-block'*/)
    burger('.burger-menu', '.burger')
    scrolling('.pageup')
})