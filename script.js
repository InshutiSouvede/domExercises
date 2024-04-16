// function changeAllArticleColors(){
//     const products = document.querySelectorAll('#products article')
//     console.log(products)
    // for (let article of products){
    //     console.log(article)
    //     article.classList.add("sale")
    // }

// }
// changeAllArticleColors()

function attachBuyEvents(){
    const buttons = document.querySelectorAll("#products button")
    console.log(buttons)
    for (let button of buttons){
        button.addEventListener('click',(e)=>{
            console.log("User clicked "+e.target.nodeName)
            console.log("With Id: ",button.parentElement.getAttribute('data-id'))
            button.parentElement.classList.toggle('sale')
            console.log("You are ordering: ",button.parentElement.querySelector('input').value," ",button.parentElement.querySelector('h2').textContent)

        })
    }
}
attachBuyEvents()