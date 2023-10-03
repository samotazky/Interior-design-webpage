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

// prerobiť tak aby sa pozadia menili postupne (použiť opacity)
// vložiť do backgroundImg viac pozadí kt sa budú meniť

// let homeBody = document.querySelector("body")
// let backgroundImg = ["url('/img/home.png')", "url('/img/Projekty.png')"]
// let currentIndex = 0

// let changeBackground = () => {

//   homeBody.style.backgroundImage = backgroundImg[currentIndex]
  
//   currentIndex = (currentIndex + 1)% backgroundImg.length
// }
  
//   let interval = setInterval(changeBackground, 5000)