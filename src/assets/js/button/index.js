const btnTop = document.querySelector("#btnTop")

function toggleBtnTop() {
  const scroll = window.scrollY > window.innerHeight
  const screen = window.innerWidth > 1280

  btnTop.classList.toggle("btnOn", scroll && screen)
}

window.addEventListener("scroll", toggleBtnTop)
toggleBtnTop()

btnTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
