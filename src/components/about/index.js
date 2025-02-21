const container = document.querySelector("#container")

const imgs = () => {
  return `
    <div class="carouselContent flex gap-3">
        <p class="pl-3">HTML</p>
        <span>/</span>
        <p>CSS3</p>
        <span>/</span>
        <p>JavaScript</p>
        <span>/</span>
        <p>Tailwind</p>
        <span>/</span>
        <p>Git</p>
        <span>/</span>
        <p>Github</p>
        <span>/</span>
        <p>Figma</p>
        <span">/</span>
    </div>
  `
}

const carouselContainer = container.querySelector(".carouselContainer")

for (let i = 0; i < 4; i++) {
  carouselContainer.innerHTML += imgs()
}
