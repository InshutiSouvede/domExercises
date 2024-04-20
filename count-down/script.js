 const countDown = async()=>{
    let sec = document.querySelectorAll('.card h2')[3]
    let min = document.querySelectorAll('.card h2')[2]
    let hour = document.querySelectorAll('.card h2')[1]
    let day = document.querySelectorAll('.card h2')[0]
    // console.log("here is the initial seconds",sec.textContent)
    if(parseInt(day.innerText)==0&&parseInt(hour.innerText)==0&&parseInt(min.innerText)==0&&parseInt(sec.innerText)<=1){
        stopTimer()
        let audio = new Audio('./beep.mp3')
        audio.autoplay=true
        audio.muted = 'muted'
        audio.play()
    }else
    if(parseInt(hour.innerText)==0&&parseInt(min.innerText)==0&&parseInt(sec.innerText)<=1){
        day.innerText = parseInt(day.innerText)-1
        hour.innerText = 23
        min.innerText = 59
        sec.innerText = 60
    } else
    if(parseInt(min.innerText)==0&&parseInt(sec.innerText)<=1){
        hour.innerText = parseInt(hour.innerText)-1
        min.innerText = 59
        sec.innerText = 60
    }else    
    if(parseInt(sec.innerText)<=1){
        min.innerText = parseInt(min.innerText)-1
        sec.innerText = 60
    }
    
    sec.innerText = parseInt(sec.innerText)-1
    console.log(sec.innerText)
}
let itval = setInterval(countDown,1000)
function stopTimer(){
    clearInterval(itval)
}
const button = document.querySelector('button')
button.addEventListener('click',(e)=>{
    stopTimer()
})
// countDown()