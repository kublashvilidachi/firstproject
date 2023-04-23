let error = document.querySelector("#error")
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let maindiv = document.querySelector("#maindiv")
let mail = document.querySelector("#mail")

function eror(){
    error.style.display = "block"
    username.value = ""
    password.value = ""
    maindiv.style.border = "solid 1px red"
    maindiv.style.boxShadow = "0px 0px 8px red"
}
function regeror(){
    error.style.display = "block"
    username.value = ""
    password.value = ""
    maindiv.style.border = "solid 1px red"
    mail.value = ""
    maindiv.style.boxShadow = "0px 0px 8px red"
}