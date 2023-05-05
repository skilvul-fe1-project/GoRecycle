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
    nav.classList.toggle("open");
})

async function getData() {
    let url = 'https://6450a341e1f6f1bb229b7974.mockapi.io/api/v1/articles/1'
    try {
        let res = await fetch(url)
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}

async function renderData() {
    let data = await getData()
    let html = ''
    // data.forEach(content => {
        // let htmlSegment = `<a href="/deskripsi-artikel/berita.html?id=${content.id}">
        // <div class="card-box">
        //     <img src = "${content.image}"></img>
        //     <h2>${content.title}</h2>
        // </div>
        // </a>`

        let htmlSegment = `<img src="${data.image}" alt="Skilvul">
        <div class="descripsi">
            <p>${data.date}</p>
            <h2>${data.title}</h2>
            <a href="/deskripsi-artikel/berita.html?id=${data.id}">Selengkapnya</a>
        </div>`

        html += htmlSegment
    // })

    let card = document.querySelector('#deskripsi-berita')
    card.innerHTML = html
}

renderData()