// function changeAllArticleColors(){
//     const products = document.querySelectorAll('#products article')
//     console.log(products)
// for (let article of products){
//     console.log(article)
//     article.classList.add("sale")
// }

// }
// changeAllArticleColors()

function attachBuyEvents() {
    const buttons = document.querySelectorAll("#products button")
    console.log(buttons)
    for (let button of buttons) {
        button.addEventListener('click', (e) => {
            // console.log("User clicked "+e.target.nodeName)
            // console.log("With Id: ",button.parentElement.getAttribute('data-id'))
            // button.parentElement.classList.toggle('sale')
            // console.log("You are ordering: ",button.parentElement.querySelector('input').value," ",button.parentElement.querySelector('h2').textContent)
            let table = document.querySelector('table')
            let ttrow = document.querySelector('tfoot > tr').querySelectorAll('th')
            console.log('Hello',ttrow[1])
            let rows = document.querySelectorAll('table tr'), trigger = 0
            for (row of rows) {
                let cols = row.querySelectorAll('td')
                if (cols[0] && cols[0].textContent == button.parentElement.getAttribute('data-id')) {
                    cols[2].textContent = button.parentElement.querySelector('input').value

                    let pastPrice = cols[4].textContent
                    cols[4].textContent = parseInt(cols[2].textContent) * parseInt(cols[3].textContent)


                    ttrow[1].textContent = parseInt(ttrow[1].textContent)+ parseInt(cols[4].textContent)-pastPrice
                    trigger = 1
                }
            }
            if (trigger == 0) {
                const row = document.createElement('tr')

                const tdId = document.createElement('td')
                tdId.textContent = button.parentElement.getAttribute('data-id')

                const tdproduct = document.createElement('td')
                tdproduct.textContent = button.parentElement.querySelector('h2').textContent

                const tdquantity = document.createElement('td')
                tdquantity.textContent = button.parentElement.querySelector('input').value

                const tdprice = document.createElement('td')
                tdprice.textContent = button.parentElement.querySelector('.price').textContent

                const tdTtl = document.createElement('td')
                tdTtl.textContent = parseInt(tdquantity.textContent) * parseInt(tdprice.textContent)
                
                const tdDel = document.createElement('td')
                tdDel.textContent = 'X'
                tdDel.addEventListener('click', (e) => {
                    // update the total amount
                    console.log("price to delete",e.target.parentElement.querySelectorAll('td')[4].textContent)
                    ttrow[1].textContent = parseInt(ttrow[1].textContent) - parseInt(e.target.parentElement.querySelectorAll('td')[4].textContent)
                    e.target.parentElement.remove()
                })
                ttrow[1].textContent = parseInt(ttrow[1].textContent)+ parseInt(tdTtl.textContent)


                row.appendChild(tdId)
                row.appendChild(tdproduct)
                row.appendChild(tdquantity)
                row.appendChild(tdprice)
                row.appendChild(tdTtl)
                row.appendChild(tdDel)

                table.appendChild(row)
            }

        })
    }
}
attachBuyEvents()