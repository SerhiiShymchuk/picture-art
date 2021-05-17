const scrolling = (upSelector) => {
    const arrow = document.querySelector(upSelector)
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            arrow.classList.add('animated', 'fadeIn')
            arrow.classList.remove('fadeOut')
        } else {
            arrow.classList.add('fadeOut')
            arrow.classList.remove('fadeIn')
        }
    })
    //on animation request frame
    const links = document.querySelectorAll('[href^="#"]')
    const speed = 0.2

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault()
            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            requestAnimationFrame(step)

            function step(time) {
                if (start === null) start = time
                let progress = time - start 
                let r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock))
                document.documentElement.scrollTo(0, r)
                if (r != widthTop + toBlock) requestAnimationFrame(step)
                else location.hash = hash
            }
        })
    })

    //on vanilla js
    /*const body = document.body
    const element = document.documentElement

    const calcScroll = () => {
        arrow.addEventListener('click', function (e) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop)
            console.log(this)
            if (this.hash !== '') {
                e.preventDefault()
                let hashElement = document.querySelector(this.hash), 
                    hashElemenTop = 0
                while (hashElement.offsetparent) {
                    hashElemenTop += hashElement.offsetTop
                    hashElement = hashElement.offsetParent     
                }
                hashElemenTop = Math.round(hashElemenTop)
                smoothScroll(scrollTop, hashElemenTop, this.hash)
            }
        })
    }
    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            prevScrollTop,
            speed;
        if (to > from) speed = 30
        else speed = -30
        let move = setInterval(function () {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop)
            if (
                prevScrollTop === scrollTop || (to > from && scrollTop >= to ) || (to < from && scrollTop <= to )
            ) {
                clearInterval(move)
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash)
            } else {
                body.scrollTop += speed
                element.scrollTop += speed
                prevScrollTop = scrollTop
            }
        }, timeInterval);
    }
    calcScroll()*/
}

export default scrolling