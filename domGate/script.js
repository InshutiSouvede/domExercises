let p = document.querySelector('p')
let visbtn = document.getElementById('visibility')
let sizebtn = document.getElementById('increase')
visbtn.addEventListener('click',(e)=>{
    p.classList.toggle('hide')
})
let size = 20
sizebtn.addEventListener('dblclick',(e)=>{    
 size += 4
p.style.fontSize = `${size}px`
})
