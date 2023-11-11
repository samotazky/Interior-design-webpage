//OVERLAY
let overlay = document.querySelector("#overlay")
let menuBtn = document.querySelector(".menu-btn")
let btn1 = document.querySelector(".bar-1")
let body = document.querySelector("body")

document.querySelector(".menu-btn").onclick = function () {
  overlay.classList.toggle("is-active")
  menuBtn.classList.toggle("change")
  body.classList.toggle("active-overlay")
}

let url = window.location.hash
console.log(url);