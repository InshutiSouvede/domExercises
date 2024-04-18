function addLables() {
    document.getElementById('username').setAttribute('placeholder', 'username')
    document.getElementById('password').setAttribute('placeholder', 'password')
    document.getElementById('confirmPassword').setAttribute('placeholder', 'confirm password')

}
// addLables()

const validateInput = async () => {
    let submtmsg = document.createElement('p')
    submtmsg.style.color = "green"
    document.getElementById('registrationForm').insertAdjacentElement("afterbegin",submtmsg)

    let button = document.querySelector('form button')
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log("You are submiting:", userInputs)
        submtmsg.textContent = "Registration was successful"
    })
   
    let inputs = document.querySelectorAll('input')
    let t1 = false, t2 = false, t3 = false
    let nameErrmsg = document.createElement('p')
    nameErrmsg.style.color = 'red'
    nameErrmsg.textContent = "Required"
    inputs[0].insertAdjacentElement("afterend", nameErrmsg)

    let pwdErrmsg = document.createElement('p')
    pwdErrmsg.style.color = 'red'
    pwdErrmsg.textContent = "Required"
    inputs[1].insertAdjacentElement("afterend", pwdErrmsg)

    let cfmpwdErrmsg = document.createElement('p')
    cfmpwdErrmsg.style.color = 'red'
    cfmpwdErrmsg.textContent = "Required"
    inputs[2].insertAdjacentElement("afterend", cfmpwdErrmsg)



    console.log('inputs:', inputs)
    let userInputs = [null, null, null]
    console.log(inputs[0])
    inputs[0].addEventListener('focus', (e) => {
        console.log("on focus")
        e.target.addEventListener('change', (ec) => {
            
            if (ec.currentTarget.value.length < 3 || ec.currentTarget.value.search('@') >= 0) {
                nameErrmsg.textContent = " Name Length should be more than 2 chars and no special chars"
                console.log("Length should be more than 2 chars and no special chars")
                t1 = false
                button.setAttribute('disabled', 'true')
                button.classList.remove('btn-success')
                button.classList.add('btn-primary')
            } else {
                userInputs[0] = ec.currentTarget.value
                console.log(userInputs)
                t1 = true
                nameErrmsg.textContent = ""
                if (t1 && t2 && t3) {
                    button.removeAttribute('disabled')
                    button.classList.add('btn-success')
                    button.classList.remove('btn-primary')
                }
            }
        })

    })
    inputs[1].addEventListener('focus', (e) => {
        console.log("on focus")
        e.target.addEventListener('change', (ec) => {
            if (ec.currentTarget.value.length < 4) {
                pwdErrmsg.textContent = " Password Length should be more than 2 chars"
                console.log("Password Length should be more than 3 chars")
                button.setAttribute('disabled', 'true')
                    button.classList.remove('btn-success')
                    button.classList.add('btn-primary')
            } else {
                userInputs[1] = ec.currentTarget.value
                console.log(userInputs)
                if (userInputs[2] && userInputs[2] != userInputs[1]) {
                    pwdErrmsg.textContent = "passwords must match"
                    console.log("passwords 1&2 must match")
                    t2 = false
                    button.setAttribute('disabled', 'true')
                    button.classList.remove('btn-success')
                    button.classList.add('btn-primary')
                } else {
                    t2 = true
                    pwdErrmsg.textContent = ""
                    if (t1 && t2 && t3) {
                        button.removeAttribute('disabled')
                        button.classList.add('btn-success')
                        button.classList.remove('btn-primary')
                    }
                }
            }

        })

    })
    inputs[2].addEventListener('focus', (e) => {
        console.log("on focus")
        e.target.addEventListener('change', (ec) => {
            if (ec.currentTarget.value.length < 1) {
                cfmpwdErrmsg.textContent = "Required"
                button.setAttribute('disabled', 'true')
                button.classList.remove('btn-success')
                button.classList.add('btn-primary')
            }
            else if (ec.currentTarget.value.length < 4) {
                cfmpwdErrmsg.textContent = " Password Length should be more than 2 chars"
                console.log("Length should be more than 3 chars")
            } else {
                userInputs[2] = ec.currentTarget.value
                console.log(userInputs)
                if (userInputs[1] != userInputs[2] || !userInputs[1]) {
                    cfmpwdErrmsg.textContent = "passwords must match"
                    console.log("Passwords 2&1 must match")
                    t3 = false
                    button.setAttribute('disabled', 'true')
                    button.classList.remove('btn-success')
                    button.classList.add('btn-primary')
                } else {
                    t3 = true
                    cfmpwdErrmsg.textContent = ""
                    if (t1 && t2 && t3) {
                        button.removeAttribute('disabled')
                        button.classList.add('btn-success')
                        button.classList.remove('btn-primary')
                    }
                }
            }
        })
    })

    button.setAttribute('disabled', 'true')

}
validateInput()