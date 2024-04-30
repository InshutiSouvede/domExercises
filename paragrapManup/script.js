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
        let needsBg=0,ndEmo = 0,nepar =0
        // console.log(pArr[i].includes('\n')?"This includes a next line "+pArr[i]:"")
        if (pArr[i].length > 8) {
            needsBg =1
        }
        if(pArr[i].includes('\n')) {
            nepar = 1
        }
        if(pArr[i].includes('?')){
            ndEmo = 1
        }
        fcontent +=  needsBg&&ndEmo&&nepar? ' <span style="background-color:yellow;">' + pArr[i].replace('?','🤔').replace('\n','</p><p>') + "</span>" 
        : needsBg&&ndEmo? ' <span style="background-color:yellow;">' + pArr[i].replace('?','🤔')+ "</span>"
        :needsBg&&nepar?' <span style="background-color:yellow;">' + pArr[i].replace('\n','</p><p>')+ "</span>"
        :ndEmo&&nepar? " "+ pArr[i].replace('?','🤔').replace('\n','</p><p>')
        :ndEmo?" "+ pArr[i].replace('?','🤔')
        :nepar?" "+ pArr[i].replace('\n','</p><p>')
        :needsBg?' <span style="background-color:yellow;">' + pArr[i] + "</span>"
        :" " + pArr[i]
    }
    document.querySelector('p').innerHTML = fcontent+"</p>"
    let par = document.querySelector('p')

    par.insertAdjacentHTML("afterend", "<a href='https://forcemipsum.com'>Anotherr course</a>")

}
allInOne()
