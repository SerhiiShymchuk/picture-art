import { getResource } from '../services/requests.js'

const showMoreStyles = (trigger, styles) => {
    const cards = document.querySelector(styles)
    const btn = document.querySelector(trigger)
    const url = '../../db.json' 
    //'http://localhost:3004/styles' якщо використовувати json server

    function createCards(res) {
        res.forEach(obj => {
            let card = document.createElement('div')
            card.classList.add('animated', 'fadeInUp')  
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
            card.innerHTML = `
                <div class=styles-block>
                    <img src=${obj.src}>
                    <h4>${obj.tittle}</h4>
                    <a href=${obj.link}>Подробнее</a>
                </div>
            `
            cards.append(card)
        })
    }

    btn.addEventListener('click', function () {
        getResource(url)
        .then(res => createCards(res.styles))
        .catch(err => console.log(err))
        this.remove()
    })
}

export default showMoreStyles