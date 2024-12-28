const container = document.querySelector("#container")

const imgs = () => {
  return `
    <div class="h-full flex items-start flex-wrap gap-4">
        <div class="w-44 h-40 flex items-center justify-center flex-col gap-3">
            <img class="w-16 h-16" src="/src/assets/imgs/html-5.png" alt="HTML5 logo">
            <p class="font-semibold text-4">HTML</p>
        </div>
        <div class="w-44 h-40 flex items-center justify-center flex-col gap-3">
            <img class="w-16 h-16" src="/src/assets/imgs/css-3.png" alt="CSS3 logo">
            <p class="font-semibold text-4">CSS3</p>
        </div>
        <div class="w-44 h-40 flex items-center justify-center flex-col gap-3">
            <img class="w-16 h-16" src="/src/assets/imgs/js.png" alt="JavaScript logo">
            <p class="font-semibold text-4">JavaScript</p>
        </div>
        <div class="w-44 h-40 flex items-center justify-center flex-col gap-3">
            <img class="w-16 h-16" src="/src/assets/imgs/tailw.png" alt="Tailwind CSS logo">
            <p class="font-semibold text-4">Tailwind CSS</p>
        </div>
        <div class="w-44 h-40 flex items-center justify-center flex-col gap-3">
            <img class="w-16 h-16" src="/src/assets/imgs/git.png" alt="Git logo">
            <p class="font-semibold text-4">Git</p>
        </div>
        <div class="w-44 h-40 flex items-center justify-center flex-col gap-3">
            <img class="w-16 h-16" src="/src/assets/imgs/github1.png" alt="Github logo">
            <p class="font-semibold text-4">Github</p>
        </div>
        <div class="w-44 h-40 flex items-center justify-center flex-col gap-3">
            <img class="w-16 h-16" src="/src/assets/imgs/figma.png" alt="Figma logo">
            <p class="font-semibold text-4">Figma</p>
        </div>
    </div>
  `
}

const aboutImg = container.querySelector(".aboutImgs")
aboutImg.innerHTML += imgs()
