let currentCar = 1
let car = document.querySelector("#cars")
let seats = document.querySelector("#seats")
let agwera = document.querySelector("#agwera")
function changeCar1(){
    car.src = "images/audi1.jpg"
}
function changeCar2(){
    car.src = "images/audi2.jpg"
}
function changeCar3(){
    car.src = "images/audi3.jpg"
}
function changeCar4(){
    car.src = "images/audi4.png"
}
function changeCar5(){
    car.src = "images/audi5.png"
}
function changeCar6(){
    car.src = "images/audi7.png"
}
function changeCar7(){
    car.src = "images/audi6.png"
}
function changeCar8(){
    car.src = "images/audi8.png"
}
function changeCar9(){
    car.src = "images/audi9.png"
}

function changeSeats1(){
    seats.src = "images/seats1.png"
    agwera.innerHTML = "Interior trim colors - seats: Arras Red-Arras Red-Crescendo Red, dashboard: Black-Black, carpet: Black, headliner: Black"
}
function changeSeats2(){
    seats.src = "images/seats2.png"
    agwera.innerHTML = "Interior trim colors - seats: Black-Black-Express Red, dashboard: Black-Black, carpet:  Black, headliner: Black"
}
function changeSeats3(){
    seats.src = "images/seats3.png"
    agwera.innerHTML = "Interior trim colors - seats: Black-Black-Steel Grey, dashboard:  Black-Black, carpet: Blac k, headliner: Black"
}
function changeSeats4(){
    seats.src = "images/seat4.png"
    agwera.innerHTML = "Interior trim colors - seats: Monaco Grey-Monaco Grey-Steel Grey, dashboard:  Blac k-Merino Grey, carpet: Black, headliner: Black"
}
function changeSeats5(){
    seats.src = "images/seats5.png"
    agwera.innerHTML = "Interior trim colors - seats: Santos Brown-Santos Brown, dashboard:  Black-Santos Brown, carpet: Black, headliner: Black"
}

document.addEventListener("DOMContentLoaded", function() {
    const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", function () {
if (document.documentElement.scrollTop > 500) {
    scrollBtn.style.display = "block";
} else {
    scrollBtn.style.display = "none";
}
});
})

function scrollToTop() {
const currentPosition = document.documentElement.scrollTop;

if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 8);
}
}