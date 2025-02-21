const container = document.querySelector("#container")

let imgs
let currentIndex = 0

const carousel = (url) => {
  const modal = document.createElement("div")
  modal.id = "modal"
  modal.classList.add("modal")

  modal.innerHTML = `
    <div class="modalContent">
        <div class="carousel">
            <div class="carouselImgs">
                <img class="imgs" src="${url}" alt="Carousel de imagens" />
            </div>
            <button class="prevBtn">
                <img class="imgPrevBtn" src="./assets/imgs/prevbtn.png" alt="previous button">
            </button>
            <button class="nextBtn">
                <img class="imgNextBtn" src="./assets/imgs/nextbtn.png" alt="next button">
            </button>
            <button id="closeBtn" class="closeBtn">
                <img class="imgCloseBtn" src="./assets/imgs/closebtn.png" alt="close button">
            </button>
        </div>
    </div>
  `

  return modal
}

const updateImage = (index) => {
  const imgElement = document.querySelector(".carouselImgs img")
  imgElement.src = imgs[index]
}

const CarouselStructure = (modal) => {
  const closeBtn = modal.querySelector("#closeBtn")
  const nextBtn = modal.querySelector(".nextBtn")
  const prevBtn = modal.querySelector(".prevBtn")

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imgs.length
    updateImage(currentIndex)
  })

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length
    updateImage(currentIndex)
  })

  closeBtn.addEventListener("click", () => {
    modal.remove()
  })
}

const openModal = (imgsProject) => {
  imgs = imgsProject
  currentIndex = 0

  const modal = carousel(imgs[currentIndex])
  container.appendChild(modal)
  CarouselStructure(modal)
}

const openBtnMilao = container.querySelector("#openModalMilao")
const openBtnNetflix = container.querySelector("#openModalNetflix")
const openBtnTrainee = container.querySelector("#openModalTrainee")

openBtnTrainee.addEventListener("click", (e) => {
  e.preventDefault()
  openModal([
    "./assets/imgs/Trainee1.png",
    "./assets/imgs/Trainee2.png",
    "./assets/imgs/Trainee3.png",
  ])
})

openBtnNetflix.addEventListener("click", (e) => {
  e.preventDefault()
  openModal([
    "./assets/imgs/Netflix1.png",
    "./assets/imgs/Netflix2.png",
    "./assets/imgs/Netflix3.png",
  ])
})

openBtnMilao.addEventListener("click", (e) => {
  e.preventDefault()
  openModal([
    "./assets/imgs/Milao1.png",
    "./assets/imgs/Milao2.png",
    "./assets/imgs/Milao3.png",
  ])
})
