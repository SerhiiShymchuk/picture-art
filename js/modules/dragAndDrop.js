const dragAndDrop = () => {
    const inputs = document.querySelectorAll('[name="upload"]')
    const events = ['dragenter', 'dragleave', 'dragover', 'drop']

    events.forEach(eventName => {
        inputs.forEach(input => input.addEventListener(eventName, preventDefaults, /*false*/))
    })

    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }
    function highLight(element) {
        element.closest('.file_upload').style.border = '5px solid yellow'
        element.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)'
    }
    function unhighLight(element) {
        element.closest('.file_upload').style.border = 'none'
        element.closest('.file_upload').style.backgroundColor = '#ededed'
    }
    events.forEach(eventName => {
        if (eventName == 'dragenter' || eventName == 'dragover') {
            inputs.forEach(input => input.addEventListener(eventName, () => highLight(input)))
        } else {
            inputs.forEach(input => input.addEventListener(eventName, () => unhighLight(input)))
        }
    })
    inputs.forEach(input => input.addEventListener('drop', (e) => {
        input.files = e.dataTransfer.files
        console.log(input.files)
        let dots = ''
        let arrName = input.files[0].name.split('.')
        arrName[0].length > 6 ? dots = '...' : dots = '.'
        const name = arrName[0].substring(0, 7) + dots + arrName[1]
        input.previousElementSibling.innerText = name
    }))

}

export default dragAndDrop