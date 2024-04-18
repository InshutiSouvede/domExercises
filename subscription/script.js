function addFeature() {
    let features = document.querySelectorAll('.card-body ul')
    for (const card of features) {
        let f = document.createElement('li')
        f.textContent = '24/7 Phone support'
        card.appendChild(f)
    }
}
addFeature()
function swap() {
    // inspect why flex-flow: row-reverse does not work
    let card = document.querySelectorAll('.card')
    const temp = card[0].outerHTML
    card[0].outerHTML = card[1].outerHTML
    card[1].outerHTML = temp
    // console.log("I just swapped them")
}
swap()
function updatePro() {
    const button = document.querySelector('#pro-plan button')
    // console.log(button)
    button.style.backgroundColor = '#007bff'
    button.style.color = 'white'
    button.textContent = 'Buy Now'
}
updatePro()
function promotion() {
    // 50% more storage on the Basic plan and 25% more on the Pro plan
    const basicst = document.querySelector('#basic-plan li span')
    basicst.textContent = parseInt(basicst.textContent) * 1.5

    const prost = document.querySelector('#pro-plan li span')
    prost.textContent = parseInt(prost.textContent) * 1.25
}
promotion()
function toggleMonths() {
    const subscriptions = document.querySelectorAll('.card-deck .card-body')
    let f = document.createElement('li')
    f.innerHTML = '<b>2 Months free trial</b>'
    const pro = document.querySelector('#pro-plan .card-body')
    for (const card of subscriptions) {
        console.log("This a where you are going to add a toggle", card)
        const yearly = document.createElement('label')
        const name = card.querySelector('button').textContent
        yearly.innerHTML = '<input type="radio" name=' + name + ' id = "year"  autocomplete="off"> Year'
        card.insertAdjacentElement('afterbegin', yearly)



        yearly.addEventListener('click', (e) => {
            console.log("Yearly was clicked")
            !card.querySelector('b')&&card.querySelector('ul').appendChild(f)
        })

        const monthly = document.createElement('label')
        monthly.setAttribute('for', 'month')
        monthly.innerHTML = '<input type="radio" name=' + name + ' id = "month" autocomplete="off" checked> Month'
        card.insertAdjacentElement('afterbegin', monthly)

        monthly.addEventListener('click', (e) => {
            card.querySelector('b')&&card.querySelector('b').remove()
        })
    }


}
toggleMonths()