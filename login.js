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
let satauri = document.querySelector("#satauri")
let saxeli = document.querySelector("#name")
let paroli = document.querySelector("#pass")
let gilaki = document.querySelector("#loginbtn")
let link = document.querySelector("#reglink")
let erori = document.querySelector("#error")

function qartuli(){
    satauri.innerHTML = '<a href="index.html"><img  src="images/arrow.png" width="30px" class="arrow"></a>შედით თქვენს ანგარიშზე'
    saxeli.innerHTML = "<b>მომხმარებელის სახელი</b>"
    saxeli.style.right = "36px"
    paroli.innerHTML = "<b>პაროლი</b>"
    gilaki.innerHTML = "შესვლა"
    link.innerHTML = '<div>არ გაქვთ აქაუნთი? </div><a href="register.html">რეგისტრაცია</a>'
    erori.innerHTML = "მომხმარებლის სახელი ან პაროლი არასწორია"
}

function inglisuri(){
    satauri.innerHTML = '<a href="index.html"><img  src="images/arrow.png" width="30px" class="arrow"></a>LOGIN TO YOUR ACCOUNT'
    saxeli.innerHTML = "<b>user</b>"
    saxeli.style.right = "72px"
    paroli.innerHTML = "<b>password</b>"
    gilaki.innerHTML = "LOGIN"
    link.innerHTML = '<div>no account?</div><a href="register.html">register</a>'
    erori.innerHTML = "username or password is incorrect"
}

let Gmail = document.querySelector("#Gmail")

function qartuli2(){
    satauri.innerHTML = '<a href="index.html"><img  src="images/arrow.png" width="30px" class="arrow"></a>რეგისტრაცია'
    saxeli.innerHTML = "<b>მომხმარებელის სახელი</b>"
    saxeli.style.right = "36px"
    paroli.innerHTML = "<b>პაროლი</b>"
    Gmail.innerHTML = "<b>ელ-ფოსტა</b>"
    gilaki.innerHTML = "რეგისტრაცია"
    link.innerHTML = '<div>უკვე გაქვთ აქაუნთი?</div><a href="login.html">ავტორიზაცია</a>'
    erori.innerHTML = "დაფიქსირდა შეცდომა. გთხოვთ ცადეთ მოგვიანებით"
}

function inglisuri2(){
    satauri.innerHTML = '<a href="index.html"><img  src="images/arrow.png" width="30px" class="arrow"></a>REGISTER'
    saxeli.innerHTML = "user"
    saxeli.style.right = "72px"
    paroli.innerHTML = "password"
    Gmail.innerHTML = "Gmail"
    gilaki.innerHTML = "REGISTER"
    link.innerHTML = '<div>Already have an account?</div><a href="login.html">login</a>'
    erori.innerHTML = "An error has been detected. Please try again later"
}

let btn = document.querySelector("#loginbtn")
function animacia(){
    btn.style.margin = "40px 0px 10px 5px"
    btn.style.boxShadow = "none"
}
function animacia2(){
    btn.style.margin = "35px 0px 10px 0px"
    btn.style.boxShadow = " 4px 4px #1264ce"
}