document.addEventListener("DOMContentLoaded", () => {
    const btnTop = document.querySelector("#btnTop");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btnTop.style.display = "block";
      } else {
        btnTop.style.display = "none";
      }
    });
  
    btnTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  