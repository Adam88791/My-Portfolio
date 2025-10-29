const navbar = document.querySelector(".navbar");
const xmark = document.querySelector(".fa-xmark");
const bars = document.querySelector(".fa-bars");
const humburger = document.querySelector(".humburger");


humburger.addEventListener("click" , function () {
    xmark.classList.toggle("active");
    bars.classList.toggle("active");
    navbar.classList.toggle("active");
})