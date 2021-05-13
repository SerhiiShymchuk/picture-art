const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
    let sum = 0

    const caclFunction = () => {
        sum = Math.round((+sizeBlock.value)*(+materialBlock.value)+(+optionsBlock.value))
        if (sizeBlock.value === '' || materialBlock.value === '') resultBlock.innerText = 'Выберите размер и материал картины'
        else if (promocodeBlock.value === 'IWANTPOPART') resultBlock.innerText = Math.round(sum * 0.7)
        else resultBlock.innerText = sum
    }

    sizeBlock.addEventListener('change', caclFunction)
    materialBlock.addEventListener('change', caclFunction)
    optionsBlock.addEventListener('change', caclFunction)
    promocodeBlock.addEventListener('input', caclFunction)
}

export default calc