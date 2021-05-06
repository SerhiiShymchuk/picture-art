const modal = () => {
    let btnPressed = false
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {

        const trigger = document.querySelectorAll(triggerSelector)
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)
        const windows = document.querySelectorAll('[data-modal]')
        //console.log(windows)

        trigger.forEach(selector => {
            selector.addEventListener('click', (e) => {
                if (e.target) e.preventDefault()
                btnPressed = true
                windows.forEach(window => {
                    if (destroy) selector.remove()
                    window.style.display = 'none'
                    // додаю анімацію для модальних вікон за допомогою ліби animate.css
                    window.classList.add('animated', 'fadeIn')
                })

                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
                //document.body.classList.add('modal-open')
            })
        })
        close.addEventListener('click', () => {
            windows.forEach(window => window.style.display = 'none')

            modal.style.display = 'none'
            document.body.style.overflow = ''
            //document.body.classList.remove('modal-open')
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(window => window.style.display = 'none')

                modal.style.display = 'none'
                document.body.style.overflow = ''
                //document.body.classList.remove('modal-open')
            }
        })
    }

    function showModalAfterTime(selector, time) {
        setTimeout(() => {
            let display //змінна для збереження браузерних стилів модальних вікон - дісплей
            //якщо модалка відкрита то іншу модалку що має відкритися через таймер - не показуєм
            document.querySelectorAll('[data-modal]').forEach(modal => {
                if (getComputedStyle(modal).display !== 'none') display = 'block'  
            })
            if (!display) {
                document.querySelector(selector).style.display = 'block'
                document.body.style.overflow = 'hidden'
            }
        }, time)
    }

    //функція для показу модалки коли користувач нічого не клікне і долистає до кінця сторінки 
    //шось функція не працює нормально без включеного девтулз
    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (document.documentElement.clientHeight + window.pageYOffset >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click()
            }
        })
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)
    openByScroll('.fixed-gift')

    //showModalAfterTime('.popup-consultation', 60000)

}
export default modal