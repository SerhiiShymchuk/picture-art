const slider = (sliedeSelectors, direction, prev, next) => {
    let sliderIndex = 1,
        pause = false
    const slides = document.querySelectorAll(sliedeSelectors)

    function showSlide(num) {
        if (num > slides.length) sliderIndex = 1
        if (num < 1) sliderIndex = slides.length
        slides.forEach(slide => {
            slide.classList.add('animated')
            slide.style.display = 'none'
        })
        slides[sliderIndex-1].style.display = 'block'
    }
    function changeSlide(n) {
        showSlide(sliderIndex += n)
    }

    showSlide(sliderIndex)

    try {
        const prevBtn = document.querySelector(prev)
        const nextBtn = document.querySelector(next)
        prevBtn.addEventListener('click', () => {
            changeSlide(-1)
            slides[sliderIndex-1].classList.remove('slideInleft')
            slides[sliderIndex-1].classList.add('slideInRight')
        })
        nextBtn.addEventListener('click', () => {
            changeSlide(1)
            slides[sliderIndex-1].classList.remove('slideInRight')
            slides[sliderIndex-1].classList.add('slideInleft')
        })
    } catch (error) {
        console.log(error)
    }

    function activateAnimation() {
        if (direction === 'vertical') {
            pause = setInterval(() => {
                changeSlide(1)
                slides[sliderIndex-1].classList.add('slideInDown')
            }, 3000);
        } else {
            pause = setInterval(() => {
                changeSlide(1)
                slides[sliderIndex-1].classList.remove('slideInleft')
                slides[sliderIndex-1].classList.add('slideInRight')
            }, 3000);
        }
    }

    activateAnimation()
    
    slides[0].parentElement.addEventListener('mouseenter', () => {
        clearInterval(pause)
    })
    slides[0].parentElement.addEventListener('mouseleave', () => {
        activateAnimation()
    })

}

export default slider