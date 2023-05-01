const header = document.querySelector("header");

function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.addEventListener("scroll", handleScroll);