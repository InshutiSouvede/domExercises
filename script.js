function highlight() {
    let paragraph = document.querySelector('p').textContent
    let pArr = paragraph.split(' ')
    console.log(pArr)
    let fcontent = ''
    for (i = 0; i < pArr.length; i++) {
        if (pArr[i].length > 8) {
            fcontent += ' <span style="background-color:yellow;">' + pArr[i] + "</span>"
        } else {
            fcontent += " " + pArr[i]
        }
        // console.log(fcontent)
    }
    document.querySelector('p').innerHTML = fcontent
    let par = document.querySelector('p')

    par.insertAdjacentHTML("afterend", "<a href='https://forcemipsum.com'>Anotherr course</a>")

}
// highlight()
function splitPar() {
    let par = document.querySelector('p').textContent
    let content = '<p>'
    for (i = 0; i < par.length; i++) {
        if (par[i] == "\n") {
            content += '</p><p>'
            console.log("encountered next line after", par[i - 1])
        } else {
            content += par[i]
        }
    }
    document.querySelector('p').outerHTML = content + "</p>"
}
// splitPar()
function numPar() {
    // console.log("I was called")
    let par = document.getElementsByTagName('p')[0].textContent
    let counter = par.split(' ').length
    console.log(counter)
    document.querySelector('h1').insertAdjacentHTML("afterend", '<i>(' + counter + ') words</i>')

}
// numPar()
function replaceMark() {
    console.log("I was called")
    let par = document.querySelector('p').textContent
    
    let content = ''
    for (i = 0; i < par.length; i++) {
        if (par[i] == "?") {
            content += '🤔'
            // console.log("encountered next line after", par[i - 1])
        } else {
            content += par[i]
        }
    }
    document.querySelector('p').textContent = content
}
// replaceMark()
function allInOne(){
    let paragraph = document.querySelector('p').textContent

    let pArr = paragraph.split(' ')
    document.querySelector('h1').insertAdjacentHTML("afterend", '<i>(' + pArr.length + ') words</i>')
    console.log(pArr)
    let fcontent = '<p>'
    for (i = 0; i < pArr.length; i++) {
        let charAdded = 0
        // console.log(pArr[i].includes('\n')?"This includes a next line "+pArr[i]:"")
        if (pArr[i].length > 8) {
            fcontent += ' <span style="background-color:yellow;">' + pArr[i] + "</span>"
            charAdded = 1
        }
        if(pArr[i].includes('\n') && pArr[i].includes("?") ) {
            let n = pArr.indexOf('\n')
            let q = pArr.indexOf('?')
            console.log("the word with nextline ", pArr[i]," it will become ",pArr[i].slice(0,n)+'</p><p>')
            fcontent += " "+pArr[i].slice(0,q)+pArr[i].slice(q,n)+'</p><p>'
            charAdded = 1
            // console.log("encountered next line after", pArr[i - 1])
        } 
        else if(pArr[i].endsWith('\n')){
            fcontent += " "+pArr[i].slice(0,pArr[i].length-1)+'</p><p>'
        }
        else if (pArr[i].endsWith("?")) {
            
            // console.log("the word with ? ", pArr[i]," it will become ",pArr[i].slice(0,q)+'🤔')
            fcontent += " "+pArr[i].slice(0,pArr[i].length-1)+'🤔'
            charAdded = 1
            // console.log("encountered next line after", par[i - 1])
        } 
    
        if(!charAdded) {
            fcontent += " " + pArr[i]
        }
        // console.log(fcontent)
    }
    document.querySelector('p').innerHTML = fcontent
    let par = document.querySelector('p')

    par.insertAdjacentHTML("afterend", "<a href='https://forcemipsum.com'>Anotherr course</a>")

}
// allInOne()