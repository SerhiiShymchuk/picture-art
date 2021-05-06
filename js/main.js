import modal from './modules/modals.js'
import slider from './modules/slider.js'

window.addEventListener('DOMContentLoaded', () => {
    'use strict'
    
    modal()
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn')
    slider('.main-slider-item', 'vertical')
})