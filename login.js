let error = document.querySelector("#error")
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let maindiv = document.querySelector("#maindiv")

function eror(){
    error.style.display = "block"
    username.value = ""
    password.value = ""
    maindiv.style.border = "solid 1px red"
}