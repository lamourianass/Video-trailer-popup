const btnEl = document.querySelector(".btn")
const closeIconEl = document.querySelector(".close-icon")
const trailerContainerEl = document.querySelector(".trailer-container")

function btnClicked() {
  trailerContainerEl.classList.remove("active")
}

function closeIcon() {
  trailerContainerEl.classList.add("active")
}

btnEl.addEventListener("click", btnClicked)
closeIconEl.addEventListener("click", closeIcon)
