const container = document.querySelector("#container")

const imgs = () => {
  return `
    <div class="carouselContent flex gap-3">
        <p class="text-1 text-lg font-semibold pl-3">HTML</p>
        <span class="text-1 text-lg font-semibold">/</span>
        <p class="text-1 text-lg font-semibold">CSS3</p>
        <span class="text-1 text-lg font-semibold">/</span>
        <p class="text-1 text-lg font-semibold">JavaScript</p>
        <span class="text-1 text-lg font-semibold">/</span>
        <p class="text-1 text-lg font-semibold">Tailwind</p>
        <span class="text-1 text-lg font-semibold">/</span>
        <p class="text-1 text-lg font-semibold">Git</p>
        <span class="text-1 text-lg font-semibold">/</span>
        <p class="text-1 text-lg font-semibold">Github</p>
        <span class="text-1 text-lg font-semibold">/</span>
        <p class="text-1 text-lg font-semibold">Figma</p>
        <span class="text-1 text-lg font-semibold">/</span>
    </div>
  `
}

const carouselContainer = container.querySelector(".carouselContainer")

for (let i = 0; i < 4; i++) {
  carouselContainer.innerHTML += imgs()
}
