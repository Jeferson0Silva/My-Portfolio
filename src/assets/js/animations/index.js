const items = document.querySelectorAll(".animation");

function checkScroll() {
    const height = window.innerHeight;

    items.forEach( (e) => {
        const itemsTop = e.getBoundingClientRect().top;
        const heightModified = height - 60

        if (itemsTop < heightModified) {
            e.classList.add("animationOn");
        }
    });
}

window.addEventListener("scroll", checkScroll);
checkScroll();