const paragraph = document.querySelector("#myParagraph").textContent;
const words = paragraph.split(" ");
// console.log(words.includes(''))

const wordObjs = {}, spChars = /[",.\n]/gi

// const ws = []

for(const word of words){
    if(word!=''){
        // check for special characters
        if(word.search(spChars)>=0){
            const nword = word.replaceAll(spChars,'')
            // ws.push(nword)

            // if word without special chars is in not object  
            if(!Object.keys(wordObjs).includes(nword)){
                wordObjs[nword] = 1//wordObj.nword = 1
            
            }else{//if word without special chars is in object 
                wordObjs[nword] +=1
            }
        }else{
            if(!Object.keys(wordObjs).includes(word)){
                wordObjs[word] = 1
            
            }else{
                wordObjs[word] +=1
            }
        }
        // if wordObjs does hav current word
        
    }
}
console.log(wordObjs)
// words with special chars
// console.log("words with special char",ws)


const arr = []

for(const [k, value] of Object.entries(wordObjs)) {
    arr.push({[k]: value})
}

// console.log(arr)

// Sort `arr` based on the values in the objects
arr.sort((a, b) => {
    // Get the values from the objects
    const valueA = Object.values(a)[0];
    const valueB = Object.values(b)[0];

    // Compare the values
    return valueB - valueA; // For ascending order, use `valueA - valueB`
    // For descending order, use `valueB - valueA`
});
const mostOccur = arr.slice(0,12)
// Output the sorted array
console.log(mostOccur);
const cloudDiv = document.querySelector('#myWordCloud')
let p = document.createElement('p')
// cloudDiv.appendChild(p)

const sizes = [64, 60, 56, 52, 48, 44,40, 36, 32, 28, 24, 20, 16, 12]

for (let i = 0; i < mostOccur.length; i++) {
    let spanElement = document.createElement('span')
    spanElement.textContent = " "+Object.keys(mostOccur[i])[0]+" "
    spanElement.style.cssText=`font-size: ${sizes[i]}px; color: rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)});`
    p.appendChild(spanElement)
}
cloudDiv.appendChild(p)


