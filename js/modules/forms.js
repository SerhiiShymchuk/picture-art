const forms = () => {
    const form = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    let uploads = document.querySelectorAll('[name="upload"]')
//
    const message = {
        success: 'Спасибо, мы с вами свяжемся!',
        loading: 'Загрузка',
        failure: 'Что то пошло не так...',
        spinner: '../assets/img/spinner.gif',
        ok: '../assets/img/ok.png',
        fail: '../assets/img/fail.png',
    }
    const pathImg = {
        designer: '../assets/server.php',
        question: '../assets/question.php'
    }

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            body: data,
        })
        return await res.text()
    }

    const clearInput = () => {
        inputs.forEach(input => input.value = '')
        uploads.forEach(upload => {
            upload.value = ''
            upload.previousElementSibling.innerText = 'Файл не выбран'
        })
    }

    uploads.forEach(upload => {
        upload.addEventListener('input', () => {
            console.log(upload.files)
            let dots = ''
            let arrName = upload.files[0].name.split('.')
            arrName[0].length > 6 ? dots = '...' : dots = '.'
            const name = arrName[0].substring(0, 7) + dots + arrName[1]
            upload.previousElementSibling.innerText = name
        })
    })

    form.forEach(forma => {
        forma.addEventListener('submit', (e)=>{
            e.preventDefault()

            let statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            forma.parentElement.append(statusMessage)
            forma.classList.add('animated', 'fadePutUp')
            setTimeout(() => {
                forma.style.display = 'none'
            }, 400);

            let statusImg = document.createElement('img')
            statusImg.src = message.spinner
            statusImg.classList.add('animated', 'fadeInUp')
            statusMessage.append(statusImg)

            let textMessage = document.createElement('div')
            textMessage.innerText = message.loading
            statusMessage.append(textMessage)

            const formData = new FormData(forma)
            let api;
            forma.closest('.popup-design') || forma.classList.contains('calc_form') ? api = pathImg.designer : api = pathImg.question
            console.log(api)
            
            postData(api, formData)
            .then(res => {
                console.log(res)
                statusImg.src = message.ok
                console.log(statusImg)
                textMessage.innerText = message.success
            }).catch(res => {
                console.log(res)
                statusImg.src = message.fail
                console.log(statusImg)
                textMessage.innerText = message.failure
            }).finally(() => {
                clearInput()
                setTimeout(() => {
                    statusMessage.remove()
                    forma.style.display = 'block'
                    forma.classList.remove('fadeOutUp')
                    forma.classList.add('fadeInUp')
                }, 5000);
            })
            
        })
    })
}
export default forms