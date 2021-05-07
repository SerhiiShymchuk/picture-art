import modal from './modules/modals.js'
import slider from './modules/slider.js'
import forms from './modules/forms.js'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    
    modal()
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn')
    slider('.main-slider-item', 'vertical')
    forms()
})