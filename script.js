const btnEl = document.querySelector(".btn")
const closeIconEl = document.querySelector(".close-icon")
const trailerContainerEl = document.querySelector("trailer-container")

function btnClicked() {
  console.log("Button Clicked")
}

btnEl.addEventListener("click", btnClicked)
