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
            // check if current item is not already in the list
            if (!table.textContent.includes(button.parentElement.getAttribute('data-id'))) {
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
                row.appendChild(tdId)
                row.appendChild(tdproduct)
                row.appendChild(tdquantity)
                row.appendChild(tdprice)
                row.appendChild(tdTtl)
                row.appendChild(tdDel)

                table.appendChild(row)
            }
            else{
                let rows = document.querySelectorAll('table tr')
                for(row of rows){                    // all columns
                    console.log(row)
                    let cols = row.querySelectorAll('td')
                    console.log("col 0: ",cols?.[0])
                    if(cols[0] && cols[0].textContent ==button.parentElement.getAttribute('data-id')){
                        cols[2].textContent = button.parentElement.querySelector('input').value
                        cols[4].textContent = parseInt(cols[2].textContent) * parseInt(cols[3].textContent)

                    }
                }
            }

        })
    }
}
attachBuyEvents()