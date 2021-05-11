const mask = (selector) => {
    function createMask(event) {
        let matrix = '+38 (---) --- -- --',
            i = 0,
            val = this.value.replace(/\D/g, ''), //те що вводить користувач
            def = matrix.replace(/\D/g, ''); 
        if (val.length <= def.length) val = def // для заборони видалення +38 користувачем

        this.value = matrix.replace(/./g, function(char) {
            return /[-\d]/.test(char) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : char; 
        })

        if (event.type === 'blur') {
            if (this.value.length == '3') this.value = ''
        } else {
            setCursorPosition(this.value.length, this)
        }

        function setCursorPosition(position, element) {
            element.focus()
            element.setSelectionRange(position, position)
        }
    }

    const inputs = document.querySelectorAll(selector)
    inputs.forEach(input => {
        input.addEventListener('input', createMask)
        input.addEventListener('focus', createMask)
        input.addEventListener('blur', createMask)
    })
}

export default mask