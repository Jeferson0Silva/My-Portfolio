const container = document.querySelector("#container")

const imgs = []

const carousel = (url) => {
  return `
    <div id="carousel-modal" class="modal">
      <div class="modal-content">
        <div class="carousel">
          <div class="carousel-slides">
            <img class="imgs"
            src="${url}"
            alt=""
            />
          </div>
          <button class="prev-btn">&lt;</button>
          <button class="next-btn">&gt;</button>
        </div>
      </div>
      <button id="close-carousel" class="close-btn">&times;</button>
    </div>
  `;
};

const CarouselStructure = () => {
  const modal = container.querySelector("#carousel-modal");
  const closeBtn = modal.querySelector("#close-carousel");
  
  closeBtn.addEventListener('click', () => {
    modal.remove();
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

}

const openBtnMilao = container.querySelector('#openModalMilao');
const openBtnNetflix = container.querySelector('#openModalNetflix');
const openBtnTrainee = container.querySelector('#openModalTrainee');

openBtnTrainee.addEventListener('click', (e) => {
  e.preventDefault();
  const imgsP = ('./assets/imgs/t1.png', './assets/imgs/t2.png', './assets/imgs/t3.png');
  imgs.push({imgsP});

  imgs.forEach ((post) => {
    container.innerHTML += carousel(post.imgsP);
  });
  imgs.pop();

  CarouselStructure();
});

openBtnNetflix.addEventListener('click', (e) => {
  e.preventDefault();
  const imgsP = ('./assets/imgs/n1.png', './assets/imgs/n2.png', './assets/imgs/n3.png');
  imgs.push({imgsP});

  imgs.forEach ((post) => {
    container.innerHTML += carousel(post.imgsP);
  });
  imgs.pop();

  CarouselStructure();
});

openBtnMilao.addEventListener('click', (e) => {
  e.preventDefault();
  const imgsP = ('./assets/imgs/m1.png', './assets/imgs/m2.png', './assets/imgs/m3.png');
  imgs.push({imgsP});

  imgs.forEach ((post) => {
    container.innerHTML += carousel(post.imgsP);
  });
  imgs.pop();

  CarouselStructure();
});

