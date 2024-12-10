const container = document.querySelector("#container");

const imgs = () => {
  return `
    <div class="h-full flex items-start flex-wrap pt-14 gap-4">
        <div class="w-36 h-32 flex flex-col items-center justify-around border border-solid border-black">
            <img class="w-16 h-16" src="/src/assets/imgs/html-5.png" alt="HTML5 logo">
            <p class="font-semibold">HTML</p>
        </div>
        <div class="w-36 h-32 flex flex-col items-center justify-around border border-solid border-black">
            <img class="w-16 h-16" src="/src/assets/imgs/css-3.png" alt="CSS3 logo">
            <p class="font-semibold">CSS</p>
        </div>
        <div class="w-36 h-32 flex flex-col items-center justify-around border border-solid border-black">
            <img class="w-16 h-16" src="/src/assets/imgs/js.png" alt="JavaScript logo">
            <p class="font-semibold">JavaScript</p>
        </div>
        <div class="w-36 h-32 flex flex-col items-center justify-around border border-solid border-black">
            <img class="w-16 h-16" src="/src/assets/imgs/tailw.png" alt="Tailwind CSS logo">
            <p class="font-semibold">Tailwind CSS</p>
        </div>
    </div>
  `
};

const aboutImg = container.querySelector(".aboutImgs");
aboutImg.innerHTML += imgs()
