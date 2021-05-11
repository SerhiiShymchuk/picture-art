import modal from './modules/modals.js'
import slider from './modules/slider.js'
import forms from './modules/forms.js'
import mask from './modules/maskTelephone.js'
import checkTextInputs from './modules/checkTextInputs.js'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    
    modal()
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn')
    slider('.main-slider-item', 'vertical')
    forms()
    mask('[name="phone"]')
    checkTextInputs('[name="name"]')
    checkTextInputs('[name="message"]')
})