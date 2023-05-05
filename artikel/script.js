async function getData() {
    let url = 'https://644e67144e86e9a4d8f7c68e.mockapi.io/artikel'
    try {
        let res = await fetch(url)
        return await res.json();
    } catch (error){
        console.log(error)
    }
}

async function renderData() {
    let data = await getData()
    let html = ''
    data.forEach(content => {
        let htmlSegment = `<a href="">
        <div class="card-box">
            <img src = "${content.image}"></img>
            <h2>${content.title}</h2>
        </div>
        </a>`

        html += htmlSegment
    })

    let card = document.querySelector('.row-card')
    card.innerHTML = html
}

renderData()

const header = document.querySelector("header");

function handleScroll() {
    if (window.scrollY > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.addEventListener("scroll", handleScroll);

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})