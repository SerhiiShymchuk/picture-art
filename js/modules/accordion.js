const accordion = (triggers, /*elements*/) => {
    const btns = document.querySelectorAll(triggers)
    
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            this.classList.toggle('active-style')
            this.nextElementSibling.classList.toggle('active-content')

            if (this.classList.contains('active-style')) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px'
            } else {
                this.nextElementSibling.style.maxHeight = '0px'
            }
        })
    })
    
    // реалізація акордеона за допомогою класів цсс
    // const blocks = document.querySelectorAll(elements)
    // blocks.forEach(block => block.classList.add('animated', 'fadeInDown'))
    // btns.forEach(btn => {
    //     btn.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(bnt => btn.classList.remove('active', 'active-style'))
    //             this.classList.add('active', 'active-style')
    //         }
    //     })
    // })
}

export default accordion