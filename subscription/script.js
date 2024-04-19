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
function toggleYear() {
    const subscriptions = document.querySelectorAll('.card-deck .card-body')
    console.log("Subscription contain: ", subscriptions[0])
    
    // const pro = document.querySelector('#pro-plan .card-body')


    const yearly = document.createElement('label')
    const name = subscriptions[0].querySelector('button').textContent
    yearly.innerHTML = '<input type="radio" name=' + name + ' id = "year' + name[0] + '" autocomplete="off"> Year'
    subscriptions[0].insertAdjacentElement('afterbegin', yearly)


    // check for event in a given card not general
    yearly.addEventListener('click', (e) => {
        let f = document.createElement('li')
        f.innerHTML = '<b>2 Months free trial</b>'
        console.log("Yearly was clicked")
        console.log("The one that you clicked was in ", e.target.parentElement.innerHTML)
        !subscriptions[0].querySelector('b')&&subscriptions[0].querySelector('ul').appendChild(f)
    })

    const monthly = document.createElement('label')
    // monthly.setAttribute('for', 'month')
    const bname = subscriptions[0].querySelector('button').textContent
    monthly.innerHTML = '<input type="radio" name=' + bname + ' id = "month' + bname[0] + '" autocomplete="off" checked> Month'
    subscriptions[0].insertAdjacentElement('afterbegin', monthly)

    // check for event in a given card not general
    monthly.addEventListener('click', (e) => {
        console.log("you clicked monthy in ", e.target.parentElement.innerHTML)
        subscriptions[0].querySelector('b') && subscriptions[0].querySelector('b').remove()
    })


}
toggleYear()
function toggleMonths() {
    const subscriptions = document.querySelectorAll('.card-deck .card-body')
    console.log("Subscription contain: ", subscriptions[1])
    
    // const pro = document.querySelector('#pro-plan .card-body')


    const yearly = document.createElement('label')
    const name = subscriptions[1].querySelector('button').textContent
    yearly.innerHTML = '<input type="radio" name=' + name + ' id = "year' + name[0] + '" autocomplete="off"> Year'
    subscriptions[1].insertAdjacentElement('afterbegin', yearly)


    // check for event in a given card not general
    yearly.addEventListener('click', (e) => {
        let f = document.createElement('li')
        f.innerHTML = '<b>2 Months free trial</b>'
        console.log("Yearly was clicked")
        console.log("The one that you clicked was in ", e.target.parentElement.innerHTML)
        !subscriptions[1].querySelector('b')&&subscriptions[1].querySelector('ul').appendChild(f)
    })

    const monthly = document.createElement('label')
    // monthly.setAttribute('for', 'month')
    const bname = subscriptions[1].querySelector('button').textContent
    monthly.innerHTML = '<input type="radio" name=' + bname + ' id = "month' + bname[0] + '" autocomplete="off" checked> Month'
    subscriptions[1].insertAdjacentElement('afterbegin', monthly)

    // check for event in a given card not general
    monthly.addEventListener('click', (e) => {
        console.log("you clicked monthy in ", e.target.parentElement.innerHTML)
        subscriptions[1].querySelector('b') && subscriptions[1].querySelector('b').remove()
    })


}
toggleMonths()