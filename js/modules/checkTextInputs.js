// обмеження вводу символів, дозволяється лише символи кирилицею та числа

const checkTextInputs = (selector) => {
    const inputs = document.querySelectorAll(selector)
    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-я 0-9]/ig)) e.preventDefault() // не зрозуміло чому без символа початку рядка - кришки - не працює валідатор інпута
        })
    })
}

export default checkTextInputs